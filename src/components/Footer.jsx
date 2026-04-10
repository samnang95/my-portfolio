import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-card relative border-t border-border mt-12 flex justify-center items-center">
      <p className="text-sm text-muted-foreground text-center text-gray-500">
        &copy; {new Date().getFullYear()} Pedrotech.co. All rights reserved.
      </p>
      <a
        href="#hero"
        className="absolute right-4 md:right-8 p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
