import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields (name, email, message)" },
        { status: 400 }
      );
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    // Fallback in case env is not yet set up
    if (!botToken || !chatId) {
      console.warn(
        "Telegram bot token or chat ID is missing in .env.local. Operating in demo mode."
      );
      return NextResponse.json({
        success: true,
        demoMode: true,
        message: "Message received in demo mode. Please set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in .env.local to receive notifications in Telegram.",
      });
    }

    const text = `📬 *New Contact Message from Portfolio!*

👤 *Name:* ${escapeMarkdown(name)}
📧 *Email:* \`${escapeMarkdown(email)}\`
🏷️ *Subject:* ${escapeMarkdown(subject || "General Inquiry")}

💬 *Message:*
${escapeMarkdown(message)}
`;

    const telegramRes = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "Markdown",
        }),
      }
    );

    if (!telegramRes.ok) {
      const errorData = await telegramRes.json().catch(() => ({}));
      console.error("Telegram API error:", errorData);
      return NextResponse.json(
        { error: "Failed to send message to Telegram" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

function escapeMarkdown(text: string): string {
  return text.replace(/[_*[\]()~`>#+=|{}.!-]/g, "\\$&");
}
