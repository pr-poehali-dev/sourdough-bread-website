import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_ITEMS = [
  { label: "О закваске", href: "#about" },
  { label: "Польза закваски", href: "#sourdough" },
  { label: "Процесс", href: "#process" },
  { label: "Каталог", href: "#catalog" },
  { label: "Контакты", href: "#contacts" },
];

const PRODUCTS = [
  {
    id: 1,
    name: "Пшеничный тартин",
    weight: "430 г",
    price: "400 ₽",
    image: "https://cdn.poehali.dev/projects/552ff5ae-1510-4e54-8df4-2f4097d4cd94/bucket/4a234e1c-4f14-469e-aabc-043c91007a75.jpg",
    emoji: "🍞",
    composition: "Пшеничная мука высшего сорта, вода, живая закваска, соль.",
    details: "Классический белый тартин с большими воздушными альвеолами и золотистой хрустящей корочкой. Медленная ферментация 14–16 часов придаёт мякишу лёгкую кислинку и неповторимый аромат. Выпекается в чугунной кастрюле при 250°C.",
  },
  {
    id: 2,
    name: "Десертный хлеб с фруктами и орехами",
    weight: "600 гр",
    price: "700 ₽",
    image: "https://cdn.poehali.dev/projects/552ff5ae-1510-4e54-8df4-2f4097d4cd94/bucket/a296ca35-02ee-4c08-829d-b7d115e3b9e4.jpg",
    emoji: "🍇",
    composition: "Ржаная и пшеничная мука высочайшего качества, живая закваска, вода, курага, чернослив, изюм, миндаль.",
    details: "Тёмный насыщенный хлеб с кисло-сладкими нотками сухофруктов и хрустящим орехом. Ферментируется 12 часов, начинка вмешивается вручную. Идеален к утреннему чаю или кофе — и как самостоятельный перекус.",
  },
  {
    id: 3,
    name: "Ржано-пшеничный с чёрным кунжутом",
    weight: "430 г",
    price: "400 ₽",
    image: "https://cdn.poehali.dev/projects/552ff5ae-1510-4e54-8df4-2f4097d4cd94/bucket/2e5c3087-9969-4a61-b40a-79d32375726c.jpg",
    emoji: "🌾",
    composition: "Ржаная мука, пшеничная мука, живая закваска, вода, семена подсолнечника, чёрный кунжут, соль.",
    details: "Плотный, сытный хлеб с выраженным ржаным ароматом. Семена подсолнечника добавляют лёгкую ореховую нотку, чёрный кунжут — характерный горьковатый привкус. Долго остаётся свежим — до 5 дней.",
  },
  {
    id: 4,
    name: "Пшеничный тартин с тыквенными семечками",
    weight: "400 г",
    price: "280 ₽",
    image: "https://cdn.poehali.dev/projects/552ff5ae-1510-4e54-8df4-2f4097d4cd94/bucket/e8e7fb0d-0b05-407b-80de-a755dd567f6e.jpg",
    emoji: "🌿",
    composition: "Пшеничная мука, живая закваска, вода, тыквенные семечки, соль.",
    details: "Воздушный мякиш с крупными альвеолами и хрустящей корочкой, щедро усыпанной тыквенными семечками. Семечки богаты цинком и магнием. Выпекается под паром на раскалённом камне.",
  },
  {
    id: 5,
    name: "Ржано-пшеничный тартин с чёрным кунжутом",
    weight: "430 г",
    price: "400 ₽",
    image: "https://cdn.poehali.dev/projects/552ff5ae-1510-4e54-8df4-2f4097d4cd94/bucket/e90b0fb5-d90d-4009-9057-907ab2ab9935.jpg",
    emoji: "🫘",
    composition: "Ржаная и пшеничная мука, живая закваска, вода, чёрный кунжут, соль.",
    details: "Насыщенный хлеб с балансом ржаной плотности и пшеничной воздушности. Корочка обильно посыпана чёрным кунжутом — источником кальция и антиоксидантов. Ферментируется 14 часов.",
  },
  {
    id: 6,
    name: "Солодовый тартин с вяленой клюквой",
    weight: "600 г",
    price: "600 ₽",
    image: "https://cdn.poehali.dev/projects/552ff5ae-1510-4e54-8df4-2f4097d4cd94/bucket/53e126b9-2df9-4a9a-86de-eec4b059b147.jpg",
    emoji: "🫐",
    composition: "Пшеничная мука, ржаной солод, живая закваска, вода, вяленая клюква, соль.",
    details: "Тёмный ароматный хлеб с богатым солодовым вкусом и кисло-сладкими ягодными нотками клюквы. Солод придаёт мякишу тёмный цвет и карамельный аромат. Выпекается в форме для равномерного пропекания.",
  },
];

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

