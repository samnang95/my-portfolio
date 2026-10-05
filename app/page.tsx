export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-lime-400">
          Developer Portfolio
        </p>

        <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
          Hi, I&apos;m Samnang.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-zinc-400">
          Flutter Developer building mobile apps and backend systems.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="rounded-full bg-lime-400 px-6 py-3 font-semibold text-black transition hover:scale-105">
            View Projects
          </button>

          <button className="rounded-full border border-zinc-700 px-6 py-3 font-semibold transition hover:bg-zinc-800">
            Contact Me
          </button>
        </div>
      </div>
    </main>
  );
}
