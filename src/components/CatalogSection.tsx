import Icon from "@/components/ui/icon";

export const PRODUCTS = [
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
    name: "Ржаной классический",
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
    weight: "400 гр",
    price: "500 ₽",
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
    id: 7,
    name: "Гриссини с семенами льна",
    weight: "300 гр",
    price: "350 ₽",
    image: "https://cdn.poehali.dev/projects/552ff5ae-1510-4e54-8df4-2f4097d4cd94/files/d97038cc-3d9c-4238-bc24-f975f0fe73b2.jpg",
    emoji: "🥖",
    composition: "Пшеничная мука, живая закваска, вода, семена льна, оливковое масло, соль.",
    details: "Хрустящие итальянские хлебные палочки на живой закваске с семенами льна. Семена льна богаты омега-3 и клетчаткой. Идеальны как снек, к сырной тарелке или вместо хлеба к супу.",
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

export type Product = typeof PRODUCTS[number];

interface CatalogSectionProps {
  activeProduct: Product | null;
  setActiveProduct: (product: Product | null) => void;
}

export default function CatalogSection({ activeProduct, setActiveProduct }: CatalogSectionProps) {
  return (
    <>
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
    </>
  );
}