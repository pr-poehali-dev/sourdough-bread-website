import Icon from "@/components/ui/icon";

export default function ContactsSection() {
  return (
    <>
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

      <footer className="bg-[#1e1a14] border-t border-[#d4a96a]/15 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-cormorant text-xl text-white">Хлеб & Закваска</span>
          <span className="text-[#e8d5b8]/50 text-xs font-golos">
            Принимаем заказы ежедневно · Доставка на следующий день
          </span>
        </div>
      </footer>
    </>
  );
}
