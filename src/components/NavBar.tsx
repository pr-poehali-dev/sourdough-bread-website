import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_ITEMS = [
  { label: "О закваске", href: "#about" },
  { label: "Польза закваски", href: "#sourdough" },
  { label: "Процесс", href: "#process" },
  { label: "Каталог", href: "#catalog" },
  { label: "Контакты", href: "#contacts" },
];

interface NavBarProps {
  scrollTo: (href: string) => void;
}

export default function NavBar({ scrollTo }: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollTo = (href: string) => {
    setMenuOpen(false);
    scrollTo(href);
  };

  return (
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
              onClick={() => handleScrollTo(item.href)}
              className="text-sm text-[var(--muted)] hover:text-[var(--dark)] transition-colors duration-200 tracking-wide"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleScrollTo("#contacts")}
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
              onClick={() => handleScrollTo(item.href)}
              className="text-left text-[var(--dark)] py-1"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleScrollTo("#contacts")}
            className="bg-[var(--dark)] text-[var(--cream)] px-5 py-2.5 rounded-full w-fit"
          >
            Заказать
          </button>
        </div>
      )}
    </nav>
  );
}
