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
  const [formData, setFormData] = useState({ name: "", phone: "", address: "", comment: "" });
  const [submitted, setSubmitted] = useState(false);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[var(--cream)] font-golos">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--cream)]/90 backdrop-blur-sm border-b border-[var(--border-warm)]">
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
          style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/552ff5ae-1510-4e54-8df4-2f4097d4cd94/files/0536f25d-92ca-466a-af54-703da5e88e13.jpg)` }}
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
            <p className="text-[#e8d5b8] text-lg leading-relaxed mb-10 font-golos drop-shadow">
              Каждая буханка выпекается на живой закваске, которой уже несколько лет.
              Заказывайте сегодня — привезём свежим завтра.
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
      <section id="about" className="py-24 md:py-32 bg-[var(--dark)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs tracking-[0.2em] uppercase text-[var(--brown)] font-golos mb-4 block">О закваске</span>
              <h2 className="font-cormorant text-4xl md:text-6xl font-light text-[var(--cream)] leading-tight mb-8">
                Живой организм<br />в каждом хлебе
              </h2>
              <div className="space-y-5 text-[var(--muted-light)] font-golos leading-relaxed">
                <p>
                  Закваска — это живая культура диких дрожжей и молочнокислых бактерий.
                  Наша живёт уже несколько лет, мы кормим её каждый день.
                </p>
                <p>
                  Хлеб на закваске медленно ферментируется — это делает его более полезным,
                  лучше усваиваемым и невероятно ароматным. Никакой химии, никаких улучшителей.
                </p>
                <p>
                  Кислинка, хрустящая корочка, дырчатый мякиш — всё это результат времени
                  и натуральных процессов, а не добавок.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[var(--dark-card)] rounded-2xl p-6 flex flex-col gap-2">
                <span className="font-cormorant text-5xl font-light text-[var(--brown)]">12+</span>
                <span className="text-[var(--muted-light)] text-sm font-golos">часов ферментации каждой буханки</span>
              </div>
              <div className="bg-[var(--dark-card)] rounded-2xl p-6 flex flex-col gap-2">
                <span className="font-cormorant text-5xl font-light text-[var(--brown)]">0</span>
                <span className="text-[var(--muted-light)] text-sm font-golos">дрожжей, улучшителей и добавок</span>
              </div>
              <div className="bg-[var(--dark-card)] rounded-2xl p-6 flex flex-col gap-2 col-span-2">
                <span className="font-cormorant text-5xl font-light text-[var(--brown)]">100%</span>
                <span className="text-[var(--muted-light)] text-sm font-golos">ручная работа — от замеса до выпечки</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-24 md:py-32 bg-[var(--cream)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.2em] uppercase text-[var(--brown)] font-golos mb-4 block">Как мы печём</span>
            <h2 className="font-cormorant text-4xl md:text-6xl font-light text-[var(--dark)]">
              Процесс от замеса<br />до вашего стола
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <div key={i} className="relative">
                <div className="font-cormorant text-6xl font-light text-[var(--border-warm)] mb-4">{step.num}</div>
                <h3 className="font-cormorant text-2xl font-semibold text-[var(--dark)] mb-3">{step.title}</h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed font-golos">{step.desc}</p>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-8 right-0 translate-x-1/2 text-[var(--border-warm)]">
                    <Icon name="ArrowRight" size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalog" className="py-24 md:py-32 bg-[var(--warm-light)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.2em] uppercase text-[var(--brown)] font-golos mb-4 block">Каталог</span>
            <h2 className="font-cormorant text-4xl md:text-6xl font-light text-[var(--dark)]">
              Сейчас в меню
            </h2>
            <p className="text-[var(--muted)] mt-4 font-golos">Заказывайте до 20:00 — доставим завтра утром</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="bg-[var(--cream)] rounded-3xl overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
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
                  <div className="h-56 bg-[var(--warm-light)] flex items-center justify-center">
                    <span className="text-7xl">{product.emoji}</span>
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-cormorant text-2xl font-semibold text-[var(--dark)]">{product.name}</h3>
                    <span className="font-cormorant text-2xl text-[var(--brown)] font-semibold whitespace-nowrap">{product.price}</span>
                  </div>
                  <p className="text-[var(--muted)] text-sm leading-relaxed font-golos mb-4">{product.description}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs text-[var(--muted)] font-golos bg-[var(--warm-light)] px-3 py-1 rounded-full">{product.weight}</span>
                    <button
                      onClick={() => document.querySelector("#contacts")?.scrollIntoView({ behavior: "smooth" })}
                      className="text-sm text-[var(--dark)] border border-[var(--dark)] px-5 py-2 rounded-full hover:bg-[var(--dark)] hover:text-[var(--cream)] transition-all duration-200 font-golos"
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
      <section id="contacts" className="py-24 md:py-32 bg-[var(--dark)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-xs tracking-[0.2em] uppercase text-[var(--brown)] font-golos mb-4 block">Контакты & Заказ</span>
              <h2 className="font-cormorant text-4xl md:text-6xl font-light text-[var(--cream)] leading-tight mb-8">
                Заказать свежий<br />хлеб на завтра
              </h2>
              <div className="space-y-5 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--dark-card)] flex items-center justify-center shrink-0">
                    <Icon name="Clock" size={18} className="text-[var(--brown)]" />
                  </div>
                  <div>
                    <div className="text-[var(--cream)] font-golos text-sm font-medium">Приём заказов</div>
                    <div className="text-[var(--muted-light)] font-golos text-sm">Ежедневно до 20:00</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--dark-card)] flex items-center justify-center shrink-0">
                    <Icon name="Truck" size={18} className="text-[var(--brown)]" />
                  </div>
                  <div>
                    <div className="text-[var(--cream)] font-golos text-sm font-medium">Доставка</div>
                    <div className="text-[var(--muted-light)] font-golos text-sm">На следующий день, своими силами</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--dark-card)] flex items-center justify-center shrink-0">
                    <Icon name="MessageCircle" size={18} className="text-[var(--brown)]" />
                  </div>
                  <div>
                    <div className="text-[var(--cream)] font-golos text-sm font-medium">Связаться</div>
                    <div className="text-[var(--muted-light)] font-golos text-sm">Напишите нам — ответим быстро</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[var(--dark-card)] rounded-3xl p-8">
              {submitted ? (
                <div className="text-center py-10">
                  <span className="text-5xl block mb-4">🍞</span>
                  <h3 className="font-cormorant text-3xl text-[var(--cream)] mb-3">Заказ принят!</h3>
                  <p className="text-[var(--muted-light)] font-golos text-sm leading-relaxed">
                    Мы свяжемся с вами для подтверждения.<br />Ждите свежий хлеб завтра!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-[var(--brown)] text-sm font-golos underline underline-offset-4"
                  >
                    Оформить ещё один заказ
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-cormorant text-2xl text-[var(--cream)] mb-6">Оставить заявку</h3>
                  <div>
                    <label className="text-xs text-[var(--muted-light)] font-golos tracking-wide uppercase block mb-2">Ваше имя</label>
                    <input
                      type="text"
                      required
                      placeholder="Как вас зовут?"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[var(--dark)] text-[var(--cream)] placeholder:text-[var(--muted-light)]/50 border border-[var(--dark-border)] rounded-xl px-4 py-3 font-golos text-sm focus:outline-none focus:border-[var(--brown)] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[var(--muted-light)] font-golos tracking-wide uppercase block mb-2">Телефон</label>
                    <input
                      type="tel"
                      required
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[var(--dark)] text-[var(--cream)] placeholder:text-[var(--muted-light)]/50 border border-[var(--dark-border)] rounded-xl px-4 py-3 font-golos text-sm focus:outline-none focus:border-[var(--brown)] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[var(--muted-light)] font-golos tracking-wide uppercase block mb-2">Адрес доставки</label>
                    <input
                      type="text"
                      required
                      placeholder="Улица, дом, квартира"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full bg-[var(--dark)] text-[var(--cream)] placeholder:text-[var(--muted-light)]/50 border border-[var(--dark-border)] rounded-xl px-4 py-3 font-golos text-sm focus:outline-none focus:border-[var(--brown)] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[var(--muted-light)] font-golos tracking-wide uppercase block mb-2">Комментарий к заказу</label>
                    <textarea
                      rows={3}
                      placeholder="Что хотите заказать? Особые пожелания?"
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                      className="w-full bg-[var(--dark)] text-[var(--cream)] placeholder:text-[var(--muted-light)]/50 border border-[var(--dark-border)] rounded-xl px-4 py-3 font-golos text-sm focus:outline-none focus:border-[var(--brown)] transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[var(--brown)] text-white py-4 rounded-xl font-golos text-sm tracking-wide hover:bg-[var(--brown-dark)] transition-colors duration-200 mt-2"
                  >
                    Отправить заявку
                  </button>
                  <p className="text-center text-[var(--muted-light)]/60 text-xs font-golos">
                    Мы перезвоним для подтверждения заказа
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[var(--dark)] border-t border-[var(--dark-border)] py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-cormorant text-xl text-[var(--cream)]">Хлеб & Закваска</span>
          <span className="text-[var(--muted-light)] text-xs font-golos">
            Принимаем заказы ежедневно · Доставка на следующий день
          </span>
        </div>
      </footer>
    </div>
  );
}