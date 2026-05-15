import { useState } from "react";
import Icon from "@/components/ui/icon";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import CatalogSection, { PRODUCTS, Product } from "@/components/CatalogSection";
import ContactsSection from "@/components/ContactsSection";

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Замес",
    desc: "Смешиваем муку, воду и живую закваску. Никаких дрожжей — только время и терпение.",
  },
  {
    num: "02",
    title: "Ферментация",
    desc: "Тесто медленно созревает 12–16 часов при комнатной температуре. Это и есть магия.",
  },
  {
    num: "03",
    title: "Формовка",
    desc: "Вручную придаём форму каждой буханке. Каждый хлеб уникален.",
  },
  {
    num: "04",
    title: "Выпечка",
    desc: "Печём в чугунке при высокой температуре — так получается идеальная корочка.",
  },
];

export default function Index() {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[var(--cream)] font-golos">

      <NavBar scrollTo={scrollTo} />

      <HeroSection scrollTo={scrollTo} />

      {/* SOURDOUGH BENEFITS */}
      <section id="sourdough" className="min-h-screen flex items-center relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/552ff5ae-1510-4e54-8df4-2f4097d4cd94/files/59996813-3845-4cfa-b7a3-9ab18a9fd946.jpg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e1a14]/85 via-[#3a1a0a]/70 to-[#1e1a14]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e1a14]/80 via-[#1e1a14]/40 to-transparent" />

        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32 w-full">
          <div className="text-center mb-14">
            <span className="text-xs tracking-[0.2em] uppercase text-[#f5ddb4] font-golos mb-4 inline-block bg-[#8b5e3c]/40 backdrop-blur-sm border border-[#d4a96a]/30 px-4 py-2 rounded-full">
              Главный ингредиент
            </span>
            <h2 className="font-cormorant text-4xl md:text-6xl font-light text-white drop-shadow-lg mt-4">
              Живая закваска —<br />
              <em className="not-italic font-semibold text-[#f5c87a]">сердце ремесленного хлеба</em>
            </h2>
            <p className="text-[#e8d5b8] mt-5 font-golos max-w-2xl mx-auto text-base leading-relaxed">
              Наша закваска — это живая культура диких дрожжей и молочнокислых бактерий, которую мы бережно выращиваем каждый день. Именно она превращает простую муку в настоящий хлеб с душой.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="space-y-4">
              {[
                { icon: "Heart", title: "Лучше усваивается", desc: "Ферментация расщепляет сложные соединения — хлеб легко переваривается и несёт пользу для пищеварения." },
                { icon: "Leaf", title: "Не даёт чувства тяжести", desc: "Медленные углеводы и низкий гликемический индекс — не набираешь лишний вес и остаёшься сытым надолго." },
                { icon: "Shield", title: "Глютен не вредит здоровью", desc: "За 12–16 часов ферментации глютен расщепляется настолько, что хлеб переносится значительно легче обычного." },
                { icon: "Flame", title: "Больше минералов", desc: "Разрушается фитиновая кислота — и все полезные вещества зерна усваиваются в полной мере." },
              ].map((item, i) => (
                <div key={i} className="bg-[#1e1a14]/60 backdrop-blur-sm border border-[#d4a96a]/20 rounded-2xl p-5 flex gap-4 items-start">
                  <div className="bg-[#f5c87a]/15 rounded-xl p-2.5 flex-shrink-0">
                    <Icon name={item.icon as "Heart"} size={20} className="text-[#f5c87a]" />
                  </div>
                  <div>
                    <h3 className="font-cormorant text-xl font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-[#c8b49a] text-sm font-golos leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-6">
              <div className="bg-[#f5c87a]/10 backdrop-blur-sm border border-[#f5c87a]/30 rounded-2xl p-7 flex-1">
                <h3 className="font-cormorant text-2xl font-semibold text-[#f5c87a] mb-5">Польза ферментации</h3>
                <div className="space-y-5">
                  {[
                    { num: "01", text: "Разрушается фитиновая кислота — минералы из зерна становятся максимально усваиваемыми." },
                    { num: "02", text: "Кислоты закваски подавляют брожение в кишечнике и снижают вздутие после еды." },
                    { num: "03", text: "Низкий гликемический индекс — хлеб медленно отдаёт энергию, не вызывая скачков сахара." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <span className="font-cormorant text-3xl font-light text-[#f5c87a]/50 leading-none flex-shrink-0">{item.num}</span>
                      <p className="text-[#e8d5b8] text-sm font-golos leading-relaxed pt-1">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#1e1a14]/60 backdrop-blur-sm border border-[#d4a96a]/20 rounded-2xl p-6 text-center">
                <span className="font-cormorant text-6xl font-light text-[#f5c87a]">12–16</span>
                <p className="text-[#e8d5b8] text-sm font-golos mt-1">часов медленной ферментации<br />каждой буханки</p>
              </div>

              <div className="bg-[#1e1a14]/60 backdrop-blur-sm border border-[#d4a96a]/20 rounded-2xl p-6 text-center">
                <p className="font-cormorant text-xl italic text-[#f5ddb4] leading-snug">
                  «Невероятная вкусоароматика, которой не бывает у хлеба на промышленных дрожжах. Плюс дольше хранится»
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => scrollTo("#catalog")}
              className="bg-[#f5c87a] text-[#1e1a14] px-8 py-4 rounded-full text-base hover:bg-[#f0b84a] transition-all duration-300 font-golos tracking-wide font-medium shadow-lg"
            >
              Попробовать хлеб на закваске
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="min-h-screen flex items-center relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/552ff5ae-1510-4e54-8df4-2f4097d4cd94/files/1c581981-c0e7-4f82-b1c3-fe351e8c6fa1.jpg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#c8621a]/65 via-[#d4830a]/35 to-[#1e1a14]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e1a14]/70 via-[#1e1a14]/30 to-transparent" />

        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32 w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs tracking-[0.2em] uppercase text-[#f5ddb4] font-golos mb-4 block bg-[#8b5e3c]/40 backdrop-blur-sm border border-[#d4a96a]/30 px-4 py-2 rounded-full w-fit">О закваске</span>
              <h2 className="font-cormorant text-4xl md:text-6xl font-light text-white leading-tight mb-8 drop-shadow-lg">
                Живой организм<br />в каждом хлебе
              </h2>
              <div className="space-y-5 text-[#e8d5b8] font-golos leading-relaxed">
                <p>
                  Закваска — это живая культура диких дрожжей и молочнокислых бактерий.
                  Наша живёт уже несколько лет, мы кормим её каждый день.
                </p>
                <p>
                  Хлеб на закваске медленно ферментируется — это делает его более полезным,
                  лучше усваиваемым и невероятно ароматным. Никакой химии, никаких улучшителей.
                </p>
                <p>
                  Гриссини с семенами льна — хрустящие итальянские хлебные палочки, которые
                  мы тоже готовим на закваске. Идеальны к первым блюдам, как перекус и дополнение к сервировке для аперитивов.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#1e1a14]/60 backdrop-blur-sm border border-[#d4a96a]/20 rounded-2xl p-6 flex flex-col gap-2">
                <span className="font-cormorant text-5xl font-light text-[#f5c87a]">
                  {PRODUCTS.length}
                </span>
                <span className="text-[#e8d5b8] text-sm font-golos">видов хлеба в меню</span>
              </div>
              <div className="bg-[#1e1a14]/60 backdrop-blur-sm border border-[#d4a96a]/20 rounded-2xl p-6 flex flex-col gap-2">
                <span className="font-cormorant text-5xl font-light text-[#f5c87a]">0</span>
                <span className="text-[#e8d5b8] text-sm font-golos">дрожжей и улучшителей</span>
              </div>
              <div className="bg-[#1e1a14]/60 backdrop-blur-sm border border-[#d4a96a]/20 rounded-2xl p-6 flex flex-col gap-2 col-span-2">
                <span className="font-cormorant text-5xl font-light text-[#f5c87a]">12–16 ч</span>
                <span className="text-[#e8d5b8] text-sm font-golos">медленная ферментация каждой буханки</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="min-h-screen flex items-center relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/552ff5ae-1510-4e54-8df4-2f4097d4cd94/files/process-bg.jpg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e1a14]/90 via-[#2a1a0a]/80 to-[#1e1a14]/95" />

        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32 w-full">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.2em] uppercase text-[#f5ddb4] font-golos mb-4 inline-block bg-[#8b5e3c]/40 backdrop-blur-sm border border-[#d4a96a]/30 px-4 py-2 rounded-full">Как мы печём</span>
            <h2 className="font-cormorant text-4xl md:text-6xl font-light text-white drop-shadow-lg">
              Процесс от замеса<br />до вашего стола
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <div key={i} className="relative bg-[#1e1a14]/55 backdrop-blur-sm border border-[#d4a96a]/20 rounded-2xl p-6">
                <div className="font-cormorant text-6xl font-light text-[#f5c87a]/50 mb-4">{step.num}</div>
                <h3 className="font-cormorant text-2xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-[#e8d5b8] text-sm leading-relaxed font-golos">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CatalogSection activeProduct={activeProduct} setActiveProduct={setActiveProduct} />

      <ContactsSection />

    </div>
  );
}
