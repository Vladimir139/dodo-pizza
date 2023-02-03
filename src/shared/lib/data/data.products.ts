import { ProductsProps } from "@shared/lib/types/Products";

export const Products: ProductsProps[] = [
  {
    category: "pizza",
    id: 1,
    title: "Пицца-сказка с игрушкой на коробке",
    img: [
      "https://dodopizza-a.akamaihd.net/static/Img/Products/bb57de86339b4ef0b629dfa381d4bfab_138x138.jpeg",
    ],
    price: 399,
    variableIngredients: [
      "запеченная буженина из свинины",
      "картофель из печи",
      "маринованные огурчики",
      "красный лук",
      "чеснок",
    ],
    requiredIngredients: ["моцарелла", "фирменный томатный соус", "соус ранч"],
    size: [25, 30, 35],
    dough: ["traditional", "thin"],
    isNew: false,
    isBest: false,
    buttonCart: true,
  },
  {
    category: "pizza",
    id: 2,
    title: "Сырная",
    img: [
      "https://dodopizza-a.akamaihd.net/static/Img/Products/d9c609f1422247f2b87b6293eb461ff0_138x138.jpeg",
    ],
    price: 299,
    variableIngredients: [],
    requiredIngredients: [
      "моцарелла",
      "сыры чеддер и пармезан",
      "фирменый соус альфредо",
    ],
    size: [25, 30, 35],
    dough: ["traditional", "thin"],
    isNew: false,
    isBest: false,
    buttonCart: false,
  },
  {
    category: "pizza",
    id: 3,
    title: "Деревенская с бужениной",
    img: [
      "https://dodopizza-a.akamaihd.net/static/Img/Products/200ef6ddfb814852ad1a2456c5d7c62c_138x138.jpeg",
    ],
    price: 489,
    variableIngredients: [
      "запеченная буженина из свинины",
      "картофель из печи",
      "маринованные огурчики",
      "красный лук",
      "чеснок",
    ],
    requiredIngredients: ["моцарелла", "соус ранч", "фирменый томатный соус"],
    size: [25, 30, 35],
    dough: ["traditional", "thin"],
    isNew: false,
    isBest: false,
    buttonCart: false,
  },
  {
    category: "pizza",
    id: 4,
    title: "Ветчина и сыр",
    img: [
      "https://dodopizza-a.akamaihd.net/static/Img/Products/cea570842b754c52b786c231c65bd2e2_138x138.jpeg",
    ],
    price: 389,
    variableIngredients: ["ветчина"],
    requiredIngredients: ["моцарелла", "фирменый соус альфредо"],
    size: [25, 30, 35],
    dough: ["traditional", "thin"],
    isNew: false,
    isBest: false,
    buttonCart: false,
  },
  {
    category: "pizza",
    id: 5,
    title: "Пепперони фреш",
    img: [
      "https://dodopizza-a.akamaihd.net/static/Img/Products/27c9bbd0af3a4d1d84a086d9c2f1656d_138x138.jpeg",
    ],
    price: 299,
    variableIngredients: ["пикантная пепперони", "томаты"],
    requiredIngredients: [
      "увеличенная порция моцареллы",
      "фирменый томатный соус",
    ],
    size: [25, 30, 35],
    dough: ["traditional", "thin"],
    isNew: false,
    isBest: false,
    buttonCart: false,
  },
  {
    category: "pizza",
    id: 6,
    title: "Чоризо фреш",
    img: [
      "https://dodopizza-a.akamaihd.net/static/Img/Products/02ca2561953b488993878d1f70e359de_138x138.jpeg",
    ],
    price: 299,
    variableIngredients: ["острая чоризо", "сладкий перец"],
    requiredIngredients: ["фирменный томатный соус", "моцарелла"],
    size: [25, 30, 35],
    dough: ["traditional", "thin"],
    isNew: false,
    isBest: false,
    buttonCart: false,
  },
  {
    category: "pizza",
    id: 7,
    title: "Додо Микс",
    img: [
      "https://dodopizza-a.akamaihd.net/static/Img/Products/e47fda53ae2441a8850d9a9319ec7071_138x138.jpeg",
    ],
    price: 489,
    variableIngredients: [
      "бекон",
      "цыпленок",
      "ветчина",
      "сыры чедер и пармезан",
      "кубики брынзы",
      "томаты",
      "красный лук",
      "чеснок",
      "итальянские травы",
    ],
    requiredIngredients: ["фирменный соус альфредо", "соус песто", "моцарелла"],
    size: [25, 30, 35],
    dough: ["traditional", "thin"],
    isNew: false,
    isBest: false,
    buttonCart: false,
  },
  {
    category: "pizza",
    id: 8,
    title: "Цыпленок барбекю",
    img: [
      "https://dodopizza-a.akamaihd.net/static/Img/Products/45cc8ffb190c4a28aaf1863a67f675c7_138x138.jpeg",
    ],
    price: 539,
    variableIngredients: ["бекон", "цыпленок", "красный лук"],
    requiredIngredients: [
      "фирменный томатный соус",
      "соус барбекю",
      "моцарелла",
    ],
    size: [25, 30, 35],
    dough: ["traditional", "thin"],
    isNew: false,
    isBest: false,
    buttonCart: false,
  },
  {
    category: "pizza",
    id: 9,
    title: "Аррива!",
    img: [
      "https://dodopizza-a.akamaihd.net/static/Img/Products/5907951b8bf848b2b3bf0ead39b84ab1_138x138.jpeg",
    ],
    price: 439,
    variableIngredients: [
      "острая чоризо",
      "цыпленок",
      "сладкий перец",
      "томаты",
      "красный лук",
      "чеснок",
    ],
    requiredIngredients: ["соус ранч", "соус бургер", "моцарелла"],
    size: [25, 30, 35],
    dough: ["traditional", "thin"],
    isNew: false,
    isBest: false,
    buttonCart: false,
  },
  {
    category: "pizza",
    id: 10,
    title: "Ветчина и грибы",
    img: [
      "https://dodopizza-a.akamaihd.net/static/Img/Products/0c24c7c195574d7cae45c889bd8043fc_138x138.jpeg",
    ],
    price: 389,
    variableIngredients: ["ветчина", "шампиньоны"],
    requiredIngredients: [
      "увеличенная порция моцареллы",
      "фирменный томатный соус",
    ],
    size: [25, 30, 35],
    dough: ["traditional", "thin"],
    isNew: false,
    isBest: false,
    buttonCart: false,
  },
  {
    category: "pizza",
    id: 11,
    title: "Четыре сезона",
    img: [
      "https://dodopizza-a.akamaihd.net/static/Img/Products/d51fa179760041f0831e63fa21c39402_138x138.jpeg",
    ],
    price: 299,
    variableIngredients: [
      "ветчина",
      "пикантная пепперони",
      "кубики брынзы",
      "томаты",
      "шампиньоны",
      "итальянские травы",
    ],
    requiredIngredients: [
      "увеличенная порция моцареллы",
      "фирменный томатный соус",
    ],
    size: [25, 30, 35],
    dough: ["traditional", "thin"],
    isNew: false,
    isBest: false,
    buttonCart: false,
  },
  {
    category: "combo",
    id: 12,
    title: "Комбо от 599 Р",
    img: [
      "https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/348fc63218624452bff8b2ac1b90db9c_138x138.jpeg",
    ],
    price: 599,
    buttonCart: true,
    description:
      "Кому-кому только одному. Маленькая пицца, закуска, напиток и соус. Продукты в комбо можно менять",
  },
  {
    category: "combo",
    id: 13,
    title: "3 пиццы",
    img: [
      "https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/dcf71026d1ec42109b3199f6cbd6f063_138x138.jpeg",
    ],
    price: 1099,
    buttonCart: true,
    description:
      "Три удовольствия в нашем меню  — это 3 средние пиццы на ваш выбор. Пиццы в комбо можно менять",
  },
  {
    category: "combo",
    id: 14,
    title: "2 пиццы и напиток",
    img: [
      "https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/fc5f12da66c24c31a78373657413b3a3_138x138.jpeg",
    ],
    price: 839,
    buttonCart: true,
    description:
      "Для уютных посиделок. 2 маленькие пиццы и напиток на выбор. Для компании из 2–4 человек. Пиццы в комбо можно менять",
  },
  {
    category: "combo",
    id: 55,
    title: "4 закуски",
    img: [
      "https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/8f699259d5834cd3b32204b607db29a2_138x138.jpeg",
    ],
    price: 609,
    buttonCart: true,
    description:
      "Сытный квартет для маленькой компании. Комбо из четырех закусок на выбор",
  },
  {
    category: "combo",
    id: 15,
    title: "5 пицц",
    img: [
      "https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/365d80eb055b49eeb0459b598d1af956_138x138.jpeg",
    ],
    price: 2409,
    buttonCart: true,
    description:
      "5 причин сделать вечеринку вкуснее. 5 средних пицц для компании из 10–15 человек. Пиццы в комбо можно менять",
  },
  {
    category: "combo",
    id: 16,
    title: "2 Кофе: Латте или Капучино",
    img: [
      "https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/fbc1b066217649e5860631c009fc037b_138x138.jpeg",
    ],
    price: 289,
    buttonCart: true,
    description:
      "Отличная возможность проверить, где молочная пенка вкуснее — в латте или в капучино?",
  },
  {
    category: "snacks",
    id: 17,
    title: "Супермясной Додстер",
    img: [
      "https://dodopizza-a.akamaihd.net/static/Img/Products/9badcfdda2c848928f742c3e7fc60249_138x138.jpeg",
    ],
    price: 199,
    buttonCart: true,
    description:
      "Горячая закуска с цыпленком, моцареллой, митболами, острыми колбасками чоризо и соусом бургер в тонкой пшеничной лепешке",
  },
  {
    category: "snacks",
    id: 18,
    title: "Додстер Карри",
    img: [
      "https://dodopizza-a.akamaihd.net/static/Img/Products/c65d065f6e654aa2a20787a9e806e04d_138x138.jpeg",
    ],
    price: 189,
    buttonCart: true,
    description:
      "Горячая закуска с цыпленком, ананасом, сладким перцем, моцареллой и пряным соусом карри в тонкой пшеничной лепешке",
  },
  {
    category: "snacks",
    id: 19,
    title: "Додстер",
    img: [
      "https://dodopizza-a.akamaihd.net/static/Img/Products/be03844e8b8a401ba4af5a4e7f74ea37_138x138.jpeg",
    ],
    price: 169,
    buttonCart: true,
    description:
      "Легендарная горячая закуска с цыпленком, томатами, моцареллой, соусом ранч в тонкой пшеничной лепешке",
  },
  {
    category: "snacks",
    id: 20,
    title: "Грибной Стартер",
    img: [
      "https://dodopizza-a.akamaihd.net/static/Img/Products/ccb169c149374526a8e58f4f22ff7074_138x138.jpeg",
    ],
    price: 169,
    buttonCart: true,
    description:
      "Горячая закуска с шампиньонами, моцареллой и соусом ранч в тонкой пшеничной лепешке",
  },
  {
    category: "snacks",
    id: 21,
    title: "Сырный Стартер",
    img: [
      "https://dodopizza-a.akamaihd.net/static/Img/Products/2494c1cb12384c7486b3b41ab87a594d_138x138.jpeg",
    ],
    price: 169,
    buttonCart: true,
    description:
      "Горячая закуска с очень сырной начинкой. Моцарелла, пармезан, чеддер и соус ранч в тонкой пшеничной лепешке",
  },
  {
    category: "snacks",
    id: 22,
    title: "Сырные палочки с чесноком",
    img: [
      "https://dodopizza-a.akamaihd.net/static/Img/Products/ccd4c30efe92439c9875496dd0ba4942_138x138.jpeg",
    ],
    price: 249,
    buttonCart: true,
    description:
      "Сытный перекус для компании. На пышном тесте — только сыр и чеснок. И соус ранч/чесночный в комплекте — с ним вкуснее!",
  },
  {
    category: "desserts",
    id: 23,
    title: "Маффин Соленая карамель",
    img: [
      "https://dodopizza-a.akamaihd.net/static/Img/Products/c3687909a9cf4064aabc5b07a166e848_138x138.jpeg",
    ],
    price: 95,
    buttonCart: true,
    description:
      "Раз откусить — навсегда полюбить! Оцените яркое сочетание соленой карамели и арахиса",
  },
  {
    category: "desserts",
    id: 24,
    title: "Маффин Три шоколада",
    img: [
      "https://dodopizza-a.akamaihd.net/static/Img/Products/4922d35d13ef4acba55944a5d5cdae70_138x138.jpeg",
    ],
    price: 95,
    buttonCart: true,
    description:
      "Ну и кекс этот маффин! Он из натурального какао, а внутри — нежная  начинка из кубиков белого и молочного шоколада",
  },
  {
    category: "desserts",
    id: 25,
    title: "Шоколадный кукис",
    img: [
      "https://dodopizza-a.akamaihd.net/static/Img/Products/04dba73ff0fa44929640e01e8797add4_138x138.jpeg",
    ],
    price: 95,
    buttonCart: true,
    description:
      "На вид печенье как планета, а на вкус — шоколадная комета с глазурью",
  },
  {
    category: "desserts",
    id: 26,
    title: "Манго-шейк",
    img: [
      "https://dodopizza-a.akamaihd.net/static/Img/Products/9116ce0bb6c448f1a7fdaf49830a4da9_138x138.jpeg",
    ],
    price: 199,
    buttonCart: true,
    description:
      "Жаркое тропическое лето в стакане — молочный коктейль с манговым пюре\n",
  },
  {
    category: "desserts",
    id: 27,
    title: "Айс Капучино",
    img: [
      "https://dodopizza-a.akamaihd.net/static/Img/Products/0a3a0e38f3084f98ad6e2b63f0ae9a48_138x138.jpeg",
    ],
    price: 199,
    buttonCart: true,
    description:
      "Освежающий напиток для любителей кофе. В составе эспрессо, пломбир и бодрость на весь день",
  },
  {
    category: "desserts",
    id: 28,
    title: "Молочный коктейль с печеньем Орео",
    img: [
      "https://dodopizza-a.akamaihd.net/static/Img/Products/de7a12c1a960434cadc309df31da75ed_138x138.jpeg",
    ],
    price: 205,
    buttonCart: true,
    description:
      "Как вкуснее есть печенье? Его лучше пить! Попробуйте молочный коктейль с мороженым и дробленым печеньем «Орео»",
  },
  {
    category: "desserts",
    id: 29,
    title: "Клубничный молочный коктейль",
    img: [
      "https://dodopizza-a.akamaihd.net/static/Img/Products/5a02cf91c51b4f3d87a124dc486c1f74_138x138.jpeg",
    ],
    price: 199,
    buttonCart: true,
    description:
      "Не важно, какое время года на улице, этот коктейль с клубничным сиропом вернет вас в лето с одного глотка",
  },
  {
    category: "desserts",
    id: 30,
    title: "Классический молочный коктейль 👶 ",
    img: [
      "https://dodopizza-a.akamaihd.net/static/Img/Products/1155a1673130444b9ce96b8e6f9ce307_138x138.jpeg",
    ],
    price: 175,
    buttonCart: true,
    description:
      "В мире так много коктейлей, но классика — вечна. Попробуйте наш молочный напиток с мороженым ",
  },
  {
    category: "drinks",
    id: 31,
    title: "Добрый Кола без сахара",
    img: [
      "https://dodopizza-a.akamaihd.net/static/Img/Products/79a8be08434d46a18b240493e253e3bc_138x138.jpeg",
    ],
    price: 105,
    buttonCart: true,
  },
  {
    category: "drinks",
    id: 32,
    title: "Добрый Кола",
    img: [
      "https://dodopizza-a.akamaihd.net/static/Img/Products/e79da719a3574907a1f6eade6a90c671_138x138.jpeg",
    ],
    price: 105,
    buttonCart: true,
  },
  {
    category: "drinks",
    id: 33,
    title: "Добрый Манго-Маракуйя",
    img: [
      "https://dodopizza-a.akamaihd.net/static/Img/Products/fa0076e81c29480c8640a6bc92aeeece_138x138.jpeg",
    ],
    price: 105,
    buttonCart: true,
  },
  {
    category: "drinks",
    id: 34,
    title: "Добрый Лайм-Лимон",
    img: [
      "https://dodopizza-a.akamaihd.net/static/Img/Products/e213e5924f5141858bb2eee38955a162_138x138.jpeg",
    ],
    price: 105,
    buttonCart: true,
  },
  {
    category: "drinks",
    id: 35,
    title: "Добрый Апельсин",
    img: [
      "https://dodopizza-a.akamaihd.net/static/Img/Products/8411475a95654aa2bec84aa839c90bf5_138x138.jpeg",
    ],
    price: 105,
    buttonCart: true,
  },
  {
    category: "drinks",
    id: 36,
    title: "Rich Tea Черный с лимоном",
    img: [
      "https://dodopizza-a.akamaihd.net/static/Img/Products/01a91396142e48ce84c599a0c0b5f56b_138x138.jpeg",
    ],
    price: 115,
    buttonCart: true,
  },
  {
    category: "otherGoods",
    id: 37,
    title: "Додо Книги 1+2",
    img: [
      "https://dodopizza-a.akamaihd.net/static/Img/Products/1907efcc085340128135fc6239499e74_138x138.jpeg",
    ],
    price: 195,
    buttonCart: true,
  },
  {
    category: "otherGoods",
    id: 38,
    title: "Додо Раскраска",
    img: [
      "https://dodopizza-a.akamaihd.net/static/Img/Products/1011bb408c7649c08512e62db380ab4e_138x138.jpeg",
    ],
    price: 10,
    buttonCart: true,
  },
  {
    category: "otherGoods",
    id: 39,
    title: "Додо Клюв",
    img: [
      "https://dodopizza-a.akamaihd.net/static/Img/Products/6c1f55cf262542e7864621b17c6c9a91_138x138.jpeg",
    ],
    price: 10,
    buttonCart: true,
  },
  {
    category: "otherGoods",
    id: 40,
    title: "Додо Колпак",
    img: [
      "https://dodopizza-a.akamaihd.net/static/Img/Products/e5074d33a5ec46e588d11ebd68f185e0_138x138.jpeg",
    ],
    price: 10,
    buttonCart: true,
  },
];
