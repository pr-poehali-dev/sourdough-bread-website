import Icon from "@/components/ui/icon";

export const PRODUCTS = [
  {
    id: 1,
    name: "Пшеничный тартин",
    weight: "430 г",
    price: "400 ₽",
    image: "https://cdn.poehali.dev/projects/552ff5ae-1510-4e54-8df4-2f4097d4cd94/bucket/7460b564-8726-4e03-b525-4bbe76a03d1a.jpg",
    emoji: "🍞",
    composition: "Живая пшеничная закваска, пшеничная мука высшего сорта, вода родниковая, соль морская.",
    details: "Всё начинается с живой закваски — она живёт у нас уже не один год, кормится каждый день и дышит. Именно она поднимает этот хлеб, наполняет его тонкой кислинкой и тем неповторимым духом, который невозможно получить из пакетика дрожжей. Тесто вымешивается вручную и отправляется на долгую холодную расстойку — 14–16 часов. За это время в нём рождается характер. Перед выпечкой буханка бережно перекладывается из плетёной корзины для расстойки на раскалённый камень, укрытый пекарской тканью, — и в этот момент духовка наполняется паром. Жар камня мгновенно «запечатывает» корочку, а пар не даёт ей затвердеть раньше времени — так получаются те самые большие воздушные альвеолы внутри и хрустящая золотистая корочка снаружи. Когда достаёшь его из печи — аромат стоит на весь дом.",
  },
  {
    id: 2,
    isNew: true,
    name: "Десертный хлеб с фруктами и орехами",
    weight: "600 гр",
    price: "700 ₽",
    image: "https://cdn.poehali.dev/projects/552ff5ae-1510-4e54-8df4-2f4097d4cd94/bucket/b38ead2d-8c01-49e4-bdde-925b89797ce1.jpg",
    emoji: "🍇",
    composition: "Живая ржано-пшеничная закваска, ржаная мука, пшеничная мука высшего сорта, вода, курага, чернослив, изюм, миндаль, соль.",
    details: "Этот хлеб — настоящее лакомство, в котором живая закваска встречается с сухофруктами и орехами. Закваска ферментирует тесто 12 долгих часов, и за это время мука раскрывается, становится живой и ароматной. Курага, чернослив и изюм замачиваются заранее — чтобы каждый кусочек был мягким и сочным, — а затем вмешиваются в тесто вручную вместе с миндалём. Сформированная буханка укладывается в корзину для расстойки и отдыхает ночь. Утром — на стальной лист, в раскалённую до предела печь. Корочка карамелизуется, начинка прогревается, и по кухне разливается аромат, от которого невозможно устоять. Идеален с маслом и чашкой утреннего чая.",
  },
  {
    id: 3,
    name: "Ржаной классический",
    weight: "430 г",
    price: "400 ₽",
    image: "https://cdn.poehali.dev/projects/552ff5ae-1510-4e54-8df4-2f4097d4cd94/bucket/90f6da28-1429-4fef-bdc1-28558966904a.jpg",
    emoji: "🌾",
    composition: "Живая ржаная закваска, ржаная мука обдирная, пшеничная мука, вода, соль морская.",
    details: "Ржаной хлеб — это особый разговор. Здесь живая ржаная закваска задаёт тон: она густая, тягучая, с глубоким кисловатым характером. Тесто долго зреет при комнатной температуре, постепенно набирая вкус и аромат. Ничего лишнего — только мука, вода, соль и живая закваска, которая делает своё дело медленно и честно. Готовая буханка расстаивается в корзине, обтянутой пекарской тканью, а затем выпекается на раскалённом камне. Корочка получается хрустящей и загорелой, а мякиш — плотным, влажным и невероятно сытным. Хранится до 5–6 дней, становясь с каждым днём ещё глубже по вкусу.",
  },
  {
    id: 4,
    name: "Пшеничный тартин с тыквенными семечками",
    weight: "400 гр",
    price: "500 ₽",
    image: "https://cdn.poehali.dev/projects/552ff5ae-1510-4e54-8df4-2f4097d4cd94/bucket/7a903016-cd4b-407f-963f-97d0691f2ab4.jpg",
    emoji: "🌿",
    composition: "Живая пшеничная закваска, пшеничная мука, вода, тыквенные семечки обжаренные, соль морская.",
    details: "Светлый, почти невесомый тартин с хрустящей корочкой и крупными воздушными дырочками внутри — такими, в которые так приятно заглядываться. В основе, как всегда, живая закваска: она медленно поднимает тесто, насыщает его ароматом и тонкой кислинкой. Тыквенные семечки поджариваются до аппетитного хруста и щедро вдавливаются в верхушку буханки перед выпечкой. Хлеб уходит в печь на раскалённый камень, укрытый пекарской тканью, — корочка мгновенно схватывается, а мякиш дышит и раскрывается. Достаёшь — и сразу хочется отломить кусок, пока он ещё горячий.",
  },
  {
    id: 5,
    name: "Ржано-пшеничный тартин с чёрным кунжутом",
    weight: "430 г",
    price: "400 ₽",
    image: "https://cdn.poehali.dev/projects/552ff5ae-1510-4e54-8df4-2f4097d4cd94/bucket/42663062-3d16-49c7-ab6b-431eace11612.jpg",
    emoji: "🫘",
    composition: "Живая ржано-пшеничная закваска, ржаная мука, пшеничная мука, вода, чёрный кунжут, соль морская.",
    details: "В этом хлебе живёт равновесие: ржаная мука даёт глубину и плотность, пшеничная — лёгкость и воздух. А живая закваска связывает их вместе, работая тихо и терпеливо целых 14 часов. Тесто несколько раз складывается вручную — так формируется структура, клейковина вытягивается в тонкие нити, и будущая буханка обретает форму. После ночи в корзине для расстойки хлеб выкладывается прямо на раскалённый камень и накрывается колпаком — пар остаётся внутри и творит чудеса. Перед посадкой в печь верхушка щедро посыпается чёрным кунжутом: он поджаривается, становится хрустящим и ароматным, чуть горьковатым — совсем как в настоящей пекарне.",
  },
  {
    id: 7,
    name: "Гриссини с семенами льна",
    weight: "300 гр",
    price: "350 ₽",
    image: "https://cdn.poehali.dev/projects/552ff5ae-1510-4e54-8df4-2f4097d4cd94/files/d97038cc-3d9c-4238-bc24-f975f0fe73b2.jpg",
    emoji: "🥖",
    composition: "Живая пшеничная закваска, пшеничная мука, вода, семена льна, оливковое масло холодного отжима, соль морская.",
    details: "Гриссини — это маленькая радость, которую хочется хрустеть бесконечно. Тесто замешивается на живой закваске с добавлением оливкового масла — оно делает палочки нежными внутри и хрустящими снаружи. Семена льна рассыпаются по тесту и вкатываются в него ладонями. Каждая палочка раскатывается и вытягивается вручную — неидеально, чуть разной толщины, как и должно быть у ремесленного хлеба. Укладываются на стальные листы и отправляются в горячую печь. Через несколько минут кухня наполняется запахом поджаренного льна и тёплого оливкового масла. Хороши к вину, сыру, паштету — или просто так, в тишине хорошего вечера.",
  },
  {
    id: 8,
    name: "Классический ржаной хлеб с чёрным кунжутом",
    weight: "450 г",
    price: "420 ₽",
    image: "https://cdn.poehali.dev/projects/552ff5ae-1510-4e54-8df4-2f4097d4cd94/bucket/d94a9508-8b5e-4993-ac46-0f28bdedb80c.jpg",
    emoji: "🌾",
    composition: "Живая ржаная закваска, ржаная мука обдирная, вода, чёрный кунжут, соль морская.",
    details: "Этот хлеб — чистый, без лишнего. Только живая закваска, ржаная мука, вода и соль — и то, что рождается на их пересечении за долгие 16 часов ферментации. Закваска работает медленно: размягчает крахмал, расщепляет фитиновую кислоту, раскрывает аромат ржи до самой её глубины. Тесто густое, тяжёлое — его нельзя вымесить как пшеничное, его бережно перекладывают в форму, разравнивают влажными руками. Чёрный кунжут щедро рассыпается поверх и слегка вдавливается в поверхность. Форма ставится на раскалённый камень — и начинается главное таинство выпечки. Через час духовку открываешь осторожно: оттуда выплёскивается волна тёмного ржаного аромата. Хлеб, который становится только лучше на второй и третий день.",
  },
  {
    id: 9,
    isNew: true,
    name: "Чёрный хомяк",
    subtitle: "Ржаной хлеб с 5 видами семян и черносливом",
    weight: "430 гр",
    price: "700 ₽",
    image: "https://cdn.poehali.dev/projects/552ff5ae-1510-4e54-8df4-2f4097d4cd94/bucket/763d3873-0042-4545-9802-c6a0ebc5104d.jpg",
    emoji: "🐹",
    composition: "Живая ржаная закваска, ржаная мука обдирная, пшеничная мука, вода, чернослив без косточки, семена льна, семена подсолнечника, семена кунжута, тыквенные семечки, семена чиа, соль морская.",
    details: "«Чёрный хомяк» — это тёмный, плотный и невероятно сытный хлеб для тех, кто ценит глубину вкуса и настоящую пользу. Живая ржаная закваска ферментирует тесто 16 часов: за это время ржаная мука раскрывается полностью, отдавая весь свой аромат — густой, земляной, чуть хмельной. Пять видов семян — лён, подсолнечник, кунжут, тыква и чиа — предварительно замачиваются, чтобы в выпеченном хлебе они были мягкими, маслянистыми и не перебивали, а обогащали вкус. Чернослив нарезается крупными кусочками и вмешивается в тесто руками — он тает внутри мякиша и даёт едва уловимую сладость, которая идеально контрастирует с кислинкой закваски. Тесто укладывается в форму и уходит на ночной расстой в холодильник. Утром форма ставится на раскалённый камень и отправляется в печь, разогретую до 240 °C. В первые минуты подаётся пар — корочка успевает схватиться и стать хрустящей, а мякиш остаётся влажным и плотным. Хлеб, который хранится в холодильнике больше недели и становится только богаче на вкус.",
  },
  {
    id: 6,
    name: "Солодовый тартин с вяленой клюквой",
    weight: "600 г",
    price: "670 ₽",
    image: "https://cdn.poehali.dev/projects/552ff5ae-1510-4e54-8df4-2f4097d4cd94/bucket/3cece9fb-b099-4128-b7df-de38b16fbc2c.jpg",
    emoji: "🫐",
    composition: "Живая пшеничная закваска, пшеничная мука, ржаной солод, вода, вяленая клюква, соль морская.",
    details: "Солод — это обжаренное зерно, и именно он придаёт этому хлебу его тёмный, почти шоколадный цвет и карамельную глубину вкуса. Живая закваска подхватывает солодовые нотки и усиливает их за 14 часов неспешной работы. Вяленая клюква замачивается в тёплой воде — набухает, становится мягкой и ароматной — и вмешивается в тесто бережно, чтобы каждая ягодка осталась целой. Сформированная буханка ложится в корзину для расстойки, обтянутую пекарской тканью, и зреет до утра. Утром — надрез ножом, перекладывание на стальной лист и в раскалённую печь. Корочка темнеет, трескается по надрезу, а из трещины тянется аромат солода и клюквы. Хлеб, который хочется резать толстыми ломтями и есть с козьим сыром.",
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
            <p className="text-[#e8d5b8] mt-4 font-golos">Заказывайте до 16:00 — доставим завтра утром</p>
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
                  {"isNew" in product && product.isNew && (
                    <div className="absolute top-3 left-3">
                      <span className="font-cormorant text-sm font-bold tracking-widest uppercase text-[#1e1a14] bg-[#f5c87a] px-3 py-1.5 rounded-sm shadow-md border-b-2 border-[#c8920a] rotate-[-2deg] inline-block" style={{letterSpacing: "0.15em"}}>
                        ✦ Новинка ✦
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-cormorant text-xl font-semibold text-white leading-snug mb-1">{product.name}</h3>
                  {"subtitle" in product && product.subtitle && (
                    <p className="text-[#c8b49a] text-xs font-golos mb-2 leading-snug">{product.subtitle}</p>
                  )}
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
              {"subtitle" in activeProduct && activeProduct.subtitle && (
                <p className="text-[#c8b49a] text-xs font-golos mb-2 leading-snug">{activeProduct.subtitle}</p>
              )}
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