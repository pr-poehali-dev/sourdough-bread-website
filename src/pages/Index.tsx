import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_ITEMS = [
  { label: "О закваске", href: "#about" },
  { label: "Процесс", href: "#process" },
  { label: "Каталог", href: "#catalog" },
  { label: "Контакты", href: "#contacts" },
];

const PRODUCTS = [
  {
    id: 1,
    name: "Пшеничный на закваске",
    description: "Классический белый хлеб с хрустящей корочкой и мягким мякишем. Без дрожжей.",
    weight: "700 г",
    price: "350 ₽",
    emoji: "🍞",
  },
  {
    id: 2,
    name: "С черникой и глазурью",
    description: "Нежный сдобный хлеб с ягодами черники и сливочной глазурью. Идеален к чаю.",
    weight: "600 г",
    price: "420 ₽",
    image: "https://cdn.poehali.dev/files/8db602a7-1091-4b41-ab72-bf85c467429f.jpg",
    emoji: "🫐",
  },
  {
    id: 3,
    name: "Ржано-пшеничный",
    description: "Плотный ароматный хлеб из смеси ржаной и пшеничной муки. Долго остаётся свежим.",
    weight: "800 г",
    price: "380 ₽",
    emoji: "🌾",
  },
  {
    id: 4,
    name: "Тосты с тыквенными семечками",
    description: "Хрустящие тосты из хлеба на закваске, посыпанные семечками тыквы.",
    weight: "400 г",
    price: "280 ₽",
    image: "https://cdn.poehali.dev/files/76a76d8a-5eea-4fc4-80a8-a90dda222b6e.jpg",
    emoji: "🌿",
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

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

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
          style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/552ff5ae-1510-4e54-8df4-2f4097d4cd94/files/3e666771-14b3-44e3-8ce4-b31873bbe8e4.jpg)` }}
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
              Хлеб, в котором<br />
              <em className="not-italic font-semibold text-[#f5c87a]">живёт душа</em>
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
          <div className="grid md:grid-cols-2 gap-6">
            {PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="bg-[#1e1a14]/60 backdrop-blur-sm border border-[#d4a96a]/20 rounded-3xl overflow-hidden hover:bg-[#1e1a14]/75 transition-all duration-300 flex flex-col"
              >
                {product.image ? (
                  <div className="h-56 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="h-56 bg-[#2a1f10]/60 flex items-center justify-center">
                    <span className="text-7xl">{product.emoji}</span>
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-cormorant text-2xl font-semibold text-white">{product.name}</h3>
                    <span className="font-cormorant text-2xl text-[#f5c87a] font-semibold whitespace-nowrap">{product.price}</span>
                  </div>
                  <p className="text-[#e8d5b8] text-sm leading-relaxed font-golos mb-4">{product.description}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs text-[#e8d5b8] font-golos bg-[#1e1a14]/50 border border-[#d4a96a]/20 px-3 py-1 rounded-full">{product.weight}</span>
                    <button
                      onClick={() => document.querySelector("#contacts")?.scrollIntoView({ behavior: "smooth" })}
                      className="text-sm text-[#1e1a14] bg-[#f5c87a] px-5 py-2 rounded-full hover:bg-[#f0b84a] transition-all duration-200 font-golos font-medium"
                    >
                      Заказать
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