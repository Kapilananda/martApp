export const Groceries =   [
{
  id: 1,
  title: "Dals & Pulses",
  image: require('./dalCategory.jpg'),
  products: [
    {
      id: 101,
      title: "Toor Dal (Pigeon Pea)",
      image: require('./toorDal.webp'),
      actual_price: 140.0,
      discount_price: 120.5,
      discount_percentage: 13.93,
      category: "Dals & Pulses",
      description: "High-quality split pigeon peas, ideal for daily cooking.",
      rating: { rate: 5, count: 210 },
      stock_quantity: 450
    },
    {
      id: 102,
      title: "Moong Dal (Split Yellow Lentils)",
      image: require('./moongDal.webp'),
      actual_price: 110.0,
      discount_price: 95.0,
      discount_percentage: 13.64,
      category: "Dals & Pulses",
      description: "Nutritious and easy-to-cook yellow lentils, perfect for soups and dals.",
      rating: { rate: 4, count: 180 },
      stock_quantity: 400
    },
    {
      id: 103,
      title: "Chana Dal (Split Bengal Gram)",
      image: require('./chana_dal.webp'),
      actual_price: 125.0,
      discount_price: 110.0,
      discount_percentage: 12.0,
      category: "Dals & Pulses",
      description: "Protein-rich split chickpeas for authentic Indian dishes.",
      rating: { rate: 3, count: 160 },
      stock_quantity: 380
    },
    {
      id: 104,
      title: "Urad Dal (Black Gram Split)",
      image: require('./urad_dal.jpg'),
      actual_price: 150.0,
      discount_price: 130.0,
      discount_percentage: 13.33,
      category: "Dals & Pulses",
      description: "Premium black gram lentils, essential for dals and idlis.",
      rating: { rate: 4, count: 150 },
      stock_quantity: 350
    },
    {
      id: 105,
      title: "Masoor Dal (Red Lentils)",
      image: require('./masoorDal.webp'),
      actual_price: 115.0,
      discount_price: 100.0,
      discount_percentage: 13.04,
      category: "Dals & Pulses",
      description: "Soft red lentils, quick to cook, ideal for soups and curries.",
      rating: { rate: 5, count: 170 },
      stock_quantity: 320
    },
    {
      id: 106,
      title: "Rajma (Red Kidney Beans)",
      image: require('./rajma.jpg'),
      actual_price: 170.0,
      discount_price: 150.0,
      discount_percentage: 11.76,
      category: "Dals & Pulses",
      description: "High-quality red kidney beans, perfect for traditional rajma curry.",
      rating: { rate: 4, count: 200 },
      stock_quantity: 410
    },
    {
      id: 107,
      title: "Kabuli Chana (Chickpeas)",
      image: require('./kabuliChana.jpg'),
      actual_price: 165.0,
      discount_price: 140.0,
      discount_percentage: 15.15,
      category: "Dals & Pulses",
      description: "Premium chickpeas, versatile for snacks and curries.",
      rating: { rate: 5, count: 190 },
      stock_quantity: 390
    },
    {
      id: 108,
      title: "Lobia (Black-Eyed Peas)",
      image: require('./lobia.webp'),
      actual_price: 135.0,
      discount_price: 120.0,
      discount_percentage: 11.11,
      category: "Dals & Pulses",
      description: "Soft and protein-rich black-eyed peas, perfect for curries.",
      rating: { rate: 3, count: 140 },
      stock_quantity: 280
    },
    {
      id: 109,
      title: "Moth Beans",
      image: require('./mothBeans.png'),
      actual_price: 155.0,
      discount_price: 130.0,
      discount_percentage: 16.13,
      category: "Dals & Pulses",
      description: "Small protein-packed beans for soups and traditional Indian recipes.",
      rating: { rate: 4, count: 130 },
      stock_quantity: 250
    },
    {
      id: 110,
      title: "Green Moong Whole",
      image: require('./greenMoongWhole.jpg'),
      actual_price: 130.0,
      discount_price: 115.0,
      discount_percentage: 11.54,
      category: "Dals & Pulses",
      description: "Whole green moong beans, nutritious and versatile for cooking.",
      rating: { rate: 5, count: 160 },
      stock_quantity: 340
    }
  ]
},

  
{
  id: 2,
  title: "Rice & Grains",
  image: require('./riceGrainsCategory.webp'),
  products: [
    {
      id: 201,
      title: "Basmati Rice",
      image: require('./basmatiRice.webp'),
      actual_price: 250.0,
      discount_price: 220.0,
      discount_percentage: 12.0,
      category: "Rice & Grains",
      description: "Long-grain aromatic basmati rice, perfect for biryani and pulao.",
      rating: { rate: 5, count: 250 },
      stock_quantity: 550
    },
    {
      id: 202,
      title: "Sona Masoori Rice",
      image: require('./sonaMasooriRice.jpeg'),
      actual_price: 200.0,
      discount_price: 180.0,
      discount_percentage: 10.0,
      category: "Rice & Grains",
      description: "Medium-grain rice, ideal for daily cooking and idli/dosa.",
      rating: { rate: 4, count: 200 },
      stock_quantity: 480
    },
    {
      id: 203,
      title: "Parboiled Rice",
      image: require('./parboiledRice.webp'),
      actual_price: 195.0,
      discount_price: 170.0,
      discount_percentage: 12.82,
      category: "Rice & Grains",
      description: "Parboiled rice retains more nutrients and cooks perfectly fluffy.",
      rating: { rate: 3, count: 180 },
      stock_quantity: 400
    },
    {
      id: 204,
      title: "Brown Rice",
      image: require('./brownRice.webp'),
      actual_price: 225.0,
      discount_price: 200.0,
      discount_percentage: 11.11,
      category: "Rice & Grains",
      description: "Nutritious brown rice rich in fiber, great for healthy meals.",
      rating: { rate: 4, count: 170 },
      stock_quantity: 380
    },
    {
      id: 205,
      title: "Red Rice",
      image: require('./redRice.jpg'),
      actual_price: 240.0,
      discount_price: 210.0,
      discount_percentage: 12.5,
      category: "Rice & Grains",
      description: "Flavorful red rice, high in nutrients and antioxidants.",
      rating: { rate: 5, count: 160 },
      stock_quantity: 350
    },
    {
      id: 206,
      title: "Jeera Rice (Cumin Rice)",
      image: require('./jeeraRice.webp'),
      actual_price: 215.0,
      discount_price: 190.0,
      discount_percentage: 11.63,
      category: "Rice & Grains",
      description: "Fragrant rice with cumin flavor, perfect as a side dish.",
      rating: { rate: 4, count: 150 },
      stock_quantity: 330
    },
    {
      id: 207,
      title: "Idli Rice",
      image: require('./idliRice.jpg'),
      actual_price: 200.0,
      discount_price: 175.0,
      discount_percentage: 12.5,
      category: "Rice & Grains",
      description: "Special rice for soft idlis and fluffy dosas.",
      rating: { rate: 3, count: 140 },
      stock_quantity: 300
    },
    {
      id: 208,
      title: "Ponni Rice",
      image: require('./ponniRice.png'),
      actual_price: 205.0,
      discount_price: 180.0,
      discount_percentage: 12.2,
      category: "Rice & Grains",
      description: "Popular South Indian medium-grain rice, ideal for everyday meals.",
      rating: { rate: 4, count: 150 },
      stock_quantity: 310
    },
    {
      id: 209,
      title: "Organic White Rice",
      image: require('./organicWhiteRice.webp'),
      actual_price: 260.0,
      discount_price: 230.0,
      discount_percentage: 11.46,
      category: "Rice & Grains",
      description: "Chemical-free white rice for healthy and tasty meals.",
      rating: { rate: 5, count: 160 },
      stock_quantity: 360
    },
    {
      id: 210,
      title: "Sticky Rice",
      image: require('./stickyRice.webp'),
      actual_price: 215.0,
      discount_price: 195.0,
      discount_percentage: 9.3,
      category: "Rice & Grains",
      description: "Glutinous rice perfect for desserts and traditional dishes.",
      rating: { rate: 4, count: 140 },
      stock_quantity: 290
    }
  ]
},

  
{
  id: 3,
  title: "Cooking Oils",
  image: require('./cookingOilsCategory.jpg'),
  products: [
    {
      id: 301,
      title: "Mustard Oil",
      image: require('./mustardOil.webp'),
      actual_price: 280.0,
      discount_price: 250.0,
      discount_percentage: 10.71,
      category: "Cooking Oils",
      description: "Premium mustard oil, perfect for Indian cooking.",
      rating: { rate: 5, count: 180 },
      stock_quantity: 380
    },
    {
      id: 302,
      title: "Sunflower Oil",
      image: require('./sunflowerOil.webp'),
      actual_price: 250.0,
      discount_price: 220.0,
      discount_percentage: 12.0,
      category: "Cooking Oils",
      description: "Light and healthy sunflower oil for frying and sautéing.",
      rating: { rate: 4, count: 160 },
      stock_quantity: 350
    },
    {
      id: 303,
      title: "Olive Oil",
      image: require('./oliveOil.webp'),
      actual_price: 300.0,
      discount_price: 220.0,
      discount_percentage: 10.0,
      category: "Cooking Oils",
      description: "Extra virgin olive oil, ideal for salads and healthy cooking.",
      rating: { rate: 5, count: 200 },
      stock_quantity: 250
    },
    {
      id: 304,
      title: "Coconut Oil",
      image: require('./coconutOil.webp'),
      actual_price: 300.0,
      discount_price: 200.0,
      discount_percentage: 10.29,
      category: "Cooking Oils",
      description: "Organic coconut oil for cooking and skin care.",
      rating: { rate: 3, count: 180 },
      stock_quantity: 300
    },
    {
      id: 305,
      title: "Groundnut Oil",
      image: require('./groundnutOil.webp'),
      actual_price: 270.0,
      discount_price: 240.0,
      discount_percentage: 11.11,
      category: "Cooking Oils",
      description: "Refined groundnut oil for frying and cooking.",
      rating: { rate: 4, count: 160 },
      stock_quantity: 310
    },
    {
      id: 306,
      title: "Sesame Oil",
      image: require('./sesameOil.webp'),
      actual_price: 315.0,
      discount_price: 280.0,
      discount_percentage: 11.11,
      category: "Cooking Oils",
      description: "Aromatic sesame oil for flavor-rich dishes.",
      rating: { rate: 5, count: 150 },
      stock_quantity: 280
    },
    {
      id: 307,
      title: "Rice Bran Oil",
      image: require('./riceBranOil.webp'),
      actual_price: 260.0,
      discount_price: 230.0,
      discount_percentage: 11.46,
      category: "Cooking Oils",
      description: "Light, healthy oil rich in antioxidants.",
      rating: { rate: 3, count: 140 },
      stock_quantity: 290
    },
    {
      id: 308,
      title: "Refined Sunflower Oil",
      image: require('./refinedSunflowerOil.webp'),
      actual_price: 240.0,
      discount_price: 210.0,
      discount_percentage: 12.5,
      category: "Cooking Oils",
      description: "High-quality refined sunflower oil for everyday cooking.",
      rating: { rate: 4, count: 120 },
      stock_quantity: 300
    },
    {
      id: 309,
      title: "Vegetable Oil",
      image: require('./vegetableOil.webp'),
      actual_price: 225.0,
      discount_price: 200.0,
      discount_percentage: 11.11,
      category: "Cooking Oils",
      description: "Blended vegetable oil suitable for all types of cooking.",
      rating: { rate: 3, count: 130 },
      stock_quantity: 270
    },
    {
      id: 310,
      title: "Ghee",
      image: require('./ghee.webp'),
      actual_price: 420.0,
      discount_price: 380.0,
      discount_percentage: 9.52,
      category: "Cooking Oils",
      description: "Rich in Omega-3, perfect for salad dressing.",
      rating: { rate: 5, count: 110 },
      stock_quantity: 220
    }
  ]
},


{
  id: 4,
  title: "Spicy masala",
  image: require("./IndianSpices.jpg"),
  products: [
    {
      id: 401,
      title: "Coriender Powder",
      image: require("./CorienderPowder.png"),
      actual_price: 95.0,
      discount_price: 80.0,
      discount_percentage: 15.79,
      category: "Spices & Seeds",
      description: "Fragrant cumin seeds for flavorful cooking.",
      rating: { rate: 5, count: 200 },
      stock_quantity: 400
    },
    {
      id: 402,
      title: "Cumin Powder",
      image: require("./CuminPowder.jpg"),
      actual_price: 105.0,
      discount_price: 90.0,
      discount_percentage: 14.29,
      category: "Spices & Seeds",
      description: "Sweet fennel seeds, ideal for seasoning and digestion.",
      rating: { rate: 4, count: 180 },
      stock_quantity: 350
    },
    {
      id: 403,
      title: "Aachi Powder",
      image: require("./AachiPowder.jpg"),
      actual_price: 100.0,
      discount_price: 85.0,
      discount_percentage: 15.0,
      category: "Spices & Seeds",
      description: "Nutritious fenugreek seeds for cooking and health benefits.",
      rating: { rate: 3, count: 160 },
      stock_quantity: 300
    },
    {
      id: 404,
      title: "Turmeric Powder",
      image: require("./TurmericPowder.webp"),
      actual_price: 90.0,
      discount_price: 75.0,
      discount_percentage: 16.67,
      category: "Spices & Seeds",
      description: "Essential mustard seeds for tempering Indian dishes.",
      rating: { rate: 5, count: 150 },
      stock_quantity: 330
    },
    {
      id: 405,
      title: "Garam Masala",
      image: require("./GaramMasala.webp"),
      actual_price: 115.0,
      discount_price: 100.0,
      discount_percentage: 13.04,
      category: "Spices & Seeds",
      description: "Aromatic caraway seeds for breads and cooking.",
      rating: { rate: 4, count: 140 },
      stock_quantity: 280
    },
    {
      id: 406,
      title: "Chicken Masala",
      image: require("./ChickenMasala.webp"),
      actual_price: 110.0,
      discount_price: 95.0,
      discount_percentage: 13.64,
      category: "Spices & Seeds",
      description: "Nutty sesame seeds for garnishing and cooking.",
      rating: { rate: 5, count: 130 },
      stock_quantity: 310
    },
    {
      id: 407,
      title: "Red Chillis",
      image: require("./RedChillis.webp"),
      actual_price: 140.0,
      discount_price: 120.0,
      discount_percentage: 14.29,
      category: "Spices & Seeds",
      description: "Healthy pumpkin seeds for snacks and cooking.",
      rating: { rate: 3, count: 110 },
      stock_quantity: 250
    },
    {
      id: 408,
      title: "Cloves",
      image: require("./Cloves.webp"),
      actual_price: 135.0,
      discount_price: 110.0,
      discount_percentage: 18.52,
      category: "Spices & Seeds",
      description: "Nutritious sunflower seeds for snacking and recipes.",
      rating: { rate: 4, count: 120 },
      stock_quantity: 280
    },
    {
      id: 409,
      title: "Biriyani Masala",
      image: require("./BiriyaniMasala.webp"),
      actual_price: 230.0,
      discount_price: 200.0,
      discount_percentage: 13.04,
      category: "Spices & Seeds",
      description: "Superfood chia seeds for smoothies and baking.",
      rating: { rate: 5, count: 100 },
      stock_quantity: 220
    },
    {
      id: 410,
      title: "Tandoori Masala",
      image: require("./TandooriMasala.jpg"),
      actual_price: 200.0,
      discount_price: 180.0,
      discount_percentage: 10.0,
      category: "Spices & Seeds",
      description: "Healthy flax seeds for cooking and nutrition.",
      rating: { rate: 4, count: 90 },
      stock_quantity: 210
    }
  ]
},

 
{
  id: 5,
  title: "Spices & Seeds",
  image: require("./SpicesAndSeeds.jpg"),
  products: [
    {
      id: 501,
      title: "Mustard Seeds",
      image: require("./MustardSeeds.webp"),
      actual_price: 75.0,
      discount_price: 60.0,
      discount_percentage: 20.0,
      category: "Spices & Seeds",
      description: "Tiny black mustard seeds used for tempering Indian dishes.",
      rating: { rate: 5, count: 200 },
      stock_quantity: 400
    },
    {
      id: 502,
      title: "Cumin Seeds",
      image: require("./CuminSeeds.webp"),
      actual_price: 100.0,
      discount_price: 85.0,
      discount_percentage: 15.0,
      category: "Spices & Seeds",
      description: "Fragrant cumin seeds used in curries and masalas.",
      rating: { rate: 4, count: 180 },
      stock_quantity: 350
    },
    {
      id: 503,
      title: "Coriander Seeds",
      image: require("./CorianderSeeds.webp"),
      actual_price: 80.0,
      discount_price: 70.0,
      discount_percentage: 12.5,
      category: "Spices & Seeds",
      description: "Aromatic coriander seeds for powders and curries.",
      rating: { rate: 3, count: 160 },
      stock_quantity: 320
    },
    {
      id: 504,
      title: "Fennel Seeds",
      image: require("./FennelSeeds.jpg"),
      actual_price: 110.0,
      discount_price: 95.0,
      discount_percentage: 13.64,
      category: "Spices & Seeds",
      description: "Sweet fennel seeds, great for digestion and flavor.",
      rating: { rate: 5, count: 150 },
      stock_quantity: 290
    },
    {
      id: 505,
      title: "Black Pepper",
      image: require("./BlackPepper.webp"),
      actual_price: 175.0,
      discount_price: 150.0,
      discount_percentage: 14.29,
      category: "Spices & Seeds",
      description: "Whole black peppercorns for spice and heat.",
      rating: { rate: 4, count: 140 },
      stock_quantity: 250
    },
    {
      id: 506,
      title: "Fenugreek Seeds",
      image: require("./FenugreekSeeds.jpg"),
      actual_price: 75.0,
      discount_price: 65.0,
      discount_percentage: 13.33,
      category: "Spices & Seeds",
      description: "Slightly bitter fenugreek seeds used in pickles and masalas.",
      rating: { rate: 3, count: 110 },
      stock_quantity: 200
    },
    {
      id: 507,
      title: "Star Anise",
      image: require("./StarAnise.jpg"),
      actual_price: 60.0,
      discount_price: 50.0,
      discount_percentage: 16.67,
      category: "Spices & Seeds",
      description: "Fragrant bay leaves for biryanis, curries, and soups.",
      rating: { rate: 4, count: 105 },
      stock_quantity: 180
    },
    {
      id: 508,
      title: "Cardamom (Elakayi)",
      image: require("./CardamomElakayi.webp"),
      actual_price: 340.0,
      discount_price: 300.0,
      discount_percentage: 11.76,
      category: "Spices & Seeds",
      description: "Aromatic green cardamom pods for sweets and curries.",
      rating: { rate: 5, count: 95 },
      stock_quantity: 150
    },
    {
      id: 509,
      title: "Dry Ginger",
      image: require("./DryGinger.webp"),
      actual_price: 145.0,
      discount_price: 120.0,
      discount_percentage: 17.14,
      category: "Spices & Seeds",
      description: "Dried ginger root for powders, teas, and cooking.",
      rating: { rate: 3, count: 90 },
      stock_quantity: 190
    },
    {
      id: 510,
      title: "Nutmeg",
      image: require("./Nutmeg.webp"),
      actual_price: 290.0,
      discount_price: 250.0,
      discount_percentage: 13.8,
      category: "Spices & Seeds",
      description: "Warm, aromatic nutmeg used in sweets and spice mixes.",
      rating: { rate: 4, count: 85 },
      stock_quantity: 160
    }
  ]
},


{
  id: 6,
  title: "Cooking Salts",
  image: require("./CookingSalts.jpg"),
  products: [
    {
      id: 601,
      title: "Iodized Salt",
      image: require("./IodizedSalt.webp"),
      actual_price: 30.0,
      discount_price: 25.0,
      discount_percentage: 9.67,
      category: "Cooking Salts",
      description: "Everyday iodized salt for cooking.",
      rating: { rate: 4, count: 220 },
      stock_quantity: 400
    },
    {
      id: 602,
      title: "Rock Salt (Sendha Namak)",
      image: require("./RockSalt.webp"),
      actual_price: 48.0,
      discount_price: 40.0,
      discount_percentage: 16.67,
      category: "Cooking Salts",
      description: "Natural rock salt for fasting and health benefits.",
      rating: { rate: 3, count: 180 },
      stock_quantity: 350
    },
    {
      id: 603,
      title: "Sea Salt",
      image: require("./SeaSalt.jpg"),
      actual_price: 60.0,
      discount_price: 50.0,
      discount_percentage: 16.67,
      category: "Cooking Salts",
      description: "Mineral-rich sea salt for flavor and seasoning.",
      rating: { rate: 5, count: 160 },
      stock_quantity: 300
    },
    {
      id: 604,
      title: "Black Salt (Kala Namak)",
      image: require("./BlackSalt.png"),
      actual_price: 55.0,
      discount_price: 45.0,
      discount_percentage: 18.18,
      category: "Cooking Salts",
      description: "Unique-flavored black salt for chaat and chutneys.",
      rating: { rate: 4, count: 150 },
      stock_quantity: 280
    },
    {
      id: 605,
      title: "Himalayan Pink Salt",
      image: require("./HimalayanPinkSalt.webp"),
      actual_price: 145.0,
      discount_price: 120.0,
      discount_percentage: 17.14,
      category: "Cooking Salts",
      description: "Mineral-rich pink salt for healthy cooking.",
      rating: { rate: 5, count: 140 },
      stock_quantity: 250
    },
    {
      id: 606,
      title: "Kosher Salt",
      image: require("./KosherSalt.webp"),
      actual_price: 150.0,
      discount_price: 130.0,
      discount_percentage: 13.33,
      category: "Cooking Salts",
      description: "Garlic-flavored salt for added taste.",
      rating: { rate: 4, count: 120 },
      stock_quantity: 220
    },
    {
      id: 607,
      title: "Table Salt",
      image: require("./TableSalt.webp"),
      actual_price: 25.0,
      discount_price: 20.0,
      discount_percentage: 10.0,
      category: "Cooking Salts",
      description: "Regular table salt for daily cooking.",
      rating: { rate: 3, count: 180 },
      stock_quantity: 380
    },
    {
      id: 608,
      title: "Smoked Salt",
      image: require("./SmokedSalt.png"),
      actual_price: 125.0,
      discount_price: 110.0,
      discount_percentage: 12.0,
      category: "Cooking Salts",
      description: "Coarse kosher salt, ideal for seasoning meats and vegetables.",
      rating: { rate: 5, count: 140 },
      stock_quantity: 240
    },
    {
      id: 609,
      title: "Sea Salt Crystals",
      image: require("./SeaSaltCrystals.webp"),
      actual_price: 170.0,
      discount_price: 150.0,
      discount_percentage: 11.76,
      category: "Cooking Salts",
      description: "Smoked salt for unique flavor in dishes.",
      rating: { rate: 4, count: 130 },
      stock_quantity: 210
    }
  ]
},


 {
  id: 7,
  title: "Flours",
  image: require("./Flours.webp"),
  products: [
    {
      id: 701,
      title: "Wheat Flour (Godhuma Pindi)",
      image: require("./WheatFlour.png"),
      actual_price: 70.0,
      discount_price: 60.0,
      discount_percentage: 14.29,
      category: "Flours",
      description:
        "Whole wheat flour perfect for chapatis, rotis, and baking.",
      rating: { rate: 4.7, count: 200, stars: 5 },
      stock_quantity: 400,
    },
    {
      id: 702,
      title: "Maida (Refined Flour)",
      image: require("./MaidaRefinedFlour.webp"),
      actual_price: 65.0,
      discount_price: 55.0,
      discount_percentage: 15.38,
      category: "Flours",
      description:
        "Refined wheat flour used for bakery items, sweets, and snacks.",
      rating: { rate: 4.6, count: 180, stars: 4 },
      stock_quantity: 350,
    },
    {
      id: 703,
      title: "Ragi Flour (Ragi Pindi)",
      image: require("./RagiFlour.png"),
      actual_price: 95.0,
      discount_price: 80.0,
      discount_percentage: 15.79,
      category: "Flours",
      description:
        "Nutritious finger millet flour for rotis, dosa, and porridge.",
      rating: { rate: 4.8, count: 160, stars: 5 },
      stock_quantity: 300,
    },
    {
      id: 704,
      title: "Gram Flour (Besan)",
      image: require("./GramFlour.jpg"),
      actual_price: 80.0,
      discount_price: 70.0,
      discount_percentage: 12.5,
      category: "Flours",
      description:
        "Chickpea flour ideal for pakoras, sweets, and batters.",
      rating: { rate: 4.7, count: 150, stars: 4 },
      stock_quantity: 330,
    },
    {
      id: 705,
      title: "Rice Flour (Arisi Maavu)",
      image: require("./RiceFlour.jpeg"),
      actual_price: 75.0,
      discount_price: 60.0,
      discount_percentage: 20.0,
      category: "Flours",
      description:
        "Fine rice flour used for dosa, idiyappam, and gluten-free baking.",
      rating: { rate: 4.6, count: 140, stars: 4 },
      stock_quantity: 280,
    },
    {
      id: 706,
      title: "Oat Flour",
      image: require("./OatFlour.jpg"),
      actual_price: 140.0,
      discount_price: 120.0,
      discount_percentage: 14.29,
      category: "Flours",
      description:
        "Ground oats for healthy baking, porridge, and pancakes.",
      rating: { rate: 4.5, count: 130, stars: 3 },
      stock_quantity: 250,
    },
    {
      id: 707,
      title: "Multigrain Flour",
      image: require("./MultigrainFlour.webp"),
      actual_price: 160.0,
      discount_price: 140.0,
      discount_percentage: 12.5,
      category: "Flours",
      description:
        "Combination of wheat, ragi, millet, and soy flours for healthy rotis.",
      rating: { rate: 4.6, count: 120, stars: 5 },
      stock_quantity: 220,
    },
    {
      id: 708,
      title: "Sorghum Flour (Jowar Pindi)",
      image: require("./SorghumFlour.jpg"),
      actual_price: 105.0,
      discount_price: 90.0,
      discount_percentage: 14.29,
      category: "Flours",
      description:
        "Sorghum flour for traditional Indian breads and baking.",
      rating: { rate: 4.5, count: 110, stars: 4 },
      stock_quantity: 200,
    },
    {
      id: 709,
      title: "Millet Flour (Bajra Pindi)",
      image: require("./MilletFlour.jpg"),
      actual_price: 98.0,
      discount_price: 85.0,
      discount_percentage: 13.27,
      category: "Flours",
      description:
        "Pearl millet flour for healthy rotis and porridge.",
      rating: { rate: 4.6, count: 100, stars: 4 },
      stock_quantity: 180,
    },
    {
      id: 710,
      title: "Corn Flour (Maize Flour)",
      image: require("./CornFlour.webp"),
      actual_price: 90.0,
      discount_price: 75.0,
      discount_percentage: 16.67,
      category: "Flours",
      description:
        "Fine corn flour for baking, thickening sauces, and batters.",
      rating: { rate: 4.5, count: 90, stars: 3 },
      stock_quantity: 170,
    },
  ],
},


{
  id: 8,
  title: "Sugars",
  image: require("./Sugars.webp"),
  products: [
    {
      id: 801,
      title: "White Sugar",
      image: require("./WhiteSugar.webp"),
      actual_price: 60.0,
      discount_price: 50.0,
      discount_percentage: 16.67,
      category: "Sugars",
      description: "Refined white sugar for baking, beverages, and desserts.",
      rating: { rate: 5, count: 200 },
      stock_quantity: 400
    },
    {
      id: 802,
      title: "Brown Sugar",
      image: require("./BrownSugar.webp"),
      actual_price: 95.0,
      discount_price: 80.0,
      discount_percentage: 15.79,
      category: "Sugars",
      description: "Natural brown sugar with molasses for baking and cooking.",
      rating: { rate: 4, count: 180 },
      stock_quantity: 350
    },
    {
      id: 803,
      title: "Jaggery (Gur)",
      image: require("./JaggeryGur.jpg"),
      actual_price: 85.0,
      discount_price: 70.0,
      discount_percentage: 17.65,
      category: "Sugars",
      description: "Unrefined jaggery blocks for traditional Indian sweets and drinks.",
      rating: { rate: 5, count: 160 },
      stock_quantity: 300
    },
    {
      id: 804,
      title: "Icing Sugar",
      image: require("./IcingSugar.webp"),
      actual_price: 75.0,
      discount_price: 60.0,
      discount_percentage: 20.0,
      category: "Sugars",
      description: "Finely ground sugar for desserts, frostings, and baking.",
      rating: { rate: 3, count: 150 },
      stock_quantity: 280
    },
    {
      id: 805,
      title: "Coconut Sugar",
      image: require("./CoconutSugar.jpg"),
      actual_price: 140.0,
      discount_price: 120.0,
      discount_percentage: 14.29,
      category: "Sugars",
      description: "Natural sugar from coconut palm sap, low glycemic index.",
      rating: { rate: 4, count: 140 },
      stock_quantity: 250
    },
    {
      id: 806,
      title: "Raw Sugar",
      image: require("./RawSugar.webp"),
      actual_price: 105.0,
      discount_price: 90.0,
      discount_percentage: 14.29,
      category: "Sugars",
      description: "Unrefined raw sugar crystals for beverages and baking.",
      rating: { rate: 3, count: 130 },
      stock_quantity: 220
    },
    {
      id: 807,
      title: "Date Sugar",
      image: require("./DateSugar.jpg"),
      actual_price: 175.0,
      discount_price: 150.0,
      discount_percentage: 14.29,
      category: "Sugars",
      description: "Sweet natural sugar from dried dates, rich in minerals.",
      rating: { rate: 5, count: 110 },
      stock_quantity: 190
    },
    {
      id: 808,
      title: "Maple Sugar",
      image: require("./MapleSugar.webp"),
      actual_price: 280.0,
      discount_price: 250.0,
      discount_percentage: 10.71,
      category: "Sugars",
      description: "Sugar derived from maple sap, with distinct flavor for desserts.",
      rating: { rate: 4, count: 100 },
      stock_quantity: 170
    },
    {
      id: 809,
      title: "Panela / Rapadura",
      image: require("./PanelaRapadura.jpeg"),
      actual_price: 150.0,
      discount_price: 130.0,
      discount_percentage: 13.33,
      category: "Sugars",
      description: "Unrefined whole cane sugar blocks popular in Latin cuisines.",
      rating: { rate: 3, count: 95 },
      stock_quantity: 160
    },
    {
      id: 810,
      title: "Honey",
      image: require("./Honey.webp"),
      actual_price: 130.0,
      discount_price: 110.0,
      discount_percentage: 15.38,
      category: "Sugars",
      description: "Liquid sugar syrup for beverages, cocktails, and baking.",
      rating: { rate: 4, count: 85 },
      stock_quantity: 180
    }
  ]
},


  {
  id: 10,
  title: "Staples / Dry Goods",
  image: require('./staplesDryGoods.webp'),
  products: [
    {
      id: 1001,
      title: "Barley",
      image: require('./barley.webp'),
      actual_price: 120.0,
      discount_price: 100.0,
      discount_percentage: 16.67,
      category: "Staples / Dry Goods",
      description: "High-quality barley, perfect for soups, salads, and healthy breakfast porridges.",
      rating: { rate: 5, count: 300 },
      stock_quantity: 200
    },
    {
      id: 1002,
      title: "Oats",
      image: require('./oats.jpg'),
      actual_price: 150.0,
      discount_price: 130.0,
      discount_percentage: 13.33,
      category: "Staples / Dry Goods",
      description: "Nutritious rolled oats for a wholesome breakfast or baking recipes.",
      rating: { rate: 5, count: 450 },
      stock_quantity: 250
    },
    {
      id: 1003,
      title: "Quinoa",
      image: require('./quinoa.webp'),
      actual_price: 200.0,
      discount_price: 180.0,
      discount_percentage: 10.0,
      category: "Staples / Dry Goods",
      description: "Organic quinoa, a superfood grain rich in protein and fiber.",
      rating: { rate: 5, count: 220 },
      stock_quantity: 150
    },
    {
      id: 1004,
      title: "Bajra (Pearl Millet)",
      image: require('./bajra.jpg'),
      actual_price: 90.0,
      discount_price: 80.0,
      discount_percentage: 11.11,
      category: "Staples / Dry Goods",
      description: "Whole bajra grains, ideal for making healthy rotis and porridges.",
      rating: { rate: 4, count: 300 },
      stock_quantity: 180
    },
    {
      id: 1005,
      title: "Jowar (Sorghum)",
      image: require('./jowar.jpg'),
      actual_price: 95.0,
      discount_price: 85.0,
      discount_percentage: 10.53,
      category: "Staples / Dry Goods",
      description: "High-quality jowar, great for gluten-free baking and traditional Indian rotis.",
      rating: { rate: 4, count: 270 },
      stock_quantity: 160
    },
    {
      id: 1006,
      title: "Ragi (Finger Millet)",
      image: require('./ragi.jpg'),
      actual_price: 80.0,
      discount_price: 70.0,
      discount_percentage: 12.5,
      category: "Staples / Dry Goods",
      description: "Nutritious ragi grains, rich in calcium, perfect for porridges and healthy recipes.",
      rating: { rate: 4, count: 250 },
      stock_quantity: 140
    },
     {
      id: 1007,
      title: "Foxtail Millet (Kangni)",
      image: require('./foxtailMillet.jpg'),
      actual_price: 120.0,
      discount_price: 105.0,
      discount_percentage: 12.5,
      category: "Millets / Grains",
      description: "Golden foxtail millet, high in fiber, ideal for porridge, upma, and rotis.",
      rating: { rate: 5, count: 200 },
      stock_quantity: 130
    },
    {
      id: 1008,
      title: "Little Millet (Kutki / Samai)",
      image: require('./littleMillet.jpg'),
      actual_price: 110.0,
      discount_price: 95.0,
      discount_percentage: 13.64,
      category: "Millets / Grains",
      description: "Tiny little millet, perfect for weight management and gluten-free recipes.",
      rating: { rate: 4, count: 180 },
      stock_quantity: 120
    },
    {
      id: 1009,
      title: "Kodo Millet (Kodri / Varagu)",
      image: require('./kodoMillet.jpg'),
      actual_price: 115.0,
      discount_price: 100.0,
      discount_percentage: 13.04,
      category: "Millets / Grains",
      description: "Healthy kodo millet, ideal for khichdi, upma, and pancakes.",
      rating: { rate: 4, count: 160 },
      stock_quantity: 110
    },
    {
      id: 1010,
      title: "Barnyard Millet (Sanwa / Odalu)",
      image: require('./barnyardMillet.jpg'),
      actual_price: 125.0,
      discount_price: 110.0,
      discount_percentage: 12.0,
      category: "Millets / Grains",
      description: "Light and easily digestible barnyard millet, used in porridge and idli/dosa batter.",
      rating: { rate: 5, count: 150 },
      stock_quantity: 100
    }
  ]
}


]