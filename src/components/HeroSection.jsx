import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              រិន
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              សំណាង
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Welcome to my portfolio! I'm just a junior web developer!
          </p>
          <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#projects" className="cosmic-button">
              View My Projects
            </a>
            <a 
              href="/CV.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              download="Rin_Samnang_CV.pdf"
              className="px-6 py-2 rounded-full border-2 border-primary text-primary font-medium transition-all duration-300 hover:shadow-[0_0_10px_rgba(139,92,246,0.5)] hover:bg-primary/10 hover:scale-105 active:scale-95"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
      <a href="#about" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </a>
    </section>
  );
};
