export const Beverages = [
  {
    "id": 1,
    "title": "Juices",
    "image": require('./juices.webp'),
    "products": [
  {
    id: 101,
    title: "Orange Juice",
    image: require('./OrangeJuice.jpg'),
    actual_price: 50.0,
    discount_price: 30.0,
    discount_percentage: 40.0,
    category: "Juices",
    description: "Freshly squeezed, pure orange juice packed with Vitamin C. A classic and refreshing start to any day.",
    rating: {
      rate: 4,
      count: 450
    },
    stock_quantity: 300
  },
  {
    id: 102,
    title: "Apple Juice",
    image: require('./AppleJuice.webp'),
    actual_price: 60.0,
    discount_price: 40.0,
    discount_percentage: 33.3,
    category: "Juices",
    description: "Crisp and sweet apple juice made from the finest hand-picked apples. Clear, refreshing, and naturally delicious.",
    rating: {
      rate: 3,
      count: 400
    },
    stock_quantity: 350
  },
  {
    id: 103,
    title: "Mango Juice",
    image: require('./MangoJuice.jpg'),
    actual_price: 70.0,
    discount_price: 50.0,
    discount_percentage: 28.6,
    category: "Juices",
    description: "Thick, sweet, and luscious juice made from ripe mangoes. A tropical delight that tastes like summer in a glass.",
    rating: {
      rate: 5,
      count: 600
    },
    stock_quantity: 550
  },
  {
    id: 104,
    title: "Mixed Fruit Juice",
    image: require('./MixedFruitJuice.webp'),
    actual_price: 80.0,
    discount_price: 50.0,
    discount_percentage: 37.5,
    category: "Juices",
    description: "A delicious blend of various fruits like apple, orange, pineapple, and banana for a balanced and nutritious drink.",
    rating: {
      rate: 4,
      count: 520
    },
    stock_quantity: 410
  },
  {
    id: 105,
    title: "Pineapple Juice",
    image: require('./pineapple.webp'),
    actual_price: 70.0,
    discount_price: 40.0,
    discount_percentage: 42.9,
    category: "Juices",
    description: "Tangy and sweet juice from fresh pineapples, offering a vibrant tropical flavor and digestive benefits.",
    rating: {
      rate: 3,
      count: 350
    },
    stock_quantity: 280
  },
  {
    id: 106,
    title: "Pomegranate Juice",
    image: require('./PomegranateJuice.jpg'),
    actual_price: 90.0,
    discount_price: 50.0,
    discount_percentage: 44.4,
    category: "Juices",
    description: "Rich and tart 100% pomegranate juice, packed with antioxidants. A healthy and flavorful choice.",
    rating: {
      rate: 5,
      count: 380
    },
    stock_quantity: 250
  },
  {
    id: 107,
    title: "Grape Juice",
    image: require('./grape.jpg'),
    actual_price: 70.0,
    discount_price: 40.0,
    discount_percentage: 42.9,
    category: "Juices",
    description: "Sweet and smooth juice made from ripe, dark grapes. A classic beverage enjoyed by all ages.",
    rating: {
      rate: 4,
      count: 310
    },
    stock_quantity: 400
  },
  {
    id: 108,
    title: "Sugarcane Juice",
    image: require('./SugarcaneJuice.jpg'),
    actual_price: 50.0,
    discount_price: 30.0,
    discount_percentage: 40.0,
    category: "Juices",
    description: "A natural and refreshing sweet juice extracted from pressed sugarcane stalks, often with a hint of ginger and lemon.",
    rating: {
      rate: 5,
      count: 600
    },
    stock_quantity: 600
  },
  {
    id: 109,
    title: "Guava Juice",
    image: require('./GuavaJuice.webp'),
    actual_price: 60.0,
    discount_price: 40.0,
    discount_percentage: 33.3,
    category: "Juices",
    description: "A unique, sweet and slightly tangy juice with the distinct flavor of tropical guava. Rich in Vitamin C.",
    rating: {
      rate: 4,
      count: 320
    },
    stock_quantity: 320
  },
  {
    id: 110,
    title: "Cranberry Juice",
    image: require('./CranberryJuice.webp'),
    actual_price: 90.0,
    discount_price: 50.0,
    discount_percentage: 44.4,
    category: "Juices",
    description: "Tart and refreshing cranberry juice, known for its health benefits and vibrant red color. Perfect on its own or in mocktails.",
    rating: {
      rate: 3,
      count: 180
    },
    stock_quantity: 180
  }
]

  },
  {
    "id": 2,
    "title": "Iced Tea",
    "image": require('./iced.webp'),
"products": [
  {
    id: 201,
    title: "Lemon Iced Tea",
    image: require('./LemonIcedTea.jpg'),
    actual_price: 60.0,
    discount_price: 40.0,
    discount_percentage: 33.3,
    category: "Iced Tea",
    description: "The classic refresher. Crisp black tea chilled and blended with a zesty lemon flavor for a perfectly balanced drink.",
    rating: { rate: 4, count: 550 },
    stock_quantity: 400
  },
  {
    id: 202,
    title: "Peach Iced Tea",
    image: require('./PeachIcedTea.webp'),
    actual_price: 65.0,
    discount_price: 45.0,
    discount_percentage: 30.8,
    category: "Iced Tea",
    description: "A sweet and fragrant iced tea infused with the juicy flavor of ripe peaches. A delightful summer beverage.",
    rating: { rate: 3, count: 480 },
    stock_quantity: 350
  },
  {
    id: 203,
    title: "Green Iced Tea",
    image: require('./GreenIcedTea.jpg'),
    actual_price: 70.0,
    discount_price: 50.0,
    discount_percentage: 28.6,
    category: "Iced Tea",
    description: "A light and healthy iced tea made from green tea leaves, offering a smooth taste with a hint of honey and mint.",
    rating: { rate: 5, count: 320 },
    stock_quantity: 280
  },
  {
    id: 204,
    title: "Raspberry Iced Tea",
    image: require('./RaspberryIcedTea.webp'),
    actual_price: 65.0,
    discount_price: 45.0,
    discount_percentage: 30.8,
    category: "Iced Tea",
    description: "A vibrant and tangy iced tea bursting with the sweet and slightly tart flavor of fresh raspberries.",
    rating: { rate: 4, count: 300 },
    stock_quantity: 300
  },
  {
    id: 205,
    title: "Unsweetened Black Iced Tea",
    image: require('./BlackIcedTea.jpg'),
    actual_price: 60.0,
    discount_price: 40.0,
    discount_percentage: 33.3,
    category: "Iced Tea",
    description: "For the tea purist. A simple, bold, and refreshing black tea, brewed and chilled to perfection with no added sugar.",
    rating: { rate: 3, count: 280 },
    stock_quantity: 320
  },
  {
    id: 206,
    title: "Mint Mojito Iced Tea",
    image: require('./MintMojitoIcedTea.webp'),
    actual_price: 70.0,
    discount_price: 50.0,
    discount_percentage: 28.6,
    category: "Iced Tea",
    description: "An exciting twist on iced tea, combining refreshing mint and a hint of lime for a non-alcoholic mojito flavor.",
    rating: { rate: 5, count: 410 },
    stock_quantity: 250
  },
  {
    id: 207,
    title: "Passion Fruit Iced Tea",
    image: require('./PassionFruitIcedTea.png'),
    actual_price: 65.0,
    discount_price: 45.0,
    discount_percentage: 30.8,
    category: "Iced Tea",
    description: "An exotic and aromatic iced tea featuring the sweet and tangy taste of tropical passion fruit.",
    rating: { rate: 4, count: 260 },
    stock_quantity: 210
  },
  {
    id: 208,
    title: "Hibiscus Berry Iced Tea",
    image: require('./HibiscusBerryIcedTea.webp'),
    actual_price: 70.0,
    discount_price: 50.0,
    discount_percentage: 28.6,
    category: "Iced Tea",
    description: "A beautiful, caffeine-free iced tea with a deep red hue, offering a tart and fruity flavor from hibiscus flowers and mixed berries.",
    rating: { rate: 5, count: 350 },
    stock_quantity: 290
  },
  {
    id: 209,
    title: "Ginger Honey Iced Tea",
    image: require('./GingerHoneyIcedTea.png'),
    actual_price: 65.0,
    discount_price: 45.0,
    discount_percentage: 30.8,
    category: "Iced Tea",
    description: "A soothing yet invigorating blend of black tea with the spicy warmth of ginger and the natural sweetness of honey.",
    rating: { rate: 4, count: 290 },
    stock_quantity: 330
  },
  {
    id: 210,
    title: "Arnold Palmer",
    image: require('./ArnoldPalmer.webp'),
    actual_price: 65.0,
    discount_price: 45.0,
    discount_percentage: 30.8,
    category: "Iced Tea",
    description: "The perfect half-and-half mix of refreshing iced tea and tangy lemonade, named after the legendary golfer.",
    rating: { rate: 4, count: 370 },
    stock_quantity: 380
  }
]


  },
  {
    "id": 3,
    "title": "Coffee",
    "image": require('./coffee.jpg'),
"products": [
  {
    id: 301,
    title: "Cold Brew Coffee",
    image: require('./ColdBrewCoffee.webp'),
    actual_price: 70.0,
    discount_price: 50.0,
    discount_percentage: 28.6,
    category: "Coffee",
    description: "Smooth, low-acid coffee concentrate brewed with cold water over 12 hours. Served over ice for a bold, refreshing kick.",
    rating: { rate: 4, count: 420 },
    stock_quantity: 300
  },
  {
    id: 302,
    title: "Iced Latte",
    image: require('./IcedLatte.jpeg'),
    actual_price: 75.0,
    discount_price: 55.0,
    discount_percentage: 26.7,
    category: "Coffee",
    description: "A shot of rich espresso poured over chilled milk and ice. A simple, creamy, and classic cold coffee.",
    rating: { rate: 3, count: 390 },
    stock_quantity: 350
  },
  {
    id: 303,
    title: "Cappuccino",
    image: require('./Cappuccino.jpg'),
    actual_price: 70.0,
    discount_price: 50.0,
    discount_percentage: 28.6,
    category: "Coffee",
    description: "The perfect balance of espresso, steamed milk, and a thick layer of creamy foam. A timeless Italian coffee.",
    rating: { rate: 5, count: 550 },
    stock_quantity: 420
  },
  {
    id: 304,
    title: "Filter Coffee",
    image: require('./FilterCoffee.jpg'),
    actual_price: 65.0,
    discount_price: 50.0,
    discount_percentage: 23.1,
    category: "Coffee",
    description: "Traditional South Indian filter coffee. A strong, frothy, and aromatic brew mixed with hot milk and sugar.",
    rating: { rate: 4, count: 800 },
    stock_quantity: 600
  },
  {
    id: 305,
    title: "Americano",
    image: require('./Americano.webp'),
    actual_price: 70.0,
    discount_price: 50.0,
    discount_percentage: 28.6,
    category: "Coffee",
    description: "A shot of espresso diluted with hot water, giving it a similar strength to, but different flavor from, traditionally brewed coffee.",
    rating: { rate: 3, count: 310 },
    stock_quantity: 250
  },
  {
    id: 306,
    title: "Mocha Frappe",
    image: require('./MochaFrappe.webp'),
    actual_price: 80.0,
    discount_price: 55.0,
    discount_percentage: 31.3,
    category: "Coffee",
    description: "An indulgent, ice-blended coffee drink combining espresso, milk, chocolate sauce, and topped with whipped cream.",
    rating: { rate: 5, count: 450 },
    stock_quantity: 320
  },
  {
    id: 307,
    title: "Caramel Macchiato",
    image: require('./CaramelMacchiato.webp'),
    actual_price: 75.0,
    discount_price: 55.0,
    discount_percentage: 26.7,
    category: "Coffee",
    description: "A layered coffee drink with steamed milk, a shot of espresso, and a drizzle of sweet caramel sauce.",
    rating: { rate: 4, count: 380 },
    stock_quantity: 280
  },
  {
    id: 308,
    title: "Instant Coffee Powder",
    image: require('./InstantCoffeePowder.jpg'),
    actual_price: 70.0,
    discount_price: 50.0,
    discount_percentage: 28.6,
    category: "Coffee",
    description: "A jar of quality instant coffee crystals for a quick and convenient cup of coffee anytime, anywhere.",
    rating: { rate: 3, count: 600 },
    stock_quantity: 550
  },
  {
    id: 309,
    title: "Espresso",
    image: require('./espresso.webp'),
    actual_price: 70.0,
    discount_price: 50.0,
    discount_percentage: 28.6,
    category: "Coffee",
    description: "A concentrated, full-bodied coffee beverage brewed by forcing hot water under pressure through finely-ground coffee beans.",
    rating: { rate: 4, count: 330 },
    stock_quantity: 290
  },
  {
    id: 310,
    title: "Hazelnut Cold Coffee",
    image: require('./HazelnutColdCoffee.webp'),
    actual_price: 75.0,
    discount_price: 55.0,
    discount_percentage: 26.7,
    category: "Coffee",
    description: "A creamy and frothy cold coffee blended with the rich and nutty flavor of hazelnut syrup.",
    rating: { rate: 5, count: 480 },
    stock_quantity: 380
  }
]


  },
{
  id: 4,
  title: "Smoothies",
  image: require("./smoothies.jpg"),
  products: [
    {
      id: 401,
      title: "Strawberry Banana Smoothie",
      image: require("./StrawberryBananaSmoothie.jpg"),
      actual_price: 200.0,
      discount_price: 180.0,
      discount_percentage: 10.0,
      category: "Smoothies",
      description:
        "A classic, creamy smoothie made with ripe strawberries, sweet bananas, and a splash of yogurt or milk.",
      rating: { rate: 4.7, count: 400 },
      stock_quantity: 300,
    },
    {
      id: 402,
      title: "Mango Pineapple Smoothie",
      image: require("./MangoPineappleSmoothie.webp"),
      actual_price: 220.0,
      discount_price: 190.0,
      discount_percentage: 13.64,
      category: "Smoothies",
      description:
        "A tropical escape in a glass. A vibrant blend of sweet mango, tangy pineapple, and creamy coconut milk.",
      rating: { rate: 4.6, count: 350 },
      stock_quantity: 250,
    },
    {
      id: 403,
      title: "Green Detox Smoothie",
      image: require("./GreenDetoxSmoothie.png"),
      actual_price: 240.0,
      discount_price: 195.0,
      discount_percentage: 18.75,
      category: "Smoothies",
      description:
        "A nutrient-packed smoothie with spinach, kale, apple, and banana to cleanse and energize your body.",
      rating: { rate: 4.4, count: 310 },
      stock_quantity: 200,
    },
    {
      id: 404,
      title: "Berry Blast Smoothie",
      image: require("./BerryBlastSmoothie.png"),
      actual_price: 235.0,
      discount_price: 190.0,
      discount_percentage: 19.15,
      category: "Smoothies",
      description:
        "An antioxidant-rich blend of strawberries, blueberries, raspberries, and blackberries for a burst of fruity flavor.",
      rating: { rate: 4.8, count: 450 },
      stock_quantity: 380,
    },
    {
      id: 405,
      title: "Chocolate Peanut Butter Smoothie",
      image: require("./ChocolatePeanutButterSmoothie.png"),
      actual_price: 255.0,
      discount_price: 200.0,
      discount_percentage: 21.57,
      category: "Smoothies",
      description:
        "An indulgent yet healthy smoothie that tastes like a dessert. Made with cocoa, peanut butter, banana, and protein powder.",
      rating: { rate: 4.9, count: 500 },
      stock_quantity: 420,
    },
    {
      id: 406,
      title: "Oatmeal Breakfast Smoothie",
      image: require("./OatmealBreakfastSmoothie.jpeg"),
      actual_price: 210.0,
      discount_price: 175.0,
      discount_percentage: 16.67,
      category: "Smoothies",
      description:
        "A wholesome and filling smoothie with rolled oats, banana, cinnamon, and a touch of maple syrup. The perfect start to your day.",
      rating: { rate: 4.5, count: 280 },
      stock_quantity: 330,
    },
    {
      id: 407,
      title: "Avocado Green Smoothie",
      image: require("./AvocadoGreenSmoothie.webp"),
      actual_price: 260.0,
      discount_price: 200.0,
      discount_percentage: 23.08,
      category: "Smoothies",
      description:
        "A creamy, dreamy smoothie made with avocado for healthy fats, plus spinach, pineapple, and coconut water.",
      rating: { rate: 4.3, count: 250 },
      stock_quantity: 180,
    },
    {
      id: 408,
      title: "Watermelon Mint Cooler",
      image: require("./WatermelonMintCooler.png"),
      actual_price: 190.0,
      discount_price: 160.0,
      discount_percentage: 15.79,
      category: "Smoothies",
      description:
        "An incredibly refreshing and hydrating blend of fresh watermelon, mint leaves, and a squeeze of lime.",
      rating: { rate: 4.7, count: 330 },
      stock_quantity: 290,
    },
    {
      id: 409,
      title: "Papaya Ginger Smoothie",
      image: require("./PapayaGingerSmoothie.jpg"),
      actual_price: 200.0,
      discount_price: 170.0,
      discount_percentage: 15.0,
      category: "Smoothies",
      description:
        "A digestive-friendly smoothie with sweet papaya, a hint of spicy ginger, and turmeric for an anti-inflammatory boost.",
      rating: { rate: 4.2, count: 220 },
      stock_quantity: 240,
    },
    {
      id: 410,
      title: "Coffee Banana Smoothie",
      image: require("./CoffeeBananaSmoothie.jpg"),
      actual_price: 240.0,
      discount_price: 195.0,
      discount_percentage: 18.75,
      category: "Smoothies",
      description:
        "Get your caffeine and breakfast in one! A blend of cold brew coffee, banana, oats, and a touch of cocoa.",
      rating: { rate: 4.6, count: 360 },
      stock_quantity: 310,
    },
  ],
},

{
  id: 5,
  title: "Milk & Shakes",
  image: require('./milkshake.jpg'),
  products: [
    {
      id: 501,
      title: "Classic Vanilla Milkshake",
      image: require('./ClassicVanillaMilkshake.jpg'),
      actual_price: 150.0,
      discount_price: 130.0,
      discount_percentage: 13.33,
      category: "Milk & Shakes",
      description:
        "A timeless classic. Creamy vanilla ice cream blended with milk to create a smooth, sweet, and satisfying shake.",
      rating: { rate: 4, count: 400 },
      stock_quantity: 380
    },
    {
      id: 502,
      title: "Rich Chocolate Shake",
      image: require('./RichChocolateShake.jpg'),
      actual_price: 160.0,
      discount_price: 140.0,
      discount_percentage: 12.5,
      category: "Milk & Shakes",
      description:
        "An indulgent shake for chocolate lovers, made with premium chocolate ice cream and a swirl of chocolate syrup.",
      rating: { rate: 5, count: 550 },
      stock_quantity: 450
    },
    {
      id: 503,
      title: "Strawberry Shake",
      image: require('./StrawberryShake.jpg'),
      actual_price: 170.0,
      discount_price: 150.0,
      discount_percentage: 11.76,
      category: "Milk & Shakes",
      description:
        "A sweet and fruity shake bursting with the flavor of fresh strawberries, blended with creamy ice cream and milk.",
      rating: { rate: 3, count: 480 },
      stock_quantity: 420
    },
    {
      id: 504,
      title: "Oreo Cookie Shake",
      image: require('./OreoCookieShake.jpg'),
      actual_price: 200.0,
      discount_price: 180.0,
      discount_percentage: 10.0,
      category: "Milk & Shakes",
      description:
        "A crowd-pleasing blend of vanilla ice cream, milk, and crushed Oreo cookies for a cookies-and-cream delight.",
      rating: { rate: 5, count: 650 },
      stock_quantity: 550
    },
    {
      id: 505,
      title: "Mango Milkshake",
      image: require('./MangoMilkshake.jpg'),
      actual_price: 180.0,
      discount_price: 160.0,
      discount_percentage: 11.11,
      category: "Milk & Shakes",
      description:
        "A seasonal favorite, this thick and creamy shake is made with sweet, ripe mangoes for a taste of the tropics.",
      rating: { rate: 4, count: 600 },
      stock_quantity: 500
    },
    {
      id: 506,
      title: "Cold Coffee Shake",
      image: require('./ColdCoffeeShake.jpg'),
      actual_price: 195.0,
      discount_price: 170.0,
      discount_percentage: 12.82,
      category: "Milk & Shakes",
      description:
        "A perfect blend of coffee, milk, and ice cream. A creamy, frothy, and refreshing way to get your caffeine fix.",
      rating: { rate: 3, count: 520 },
      stock_quantity: 410
    },
    {
      id: 507,
      title: "Badam Milk (Almond Milk)",
      image: require('./BadamMilk.png'),
      actual_price: 105.0,
      discount_price: 90.0,
      discount_percentage: 14.29,
      category: "Milk & Shakes",
      description:
        "A traditional Indian drink made with blended almonds, milk, cardamom, and saffron. Served chilled, it's both delicious and nutritious.",
      rating: { rate: 5, count: 420 },
      stock_quantity: 350
    },
    {
      id: 508,
      title: "Sweet Lassi",
      image: require('./SweetLassi.webp'),
      actual_price: 90.0,
      discount_price: 80.0,
      discount_percentage: 11.11,
      category: "Milk & Shakes",
      description:
        "A popular, traditional yogurt-based drink from Punjab. A creamy and refreshing blend of yogurt, water, and sugar.",
      rating: { rate: 4, count: 380 },
      stock_quantity: 300
    },
    {
      id: 509,
      title: "Buttermilk (Chaas)",
      image: require('./buttermilk.webp'),
      actual_price: 70.0,
      discount_price: 60.0,
      discount_percentage: 14.29,
      category: "Milk & Shakes",
      description:
        "A savory and spiced Indian yogurt drink. Light and refreshing with flavors of cumin, ginger, and fresh herbs.",
      rating: { rate: 3, count: 350 },
      stock_quantity: 320
    },
    {
      id: 510,
      title: "Turmeric Milk (Haldi Doodh)",
      image: require('./TurmericMilk.webp'),
      actual_price: 110.0,
      discount_price: 100.0,
      discount_percentage: 9.09,
      category: "Milk & Shakes",
      description:
        "A warm and soothing 'Golden Milk' made with milk, turmeric, and other spices like ginger and black pepper. Known for its health benefits.",
      rating: { rate: 5, count: 300 },
      stock_quantity: 250
    }
  ]
},

 {
  id: 6,
  title: "Energy Drinks",
  image: require('./EnergyDrinks.webp'),
  products: [
    {
      id: 601,
      title: "Red Bull Energy Drink",
      image: require('./RedBullEnergyDrink.webp'),
      actual_price: 140.0,
      discount_price: 125.0,
      discount_percentage: 10.71,
      category: "Energy Drinks",
      description:
        "The classic energy drink that gives you wings. Known for its unique flavor and ability to vitalize body and mind.",
      rating: { rate: 4, count: 900 },
      stock_quantity: 750
    },
    {
      id: 602,
      title: "Monster Energy",
      image: require('./MonsterEnergy.webp'),
      actual_price: 145.0,
      discount_price: 130.0,
      discount_percentage: 10.34,
      category: "Energy Drinks",
      description:
        "A popular energy drink with a potent energy blend and a smooth, easy-drinking flavor. Unleash the beast.",
      rating: { rate: 5, count: 850 },
      stock_quantity: 680
    },
    {
      id: 603,
      title: "Sting Energy Drink",
      image: require('./StingEnergyDrink.jpg'),
      actual_price: 40.0,
      discount_price: 35.0,
      discount_percentage: 12.5,
      category: "Energy Drinks",
      description:
        "An energizing drink with a refreshing strawberry flavor, designed to give you an instant jolt of energy.",
      rating: { rate: 3, count: 700 },
      stock_quantity: 550
    },
    {
      id: 604,
      title: "Gatorade Blue Bolt",
      image: require('./GatoradeBlueBolt.jpg'),
      actual_price: 60.0,
      discount_price: 50.0,
      discount_percentage: 16.67,
      category: "Energy Drinks",
      description:
        "A sports drink designed to rehydrate, replenish, and refuel. Replaces fluids and electrolytes lost in sweat.",
      rating: { rate: 5, count: 650 },
      stock_quantity: 600
    },
    {
      id: 605,
      title: "Thums Up Charged",
      image: require('./ThumsUpCharged.jpeg'),
      actual_price: 50.0,
      discount_price: 45.0,
      discount_percentage: 10.0,
      category: "Energy Drinks",
      description:
        "The strong taste of Thums Up with an extra kick of caffeine for a powerful burst of energy.",
      rating: { rate: 4, count: 580 },
      stock_quantity: 500
    },
    {
      id: 606,
      title: "Mountain Dew",
      image: require('./MountainDew.bmp'),
      actual_price: 45.0,
      discount_price: 40.0,
      discount_percentage: 11.11,
      category: "Energy Drinks",
      description:
        "A bold and distinctly refreshing citrus-flavored soda with a boost of caffeine. Do the Dew.",
      rating: { rate: 3, count: 620 },
      stock_quantity: 520
    },
    {
      id: 607,
      title: "Hell Classic Energy Drink",
      image: require('./HellClassicEnergyDrink.jpg'),
      actual_price: 80.0,
      discount_price: 70.0,
      discount_percentage: 12.5,
      category: "Energy Drinks",
      description:
        "A quality energy drink with a tutti-frutti flavor, containing active ingredients and vitamins to boost performance.",
      rating: { rate: 5, count: 400 },
      stock_quantity: 350
    },
    {
      id: 608,
      title: "Red Bull Sugarfree",
      image: require('./RedBullSugarfree.jpg'),
      actual_price: 140.0,
      discount_price: 125.0,
      discount_percentage: 10.71,
      category: "Energy Drinks",
      description:
        "All the wings of Red Bull without the sugar. Same benefits, same taste, but with zero sugar and only 5 calories per can.",
      rating: { rate: 4, count: 510 },
      stock_quantity: 420
    },
    {
      id: 609,
      title: "ORSL Rehydrate Drink",
      image: require('./ORSLRehydrateDrink.webp'),
      actual_price: 45.0,
      discount_price: 38.0,
      discount_percentage: 15.56,
      category: "Energy Drinks",
      description:
        "An electrolyte drink that helps restore body fluids and electrolytes lost due to dehydration. Comes in a refreshing orange flavor.",
      rating: { rate: 3, count: 590 },
      stock_quantity: 480
    },
    {
      id: 610,
      title: "Campa Cricket Energy Drink",
      image: require('./CampaCricketEnergyDrink.png'),
      actual_price: 90.0,
      discount_price: 80.0,
      discount_percentage: 11.11,
      category: "Energy Drinks",
      description:
        "A carbonated energy drink with a crisp mango flavor, designed to keep you charged up during any activity.",
      rating: { rate: 5, count: 300 },
      stock_quantity: 250
    }
  ]
},

 {
  id: 7,
  title: "Water",
  image: require('./water.webp'),
  products: [
    {
      id: 701,
      title: "Packaged Drinking Water (1L)",
      image: require('./packagedWater1L.webp'),
      actual_price: 25.0,
      discount_price: 22.0,
      discount_percentage: 10.0,
      category: "Water",
      description: "Pure and safe packaged drinking water that has gone through a rigorous purification process. The perfect thirst quencher.",
      rating: { rate: 5, count: 1200 },
      stock_quantity: 1500
    },
    {
      id: 702,
      title: "Himalayan Natural Mineral Water (1L)",
      image: require('./himalayanWater1L.webp'),
      actual_price: 70.0,
      discount_price: 60.0,
      discount_percentage: 14.29,
      category: "Water",
      description: "Untouched and unprocessed water sourced directly from the Himalayas, with a balanced mineral composition.",
      rating: { rate: 4, count: 600 },
      stock_quantity: 480
    },
    {
      id: 703,
      title: "Sparkling Water",
      image: require('./sparklingWater.jpg'),
      actual_price: 90.0,
      discount_price: 80.0,
      discount_percentage: 11.11,
      category: "Water",
      description: "Crisp and effervescent carbonated water. A refreshing, zero-calorie alternative to sugary drinks.",
      rating: { rate: 4, count: 350 },
      stock_quantity: 300
    },
    {
      id: 704,
      title: "Tender Coconut Water",
      image: require('./tenderCoconutWater.jpg'),
      actual_price: 65.0,
      discount_price: 55.0,
      discount_percentage: 15.38,
      category: "Water",
      description: "100% natural tender coconut water. A hydrating and electrolyte-rich drink straight from nature.",
      rating: { rate: 5, count: 800 },
      stock_quantity: 650
    },
    {
      id: 705,
      title: "Flavoured Water (Lemon & Mint)",
      image: require('./lemonMintWater.png'),
      actual_price: 50.0,
      discount_price: 45.0,
      discount_percentage: 10.0,
      category: "Water",
      description: "Still water infused with a refreshing hint of natural lemon and mint flavor. No sugar, no calories.",
      rating: { rate: 3, count: 280 },
      stock_quantity: 320
    },
    {
      id: 706,
      title: "Alkaline Water",
      image: require('./alkalineWater.jpg'),
      actual_price: 85.0,
      discount_price: 75.0,
      discount_percentage: 11.76,
      category: "Water",
      description: "Water with a higher pH level, believed to help neutralize acid in the bloodstream. Known for its super-hydrating properties.",
      rating: { rate: 4, count: 210 },
      stock_quantity: 210
    },
    {
      id: 707,
      title: "Vitamin Water (Revive)",
      image: require('./vitaminWaterRevive.webp'),
      actual_price: 75.0,
      discount_price: 65.0,
      discount_percentage: 13.33,
      category: "Water",
      description: "A nutrient-enhanced water beverage with fruit punch flavor, fortified with essential vitamins and minerals.",
      rating: { rate: 4, count: 410 },
      stock_quantity: 380
    },
    {
      id: 708,
      title: "Packaged Water (500ml)",
      image: require('./packagedWater500ml.jpg'),
      actual_price: 12.0,
      discount_price: 10.8,
      discount_percentage: 10.0,
      category: "Water",
      description: "A convenient, portable 500ml bottle of pure and safe packaged drinking water for when you're on the move.",
      rating: { rate: 5, count: 1500 },
      stock_quantity: 2000
    },
    {
      id: 709,
      title: "Bisleri Soda Water",
      image: require('./bisleriSodaWater.webp'),
      actual_price: 30.0,
      discount_price: 25.0,
      discount_percentage: 16.67,
      category: "Water",
      description: "Purified water that has been carbonated. Perfect for mixing drinks or enjoying on its own for a bubbly kick.",
      rating: { rate: 4, count: 550 },
      stock_quantity: 420
    },
    {
      id: 710,
      title: "Water Can (20L)",
      image: require('./waterCan20L.jpg'),
      actual_price: 95.0,
      discount_price: 80.0,
      discount_percentage: 15.79,
      category: "Water",
      description: "A large 20-litre can of packaged mineral water, ideal for home and office water dispensers.",
      rating: { rate: 5, count: 950 },
      stock_quantity: 750
    }
  ]
},

 {
  id: 8,
  title: "Soft Drinks",
  image: require('./softDrinksCategory.png'),
  products: [
    {
      id: 801,
      title: "Coca-Cola",
      image: require('./cocaCola.webp'),
      actual_price: 45.0,
      discount_price: 40.0,
      discount_percentage: 11.11,
      category: "Soft Drinks",
      description: "The original and iconic cola. A globally beloved soft drink with a unique, refreshing taste.",
      rating: { rate: 5, count: 2000 },
      stock_quantity: 2500
    },
    {
      id: 802,
      title: "Thums Up",
      image: require('./thumsUp.jpg'),
      actual_price: 45.0,
      discount_price: 40.0,
      discount_percentage: 11.11,
      category: "Soft Drinks",
      description: "A strong, fizzy, and spicy cola from India. Known for its potent taste and thunderous appeal.",
      rating: { rate: 5, count: 2500 },
      stock_quantity: 2800
    },
    {
      id: 803,
      title: "Sprite",
      image: require('./sprite.webp'),
      actual_price: 45.0,
      discount_price: 40.0,
      discount_percentage: 11.11,
      category: "Soft Drinks",
      description: "A crisp, refreshing lemon-lime flavored soft drink that quenches your thirst with its clean taste.",
      rating: { rate: 4, count: 1800 },
      stock_quantity: 2100
    },
    {
      id: 804,
      title: "Fanta",
      image: require('./fanta.webp'),
      actual_price: 45.0,
      discount_price: 40.0,
      discount_percentage: 11.11,
      category: "Soft Drinks",
      description: "A vibrant, bubbly, and fruity soft drink with a bold orange flavor. Fun and refreshing.",
      rating: { rate: 4, count: 1500 },
      stock_quantity: 1800
    },
    {
      id: 805,
      title: "Pepsi",
      image: require('./pepsi.jpg'),
      actual_price: 45.0,
      discount_price: 40.0,
      discount_percentage: 11.11,
      category: "Soft Drinks",
      description: "A globally recognized cola with a bold, robust, and refreshing taste. Live for now.",
      rating: { rate: 4, count: 1900 },
      stock_quantity: 2200
    },
    {
      id: 806,
      title: "Limca",
      image: require('./limca.webp'),
      actual_price: 45.0,
      discount_price: 40.0,
      discount_percentage: 11.11,
      category: "Soft Drinks",
      description: "A lemon and lime flavored carbonated soft drink, cherished for its thirst-quenching 'lime 'n' lemoni' flavor.",
      rating: { rate: 4, count: 1300 },
      stock_quantity: 1600
    },
    {
      id: 807,
      title: "Maaza Mango Drink",
      image: require('./maaza.png'),
      actual_price: 50.0,
      discount_price: 45.0,
      discount_percentage: 10.0,
      category: "Soft Drinks",
      description: "A non-carbonated mango fruit drink that is universally loved for its thick, sweet, and authentic mango taste.",
      rating: { rate: 5, count: 2200 },
      stock_quantity: 2600
    },
    {
      id: 808,
      title: "7 Up",
      image: require('./7up.jpg'),
      actual_price: 45.0,
      discount_price: 40.0,
      discount_percentage: 11.11,
      category: "Soft Drinks",
      description: "The original 'un-cola'. A refreshing, crisp, and clean-tasting lemon-lime soft drink.",
      rating: { rate: 4, count: 1400 },
      stock_quantity: 1700
    },
    {
      id: 809,
      title: "Mirinda",
      image: require('./mirinda.jpg'),
      actual_price: 45.0,
      discount_price: 40.0,
      discount_percentage: 11.11,
      category: "Soft Drinks",
      description: "A bold and vibrant orange-flavored carbonated soft drink that provides a burst of tangy fun.",
      rating: { rate: 3, count: 1200 },
      stock_quantity: 1500
    },
    {
      id: 810,
      title: "Diet Coke",
      image: require('./dietCoke.jpg'),
      actual_price: 50.0,
      discount_price: 45.0,
      discount_percentage: 10.0,
      category: "Soft Drinks",
      description: "The same great taste of Coca-Cola but with no sugar and no calories. A lighter way to enjoy your favorite cola.",
      rating: { rate: 4, count: 1100 },
      stock_quantity: 1400
    }
  ]
},

 {
  id: 9,
  title: "Hot Chocolate",
  image: require('./hotChocolateCategory.jpg'),
  products: [
    {
      id: 901,
      title: "Classic Hot Chocolate",
      image: require('./classicHotChocolate.jpg'),
      actual_price: 170.0,
      discount_price: 150.0,
      discount_percentage: 11.76,
      category: "Hot Chocolate",
      description: "A rich, creamy, and comforting hot chocolate made with real cocoa and steamed milk. A timeless warm treat.",
      rating: { rate: 5, count: 500 },
      stock_quantity: 400
    },
    {
      id: 902,
      title: "Hot Chocolate with Marshmallows",
      image: require('./hotChocolateMarshmallows.png'),
      actual_price: 190.0,
      discount_price: 170.0,
      discount_percentage: 10.53,
      category: "Hot Chocolate",
      description: "Our classic hot chocolate topped with a handful of soft, gooey mini marshmallows that melt into the drink.",
      rating: { rate: 5, count: 600 },
      stock_quantity: 450
    },
    {
      id: 903,
      title: "Dark Hot Chocolate",
      image: require('./darkHotChocolate.webp'),
      actual_price: 180.0,
      discount_price: 160.0,
      discount_percentage: 11.11,
      category: "Hot Chocolate",
      description: "For those who prefer a less sweet, more intense cocoa flavor. Made with rich, dark chocolate for a sophisticated taste.",
      rating: { rate: 4, count: 450 },
      stock_quantity: 380
    },
    {
      id: 904,
      title: "Caramel Hot Chocolate",
      image: require('./caramelHotChocolate.jpg'),
      actual_price: 200.0,
      discount_price: 180.0,
      discount_percentage: 10.0,
      category: "Hot Chocolate",
      description: "A decadent blend of rich hot chocolate with a swirl of sweet and buttery caramel syrup, topped with whipped cream.",
      rating: { rate: 4, count: 420 },
      stock_quantity: 350
    },
    {
      id: 905,
      title: "Mint Hot Chocolate",
      image: require('./mintHotChocolate.jpg'),
      actual_price: 195.0,
      discount_price: 175.0,
      discount_percentage: 10.3,
      category: "Hot Chocolate",
      description: "A refreshing twist on a classic. Rich hot chocolate infused with a cool peppermint flavor, perfect for the festive season.",
      rating: { rate: 4, count: 380 },
      stock_quantity: 320
    },
    {
      id: 906,
      title: "Spiced Hot Chocolate",
      image: require('./spicedHotChocolate.webp'),
      actual_price: 205.0,
      discount_price: 185.0,
      discount_percentage: 9.76,
      category: "Hot Chocolate",
      description: "A warming and aromatic hot chocolate with a hint of cinnamon, nutmeg, and chili for a gentle, spicy kick.",
      rating: { rate: 4, count: 350 },
      stock_quantity: 290
    },
    {
      id: 907,
      title: "White Hot Chocolate",
      image: require('./whiteHotChocolate.webp'),
      actual_price: 185.0,
      discount_price: 165.0,
      discount_percentage: 10.81,
      category: "Hot Chocolate",
      description: "A sweet and creamy alternative made with high-quality white chocolate, steamed milk, and a hint of vanilla.",
      rating: { rate: 4, count: 320 },
      stock_quantity: 250
    },
    {
      id: 908,
      title: "Hazelnut Hot Chocolate",
      image: require('./hazelnutHotChocolate.jpg'),
      actual_price: 200.0,
      discount_price: 180.0,
      discount_percentage: 10.0,
      category: "Hot Chocolate",
      description: "A delicious combination of rich chocolate and the nutty, toasted flavor of hazelnut. A comforting and indulgent treat.",
      rating: { rate: 4, count: 460 },
      stock_quantity: 380
    },
    {
      id: 909,
      title: "Hot Chocolate Mix Powder",
      image: require('./hotChocolateMix.png'),
      actual_price: 280.0,
      discount_price: 250.0,
      discount_percentage: 10.71,
      category: "Hot Chocolate",
      description: "A premium cocoa mix to make delicious hot chocolate at home. Just add hot milk for a perfect cup every time.",
      rating: { rate: 4, count: 550 },
      stock_quantity: 420
    },
    {
      id: 910,
      title: "Vegan Hot Chocolate",
      image: require('./veganHotChocolate.webp'),
      actual_price: 210.0,
      discount_price: 190.0,
      discount_percentage: 9.52,
      category: "Hot Chocolate",
      description: "A dairy-free delight! Made with rich dark cocoa and creamy almond or oat milk for a guilt-free, vegan-friendly warm drink.",
      rating: { rate: 4, count: 300 },
      stock_quantity: 250
    }
  ]
}

]