type Product = typeof PRODUCTS[number];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[var(--cream)] font-golos">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--cream)]/90 backdrop-blur-sm border-b border-[var(--border-warm)]">
        <div className="bg-[#1e1a14] text-center py-1.5 px-4">
          <span className="text-[#f5c87a] font-cormorant font-semibold text-sm md:text-base tracking-wide">
            Для получения свежего хлеба завтра — сделай заказ сегодня до 16:00
          </span>
        </div>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-cormorant text-2xl font-semibold text-[var(--dark)] tracking-wide">
            Хлеб & Закваска
          </a>
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="text-sm text-[var(--muted)] hover:text-[var(--dark)] transition-colors duration-200 tracking-wide"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contacts")}
              className="bg-[var(--dark)] text-[var(--cream)] text-sm px-5 py-2.5 rounded-full hover:bg-[var(--brown)] transition-colors duration-200 tracking-wide"
            >
              Заказать
            </button>
          </div>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} className="text-[var(--dark)]" />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-[var(--cream)] border-t border-[var(--border-warm)] px-6 py-4 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="text-left text-[var(--dark)] py-1"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contacts")}
              className="bg-[var(--dark)] text-[var(--cream)] px-5 py-2.5 rounded-full w-fit"
            >
              Заказать
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="pt-24 md:pt-0 min-h-screen flex items-center relative overflow-hidden">
        {/* Full background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/552ff5ae-1510-4e54-8df4-2f4097d4cd94/files/e4fea4ab-67be-4a1b-b870-88b8e89b43b0.jpg)` }}
        />
        {/* Warm orange-wheat gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#c8621a]/70 via-[#d4830a]/40 to-[#1e1a14]/80" />
        {/* Left text fade */}
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
            {/* Left column — main benefits */}
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

            {/* Right column — fermentation facts + highlight */}
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
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/552ff5ae-1510-4e54-8df4-2f4097d4cd94/files/1c581981-c0e7-4f82-b1c3-fe351e8c6fa1.jpg)` }}
        />
        {/* Same warm overlay as hero */}
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
                <span className="font-cormorant text-5xl font-light text-[#f5c87a]">12+</span>
                <span className="text-[#e8d5b8] text-sm font-golos">часов ферментации каждой буханки</span>
              </div>
              <div className="bg-[#1e1a14]/60 backdrop-blur-sm border border-[#d4a96a]/20 rounded-2xl p-6 flex flex-col gap-2">
                <span className="font-cormorant text-5xl font-light text-[#f5c87a]">0</span>
                <span className="text-[#e8d5b8] text-sm font-golos">дрожжей, улучшителей и добавок</span>
              </div>
              <div className="bg-[#1e1a14]/60 backdrop-blur-sm border border-[#d4a96a]/20 rounded-2xl p-6 flex flex-col gap-2 col-span-2">
                <span className="font-cormorant text-5xl font-light text-[#f5c87a]">100%</span>
                <span className="text-[#e8d5b8] text-sm font-golos">ручная работа — от замеса до выпечки</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="min-h-screen flex items-center relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/552ff5ae-1510-4e54-8df4-2f4097d4cd94/files/06026641-23f9-476a-af86-0f34cc775335.jpg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#3a1a0a]/80 via-[#6b2e0d]/50 to-[#1e1a14]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e1a14]/75 via-[#1e1a14]/30 to-transparent" />

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

      {/* CATALOG */}
      <section id="catalog" className="min-h-screen flex items-center relative overflow-hidden py-24 md:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/552ff5ae-1510-4e54-8df4-2f4097d4cd94/files/84965306-ad2f-49c0-a387-069f23edcc7d.jpg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#c8621a]/65 via-[#d4830a]/35 to-[#1e1a14]/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e1a14]/60 via-transparent to-[#1e1a14]/70" />

        <div className="relative max-w-6xl mx-auto px-6 w-full">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.2em] uppercase text-[#f5ddb4] font-golos mb-4 inline-block bg-[#8b5e3c]/40 backdrop-blur-sm border border-[#d4a96a]/30 px-4 py-2 rounded-full">Каталог</span>
            <h2 className="font-cormorant text-4xl md:text-6xl font-light text-white drop-shadow-lg">
              Сейчас в меню
            </h2>
            <p className="text-[#e8d5b8] mt-4 font-golos">Заказывайте до 20:00 — доставим завтра утром</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="bg-[#1e1a14]/60 backdrop-blur-sm border border-[#d4a96a]/20 rounded-3xl overflow-hidden hover:border-[#f5c87a]/40 transition-all duration-300 flex flex-col group"
              >
                <div className="h-72 overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-cormorant text-xl font-semibold text-white leading-snug mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs text-[#c8b49a] font-golos bg-[#1e1a14]/50 border border-[#d4a96a]/20 px-3 py-1 rounded-full">{product.weight}</span>
                    <span className="font-cormorant text-2xl text-[#f5c87a] font-semibold ml-auto">{product.price}</span>
                  </div>
                  <div className="mt-auto">
                    <button
                      onClick={() => setActiveProduct(product)}
                      className="w-full text-sm text-[#f5ddb4] border border-[#d4a96a]/40 px-4 py-2 rounded-full hover:border-[#f5c87a]/70 hover:text-white transition-all duration-200 font-golos"
                    >
                      Подробнее
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS / ORDER FORM */}
      <section id="contacts" className="min-h-screen flex items-center relative overflow-hidden py-24 md:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/552ff5ae-1510-4e54-8df4-2f4097d4cd94/files/8ba0e18b-9e6d-4f79-83d1-880ce1806ba9.jpg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#c8621a]/60 via-[#d4830a]/30 to-[#1e1a14]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#1e1a14]/80" />

        <div className="relative max-w-4xl mx-auto px-6 w-full text-center">
          <span className="text-xs tracking-[0.2em] uppercase text-[#f5ddb4] font-golos mb-8 inline-block bg-[#8b5e3c]/40 backdrop-blur-sm border border-[#d4a96a]/30 px-4 py-2 rounded-full">
            Заказ по звонку
          </span>

          <h2 className="font-cormorant text-4xl md:text-6xl lg:text-7xl font-light text-white leading-[1.15] mb-6 drop-shadow-lg">
            Позаботься о своём<br />
            <em className="not-italic font-semibold text-[#f5c87a]">добром утре</em>
          </h2>

          <p className="text-[#e8d5b8] text-xl md:text-2xl font-golos mb-4 leading-relaxed">
            Закажи свежий хлеб к завтраку
          </p>
          <p className="font-cormorant text-2xl md:text-3xl font-semibold mb-12 text-[#f5c87a] drop-shadow-lg tracking-wide">
            Для получения свежего хлеба завтра —<br className="hidden md:block" /> сделай заказ сегодня до&nbsp;16:00
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="tel:+79025226471"
              className="group flex items-center gap-3 bg-[#f5c87a] text-[#1e1a14] px-10 py-5 rounded-full text-lg font-golos font-semibold hover:bg-[#f0b84a] transition-all duration-300 shadow-2xl hover:shadow-[#f5c87a]/30 hover:scale-105"
            >
              <Icon name="Phone" size={22} className="group-hover:animate-bounce" />
              Позвонить пекарю
            </a>
            <div className="flex flex-col items-center gap-1 bg-[#1e1a14]/55 backdrop-blur-sm border border-[#d4a96a]/25 px-6 py-4 rounded-full">
              <span className="text-white font-golos font-semibold text-lg tracking-wide">+7 902 522-64-71</span>
              <div className="flex items-center gap-2 text-[#e8d5b8]/70">
                <Icon name="Clock" size={13} className="text-[#f5c87a] shrink-0" />
                <span className="font-golos text-xs">Ежедневно до 16:00</span>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-[#e8d5b8]/60 text-sm font-golos">
            <div className="flex items-center gap-2">
              <Icon name="Truck" size={16} className="text-[#f5c87a]/70" />
              <span>Доставка на следующий день</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Wheat" size={16} className="text-[#f5c87a]/70" />
              <span>Без дрожжей и улучшителей</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Heart" size={16} className="text-[#f5c87a]/70" />
              <span>Сделано с любовью</span>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT MODAL */}
      {activeProduct && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={() => setActiveProduct(null)}
        >
          <div className="absolute inset-0 bg-[#1e1a14]/80 backdrop-blur-md" />
          <div
            className="relative bg-[#2a1f10] border border-[#d4a96a]/30 rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-64 overflow-hidden relative">
              <img
                src={activeProduct.image}
                alt={activeProduct.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2a1f10] via-transparent to-transparent" />
              <button
                onClick={() => setActiveProduct(null)}
                className="absolute top-4 right-4 bg-[#1e1a14]/70 backdrop-blur-sm border border-[#d4a96a]/30 text-white rounded-full w-9 h-9 flex items-center justify-center hover:bg-[#1e1a14] transition-colors"
              >
                <Icon name="X" size={16} />
              </button>
            </div>
            <div className="p-7">
              <div className="flex items-start justify-between gap-4 mb-1">
                <h3 className="font-cormorant text-2xl font-semibold text-white leading-snug">{activeProduct.name}</h3>
                <span className="font-cormorant text-2xl text-[#f5c87a] font-semibold whitespace-nowrap">{activeProduct.price}</span>
              </div>
              <span className="inline-block text-xs text-[#c8b49a] font-golos bg-[#1e1a14]/50 border border-[#d4a96a]/20 px-3 py-1 rounded-full mb-5">{activeProduct.weight}</span>

              <div className="mb-4">
                <h4 className="text-xs tracking-[0.15em] uppercase text-[#f5c87a] font-golos mb-2">Состав</h4>
                <p className="text-[#e8d5b8] text-sm font-golos leading-relaxed">{activeProduct.composition}</p>
              </div>
              <div className="mb-6">
                <h4 className="text-xs tracking-[0.15em] uppercase text-[#f5c87a] font-golos mb-2">Особенности</h4>
                <p className="text-[#e8d5b8] text-sm font-golos leading-relaxed">{activeProduct.details}</p>
              </div>

              <a
                href="tel:+79025226471"
                className="w-full flex items-center justify-center gap-2 bg-[#f5c87a] text-[#1e1a14] py-3.5 rounded-full font-golos font-semibold hover:bg-[#f0b84a] transition-all duration-200"
              >
                <Icon name="Phone" size={18} />
                Позвонить пекарю
              </a>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-[#1e1a14] border-t border-[#d4a96a]/15 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-cormorant text-xl text-white">Хлеб & Закваска</span>
          <span className="text-[#e8d5b8]/50 text-xs font-golos">
            Принимаем заказы ежедневно · Доставка на следующий день
          </span>
        </div>
      </footer>
    </div>
  );
}