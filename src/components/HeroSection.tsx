import Icon from "@/components/ui/icon";

interface HeroSectionProps {
  scrollTo: (href: string) => void;
}

export default function HeroSection({ scrollTo }: HeroSectionProps) {
  return (
    <section className="pt-24 md:pt-0 min-h-screen flex items-end md:items-center relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/552ff5ae-1510-4e54-8df4-2f4097d4cd94/files/e4fea4ab-67be-4a1b-b870-88b8e89b43b0.jpg)` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#c8621a]/70 via-[#d4830a]/40 to-[#1e1a14]/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e1a14]/60 via-[#1e1a14]/20 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-32 w-full">
        <div className="max-w-xl">
          <span className="inline-block text-xs font-golos tracking-[0.2em] uppercase text-[#f5ddb4] mb-6 bg-[#8b5e3c]/50 backdrop-blur-sm border border-[#d4a96a]/40 px-4 py-2 rounded-full">
            Живая закваска · Без дрожжей
          </span>
          <h1 className="font-cormorant text-5xl md:text-7xl font-light text-white leading-[1.1] mb-6 drop-shadow-lg">
            Ремесленный хлеб,<br />
            <em className="not-italic font-semibold text-[#f5c87a]">в котором живёт душа</em>
          </h1>
          <p className="font-cormorant text-3xl md:text-4xl font-light text-[#f5ddb4] leading-snug mb-10 drop-shadow-lg italic">
            Наполни свой день ароматом свежего хлеба
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollTo("#catalog")}
              className="bg-[#f5c87a] text-[#1e1a14] px-8 py-4 rounded-full text-base hover:bg-[#f0b84a] transition-all duration-300 font-golos tracking-wide font-medium shadow-lg"
            >
              Смотреть каталог
            </button>
            <button
              onClick={() => scrollTo("#about")}
              className="border border-white/50 text-white px-8 py-4 rounded-full text-base hover:bg-white/10 hover:border-white transition-all duration-300 font-golos tracking-wide backdrop-blur-sm"
            >
              О закваске
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70">
        <span className="text-xs tracking-widest uppercase font-golos">Листайте вниз</span>
        <Icon name="ChevronDown" size={18} className="animate-bounce" />
      </div>
    </section>
  );
}
