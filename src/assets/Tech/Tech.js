export const Tech = [
{
  id: 1,
  title: 'Smartphones',
  image: require('./Smartphones.png'),
  products: [
    {
      id: 101,
      title: 'Apple iPhone 16 Pro (256GB)',
      image: require('./iPhone16Pro.webp'),
      actual_price: 172000,
      discount_price: 159000,
      discount_percentage: 8,
      category: 'Smartphones',
      description:
        'Featuring the powerful A18 Pro chip, a brighter ProMotion display, and an advanced triple-camera system for professional-grade photos and videos.',
      rating: {
        rate: 5,
        count: 2500,
      },
      stock_quantity: 850,
    },
    {
      id: 102,
      title: 'Samsung Galaxy S25 Ultra (256GB)',
      image: require('./GalaxyS25Ultra.jpg'),
      actual_price: 157000,
      discount_price: 142000,
      discount_percentage: 10,
      category: 'Smartphones',
      description:
        'The pinnacle of Android performance with a stunning Dynamic AMOLED display, integrated S Pen, and a groundbreaking 200MP camera system with AI enhancements.',
      rating: {
        rate: 4,
        count: 2200,
      },
      stock_quantity: 780,
    },
    {
      id: 103,
      title: 'Google Pixel 9 Pro (128GB)',
      image: require('./Pixel9Pro.webp'),
      actual_price: 111500,
      discount_price: 99500,
      discount_percentage: 11,
      category: 'Smartphones',
      description:
        'Experience the smartest Android with the new Tensor G4 chip, unparalleled computational photography, and a suite of exclusive AI features.',
      rating: {
        rate: 3,
        count: 1800,
      },
      stock_quantity: 650,
    },
    {
      id: 104,
      title: 'OnePlus 13 (12GB RAM, 256GB)',
      image: require('./OnePlus13.jpg'),
      actual_price: 82000,
      discount_price: 71000,
      discount_percentage: 13,
      category: 'Smartphones',
      description:
        'The "Flagship Killer" returns with the latest Snapdragon processor, a silky-smooth 144Hz display, and incredibly fast 150W SUPERVOOC charging.',
      rating: {
        rate: 5,
        count: 2800,
      },
      stock_quantity: 900,
    },
    {
      id: 105,
      title: 'Xiaomi 15 Pro (256GB)',
      image: require('./Xiaomi15Pro.jpg'),
      actual_price: 86000,
      discount_price: 75000,
      discount_percentage: 13,
      category: 'Smartphones',
      description:
        'Co-engineered with Leica, this phone offers a superior mobile photography experience, a vibrant display, and blazing-fast performance.',
      rating: {
        rate: 4,
        count: 1500,
      },
      stock_quantity: 550,
    },
    {
      id: 106,
      title: 'Nothing Phone (3) (256GB)',
      image: require('./NothingPhone3.png'),
      actual_price: 60000,
      discount_price: 51000,
      discount_percentage: 15,
      category: 'Smartphones',
      description:
        'A unique blend of design and technology, featuring the refined Glyph Interface, a clean Nothing OS, and solid all-round performance.',
      rating: {
        rate: 3,
        count: 1900,
      },
      stock_quantity: 700,
    },
    {
      id: 107,
      title: 'Samsung Galaxy Z Fold 7 (512GB)',
      image: require('./GalaxyZFold7.jpg'),
      actual_price: 202000,
      discount_price: 180000,
      discount_percentage: 11,
      category: 'Smartphones',
      description:
        'The future of mobile productivity unfolds with a thinner design, a brighter and more durable folding screen, and enhanced multitasking capabilities.',
      rating: {
        rate: 4,
        count: 1100,
      },
      stock_quantity: 450,
    },
    {
      id: 108,
      title: 'Asus ROG Phone 9 (512GB)',
      image: require('./AsusROGPhone9.webp'),
      actual_price: 102000,
      discount_price: 91000,
      discount_percentage: 11,
      category: 'Smartphones',
      description:
        'The ultimate gaming phone with an advanced cooling system, ultrasonic AirTriggers, a high refresh rate screen, and a massive battery.',
      rating: {
        rate: 5,
        count: 950,
      },
      stock_quantity: 380,
    },
  ],
},


{
  id: 2,
  title: 'Laptops',
  image: require('./Laptops.jpg'),
  products: [
    {
      id: 201,
      title: 'Apple MacBook Air M3 (13-inch)',
      image: require('./MacBookAirM3.jpg'),
      actual_price: 132000,
      discount_price: 118000,
      discount_percentage: 11,
      category: 'Laptops',
      description:
        'Incredibly thin and light, the MacBook Air is now supercharged by the M3 chip for phenomenal performance and up to 18 hours of battery life.',
      rating: {
        rate: 5,
        count: 1800,
      },
      stock_quantity: 600,
    },
    {
      id: 202,
      title: 'Dell XPS 15 (2025)',
      image: require('./DellXPS15.webp'),
      actual_price: 227000,
      discount_price: 204000,
      discount_percentage: 10,
      category: 'Laptops',
      description:
        'A stunning 4K OLED display, powerful Intel Core Ultra processor, and NVIDIA RTX graphics in a sleek, premium chassis. Perfect for creators.',
      rating: {
        rate: 4,
        count: 950,
      },
      stock_quantity: 350,
    },
    {
      id: 203,
      title: 'HP Spectre x360 14',
      image: require('./HPSpectreX360.webp'),
      actual_price: 182000,
      discount_price: 162000,
      discount_percentage: 11,
      category: 'Laptops',
      description:
        'A versatile 2-in-1 laptop with a gorgeous OLED touch display, AI-powered performance, and a sleek, gem-cut design.',
      rating: {
        rate: 3,
        count: 880,
      },
      stock_quantity: 400,
    },
    {
      id: 204,
      title: 'Lenovo Yoga 9i (14-inch)',
      image: require('./LenovoYoga9i.jpg'),
      actual_price: 202000,
      discount_price: 178000,
      discount_percentage: 12,
      category: 'Laptops',
      description:
        'Experience premium portability with a 360° hinge, a beautiful OLED display, and a rotating soundbar for immersive audio.',
      rating: {
        rate: 4,
        count: 720,
      },
      stock_quantity: 380,
    },
    {
      id: 205,
      title: 'Asus Zenbook Duo (2025)',
      image: require('./AsusZenbookDuo.png'),
      actual_price: 218000,
      discount_price: 192000,
      discount_percentage: 12,
      category: 'Laptops',
      description:
        'Boost your productivity with two full-size OLED touchscreens in an ultra-portable form factor, powered by the latest Intel processors.',
      rating: {
        rate: 5,
        count: 650,
      },
      stock_quantity: 300,
    },
    {
      id: 206,
      title: 'Microsoft Surface Laptop 6',
      image: require('./SurfaceLaptop6.webp'),
      actual_price: 152000,
      discount_price: 133000,
      discount_percentage: 13,
      category: 'Laptops',
      description:
        'Sleek, powerful, and built for the modern workplace with an exceptional keyboard, PixelSense touchscreen, and seamless integration with Windows.',
      rating: {
        rate: 3,
        count: 780,
      },
      stock_quantity: 450,
    },
    {
      id: 207,
      title: 'Samsung Galaxy Book5 Pro',
      image: require('./GalaxyBook5Pro.jpg'),
      actual_price: 168000,
      discount_price: 147000,
      discount_percentage: 12,
      category: 'Laptops',
      description:
        'Ultra-thin and light with a breathtaking Dynamic AMOLED 2X display. Seamlessly connects with your Samsung Galaxy ecosystem.',
      rating: {
        rate: 4,
        count: 690,
      },
      stock_quantity: 320,
    },
    {
      id: 208,
      title: 'Razer Blade 16',
      image: require('./RazerBlade16.jpg'),
      actual_price: 342000,
      discount_price: 302000,
      discount_percentage: 12,
      category: 'Laptops',
      description:
        'The ultimate gaming laptop with a stunning Mini-LED display, top-tier NVIDIA GeForce RTX graphics, and a premium CNC aluminum chassis.',
      rating: {
        rate: 5,
        count: 550,
      },
      stock_quantity: 250,
    },
  ],
},

 {
  id: 3,
  title: 'Wearable Tech',
  image: require('./WearableTech.jpg'),
  products: [
    {
      id: 301,
      title: 'Apple Watch Series 11',
      image: require('./AppleWatchSeries11.png'),
      actual_price: 54900,
      discount_price: 49900,
      discount_percentage: 9,
      category: 'Wearable Tech',
      description:
        'The essential companion for a healthy life gets even better with advanced health sensors, a brighter always-on display, and new safety features.',
      rating: { rate: 5, count: 3200 },
      stock_quantity: 1100
    },
    {
      id: 302,
      title: 'Samsung Galaxy Watch 7 Classic',
      image: require('./SamsungGalaxyWatch7Classic.jpg'),
      actual_price: 49999,
      discount_price: 42999,
      discount_percentage: 14,
      category: 'Wearable Tech',
      description:
        'A timeless design meets modern tech. Features a rotating bezel for intuitive navigation, advanced sleep tracking, and body composition analysis.',
      rating: { rate: 4, count: 2800 },
      stock_quantity: 950
    },
    {
      id: 303,
      title: 'Google Pixel Watch 3',
      image: require('./GooglePixelWatch3.jpg'),
      actual_price: 39999,
      discount_price: 34999,
      discount_percentage: 12,
      category: 'Wearable Tech',
      description:
        'The best of Google and Fitbit combined. A beautiful circular design with helpful Google services and comprehensive health and fitness tracking.',
      rating: { rate: 3, count: 1500 },
      stock_quantity: 700
    },
    {
      id: 304,
      title: 'Garmin Fenix 8',
      image: require('./GarminFenix8.webp'),
      actual_price: 99990,
      discount_price: 89990,
      discount_percentage: 10,
      category: 'Wearable Tech',
      description:
        'The ultimate multisport GPS watch for athletes and adventurers, featuring solar charging, advanced training metrics, and built-in topographic maps.',
      rating: { rate: 5, count: 950 },
      stock_quantity: 350
    },
    {
      id: 305,
      title: 'Fitbit Charge 7',
      image: require('./FitbitCharge7.jpg'),
      actual_price: 19999,
      discount_price: 16999,
      discount_percentage: 15,
      category: 'Wearable Tech',
      description:
        'A premium fitness tracker with ECG, EDA scan for stress management, and built-in GPS. Helps you understand your body and reach your goals.',
      rating: { rate: 4, count: 2100 },
      stock_quantity: 1200
    },
    {
      id: 306,
      title: 'Noise ColorFit Pro 6',
      image: require('./NoiseColorFitPro6.jpg'),
      actual_price: 5999,
      discount_price: 4999,
      discount_percentage: 17,
      category: 'Wearable Tech',
      description:
        'India’s leading smartwatch brand offers a large, bright display, Bluetooth calling, and a comprehensive suite of health monitoring features.',
      rating: { rate: 3, count: 5500 },
      stock_quantity: 2500
    },
    {
      id: 307,
      title: 'Oura Ring Gen 4',
      image: require('./OuraRingGen4.jpg'),
      actual_price: 45000,
      discount_price: 38000,
      discount_percentage: 16,
      category: 'Wearable Tech',
      description:
        'A smart ring that tracks your sleep, activity, and recovery with unparalleled accuracy, delivering personalized insights to your phone.',
      rating: { rate: 5, count: 850 },
      stock_quantity: 300
    },
    {
      id: 308,
      title: 'Boat Xtend Pro 2',
      image: require('./BoatXtendPro2.jpg'),
      actual_price: 4199,
      discount_price: 3499,
      discount_percentage: 17,
      category: 'Wearable Tech',
      description:
        'A stylish and affordable smartwatch with a premium metallic finish, AMOLED display, and fast charging.',
      rating: { rate: 4, count: 6200 },
      stock_quantity: 3000
    }
  ]
},

 {
  id: 4,
  title: 'Gaming',
  image: require('./gaming.jpg'),
  products: [
    {
      id: 401,
      title: 'Sony PlayStation 5 Pro',
      image: require('./SonyPlayStation5Pro.webp'),
      actual_price: 62990,
      discount_price: 54990,
      discount_percentage: 13,
      category: 'Gaming',
      description:
        'Experience lightning-fast loading with an ultra-high-speed SSD, deeper immersion with support for haptic feedback, adaptive triggers and 3D Audio.',
      rating: { rate: 5, count: 4500 },
      stock_quantity: 1500
    },
    {
      id: 402,
      title: 'Xbox Series X',
      image: require('./XboxSeriesX.webp'),
      actual_price: 57990,
      discount_price: 49990,
      discount_percentage: 14,
      category: 'Gaming',
      description:
        'The most powerful Xbox ever. Explore rich new worlds with 12 teraflops of raw graphic processing power, DirectX ray tracing, and a custom SSD.',
      rating: { rate: 4, count: 3800 },
      stock_quantity: 1200
    },
    {
      id: 403,
      title: 'Nintendo Switch 2',
      image: require('./NintendoSwitch2.jpeg'),
      actual_price: 45999,
      discount_price: 39999,
      discount_percentage: 13,
      category: 'Gaming',
      description:
        'The next generation of hybrid gaming. Play at home on the big screen or take your games on the go with enhanced graphics and performance.',
      rating: { rate: 3, count: 3100 },
      stock_quantity: 1000
    },
    {
      id: 404,
      title: 'ASUS ROG Ally 2',
      image: require('./ASUSROGAlly2.webp'),
      actual_price: 89990,
      discount_price: 79990,
      discount_percentage: 11,
      category: 'Gaming',
      description:
        'A powerful Windows gaming handheld with a high-refresh-rate screen, ergonomic design, and the latest AMD Ryzen processor for PC gaming on the move.',
      rating: { rate: 5, count: 980 },
      stock_quantity: 550
    },
    {
      id: 405,
      title: 'NVIDIA GeForce RTX 5080',
      image: require('./NVIDIAGeForceRTX5080.png'),
      actual_price: 145000,
      discount_price: 125000,
      discount_percentage: 14,
      category: 'Gaming',
      description:
        'The ultimate graphics card for 4K gaming and content creation, featuring next-gen architecture, DLSS 4 with Frame Generation, and enhanced ray tracing.',
      rating: { rate: 4, count: 1200 },
      stock_quantity: 400
    },
    {
      id: 406,
      title: 'Logitech G PRO X Superlight 2 Mouse',
      image: require('./LogitechGPROXSuperlight2Mouse.jpg'),
      actual_price: 16995,
      discount_price: 14995,
      discount_percentage: 12,
      category: 'Gaming',
      description:
        'An incredibly lightweight wireless gaming mouse designed with pros for maximum performance, featuring LIGHTSPEED wireless and the HERO sensor.',
      rating: { rate: 3, count: 1850 },
      stock_quantity: 900
    },
    {
      id: 407,
      title: 'SteelSeries Arctis Nova Pro Wireless Headset',
      image: require('./SteelSeriesArctisNovaProWirelessHeadset.jpg'),
      actual_price: 40000,
      discount_price: 34999,
      discount_percentage: 13,
      category: 'Gaming',
      description:
        'Hi-fi audio for gaming with active noise cancellation, a hot-swappable battery system, and simultaneous connection to two devices.',
      rating: { rate: 5, count: 1150 },
      stock_quantity: 650
    },
    {
      id: 408,
      title: 'Meta Quest 4',
      image: require('./MetaQuest4.webp'),
      actual_price: 59999,
      discount_price: 52999,
      discount_percentage: 12,
      category: 'Gaming',
      description:
        'Dive into immersive virtual and mixed reality experiences with this standalone headset, featuring higher resolution displays and a more powerful processor.',
      rating: { rate: 4, count: 1300 },
      stock_quantity: 750
    }
  ]
},

 
{
  id: 5,
  title: 'Speakers',
  image: require('./Speakers.webp'),
  products: [
    {
      id: 501,
      title: 'Bose SoundLink Revolve+ II',
      image: require('./BoseSoundLinkRevolvePlusII.jpg'),
      actual_price: 33900,
      discount_price: 29400,
      discount_percentage: 13,
      category: 'Speakers',
      description:
        'A portable Bluetooth speaker engineered to deliver deep, loud, and immersive 360° sound. Water-resistant and durable.',
      rating: { rate: 5, count: 1900 },
      stock_quantity: 700
    },
    {
      id: 502,
      title: 'JBL Flip 7',
      image: require('./JBLFlip7.jpg'),
      actual_price: 13999,
      discount_price: 11999,
      discount_percentage: 14,
      category: 'Speakers',
      description:
        'The next evolution of the iconic portable speaker, offering even more powerful sound, improved battery life, and a rugged waterproof design.',
      rating: { rate: 4, count: 3500 },
      stock_quantity: 1800
    },
    {
      id: 503,
      title: 'Sony SRS-XG500 X-Series',
      image: require('./SonySRSXG500XSeries.jpg'),
      actual_price: 38990,
      discount_price: 32990,
      discount_percentage: 15,
      category: 'Speakers',
      description:
        'A powerful and portable party speaker with deep, punchy bass, ambient lighting, and a long-lasting battery. Water-resistant design.',
      rating: { rate: 3, count: 1200 },
      stock_quantity: 550
    },
    {
      id: 504,
      title: 'Marshall Stanmore III',
      image: require('./MarshallStanmoreIII.jpg'),
      actual_price: 47999,
      discount_price: 41999,
      discount_percentage: 13,
      category: 'Speakers',
      description:
        'This legendary speaker has an even wider soundstage than its predecessor, delivering expansive Marshall signature sound for your home.',
      rating: { rate: 5, count: 950 },
      stock_quantity: 350
    },
    {
      id: 505,
      title: 'Sonos Era 100',
      image: require('./SonosEra100.webp'),
      actual_price: 34999,
      discount_price: 29999,
      discount_percentage: 14,
      category: 'Speakers',
      description:
        'A compact smart speaker with next-gen acoustics and new connectivity options. Enjoy room-filling stereo sound and easy control.',
      rating: { rate: 4, count: 880 },
      stock_quantity: 480
    },
    {
      id: 506,
      title: 'Portronics SoundDrum',
      image: require('./PortronicsSoundDrum.jpg'),
      actual_price: 2499,
      discount_price: 1999,
      discount_percentage: 20,
      category: 'Speakers',
      description:
        'A powerful portable Bluetooth speaker with a water-resistant body, FM radio, and multiple connectivity options.',
      rating: { rate: 3, count: 8500 },
      stock_quantity: 4000
    },
    {
      id: 507,
      title: 'Boat Stone 1500',
      image: require('./BoatStone.webp'),
      actual_price: 5999,
      discount_price: 4999,
      discount_percentage: 17,
      category: 'Speakers',
      description:
        'Unleash the power of 40W boAt Signature Sound with this rugged, waterproof portable speaker. Perfect for outdoor adventures.',
      rating: { rate: 4, count: 7200 },
      stock_quantity: 3500
    },
    {
      id: 508,
      title: 'Amazon Echo Studio',
      image: require('./AmazonEchoStudio.jpg'),
      actual_price: 25999,
      discount_price: 22999,
      discount_percentage: 12,
      category: 'Speakers',
      description:
        'Our best-sounding smart speaker yet, with immersive 3D audio, Dolby Atmos, and Alexa. Automatically adapts to any room.',
      rating: { rate: 5, count: 4100 },
      stock_quantity: 1000
    }
  ]
},

 
 {
  id: 6,
  title: "Buds",
  image: require("./buds.webp"),
  products: [
    {
      id: 601,
      title: "Apple AirPods Pro (3rd Generation)",
      image: require("./AppleAirPodsPro3rdGen.jpg"),
      actual_price: 31900,
      discount_price: 26900,
      discount_percentage: 16,
      category: "Buds",
      description:
        "Experience next-level audio with more effective Active Noise Cancellation, Adaptive Audio, and Personalized Spatial Audio.",
      rating: { rate: 5, count: 4500 },
      stock_quantity: 1500,
    },
    {
      id: 602,
      title: "Sony WF-1000XM6",
      image: require("./SonyWF1000XM6.webp"),
      actual_price: 28990,
      discount_price: 24990,
      discount_percentage: 14,
      category: "Buds",
      description:
        "The new benchmark for noise cancelling earbuds. Unmatched sound quality, industry-leading ANC, and a comfortable, secure fit.",
      rating: { rate: 5, count: 3200 },
      stock_quantity: 1100,
    },
    {
      id: 603,
      title: "Samsung Galaxy Buds 3 Pro",
      image: require("./SamsungGalaxyBuds3Pro.jpg"),
      actual_price: 20999,
      discount_price: 17999,
      discount_percentage: 14,
      category: "Buds",
      description:
        "Immersive 24-bit Hi-Fi audio, intelligent ANC, and seamless connectivity with your Galaxy devices. Crystal clear calls with 3 microphones.",
      rating: { rate: 4, count: 3800 },
      stock_quantity: 1300,
    },
    {
      id: 604,
      title: "Bose QuietComfort Ultra Earbuds",
      image: require("./BoseQuietComfortUltraEarbuds.png"),
      actual_price: 29900,
      discount_price: 25900,
      discount_percentage: 13,
      category: "Buds",
      description:
        "World-class noise cancellation and groundbreaking immersive audio. These earbuds provide a listening experience that's all you.",
      rating: { rate: 5, count: 2100 },
      stock_quantity: 750,
    },
    {
      id: 605,
      title: "Nothing Ear (3)",
      image: require("./NothingEar3.webp"),
      actual_price: 11999,
      discount_price: 9999,
      discount_percentage: 17,
      category: "Buds",
      description:
        "Iconic transparent design with studio-quality sound, advanced noise cancellation, and a personalized listening experience.",
      rating: { rate: 4, count: 2900 },
      stock_quantity: 1000,
    },
    {
      id: 606,
      title: "Sennheiser Momentum True Wireless 4",
      image: require("./SennheiserMomentumTrueWireless4.jpg"),
      actual_price: 26990,
      discount_price: 22990,
      discount_percentage: 15,
      category: "Buds",
      description:
        "Unrivaled signature sound with superior active noise cancellation and future-proof technologies for the ultimate wireless audio.",
      rating: { rate: 5, count: 1500 },
      stock_quantity: 600,
    },
    {
      id: 607,
      title: "Boat Airdopes 141",
      image: require("./BoatAirdopes141ANC.jpg"),
      actual_price: 1899,
      discount_price: 1499,
      discount_percentage: 21,
      category: "Buds",
      description:
        "Enjoy nonstop playback with up to 42 hours of battery life, Beast Mode for low latency gaming, and ENx Tech for clear calls.",
      rating: { rate: 4, count: 15000 },
      stock_quantity: 6000,
    },
    {
      id: 608,
      title: "Noise Buds VS104",
      image: require("./NoiseBudsVS104.jpg"),
      actual_price: 1599,
      discount_price: 1299,
      discount_percentage: 19,
      category: "Buds",
      description:
        "Features a total playtime of 45 hours, Instacharge technology, and 13mm drivers for deep bass. A great value-for-money option.",
      rating: { rate: 3, count: 12500 },
      stock_quantity: 5500,
    },
  ],
},

 
{
  id: 7,
  title: "Cameras",
  image: require("./CanonEOS5DMarkIV.jpg"),
  products: [
    {
      id: 701,
      title: "Sony Alpha a7 V",
      image: require("./SonyAlphaA7V.jpg"),
      actual_price: 399990,
      discount_price: 349990,
      discount_percentage: 13,
      category: "Cameras",
      description:
        "The next generation of hybrid cameras with a high-resolution full-frame sensor, advanced AI-powered autofocus, and 8K video recording.",
      rating: { rate: 5, count: 980 },
      stock_quantity: 300,
    },
    {
      id: 702,
      title: "Canon EOS R5 Mark II",
      image: require("./CanonEOSR5MarkII.png"),
      actual_price: 459995,
      discount_price: 399995,
      discount_percentage: 13,
      category: "Cameras",
      description:
        "A professional powerhouse mirrorless camera featuring a stacked CMOS sensor, next-gen Dual Pixel AF, and enhanced 8K RAW video capabilities.",
      rating: { rate: 5, count: 850 },
      stock_quantity: 250,
    },
    {
      id: 703,
      title: "Nikon Z8",
      image: require("./NikonZ8.jpg"),
      actual_price: 378999,
      discount_price: 328999,
      discount_percentage: 13,
      category: "Cameras",
      description:
        "A compact and powerful hybrid camera that inherits the flagship Z9's technology, offering incredible speed, resolution, and video performance.",
      rating: { rate: 4, count: 750 },
      stock_quantity: 320,
    },
    {
      id: 704,
      title: "Fujifilm X-T6",
      image: require("./FujifilmXT6.jpeg"),
      actual_price: 215000,
      discount_price: 189990,
      discount_percentage: 12,
      category: "Cameras",
      description:
        "The perfect blend of classic design and modern technology, featuring a new X-Trans sensor, 7-stop IBIS, and renowned Fujifilm film simulations.",
      rating: { rate: 4, count: 1100 },
      stock_quantity: 500,
    },
    {
      id: 705,
      title: "GoPro HERO13 Black",
      image: require("./GoProHERO13Black.jpg"),
      actual_price: 57999,
      discount_price: 49500,
      discount_percentage: 15,
      category: "Cameras",
      description:
        "The most powerful GoPro yet, with improved HyperSmooth stabilization, longer battery life, and higher resolution video for capturing all your adventures.",
      rating: { rate: 5, count: 2200 },
      stock_quantity: 1100,
    },
    {
      id: 706,
      title: "DJI Pocket 4",
      image: require("./DJIPocket4.jpg"),
      actual_price: 52990,
      discount_price: 45990,
      discount_percentage: 13,
      category: "Cameras",
      description:
        "A pocket-sized powerhouse with a 3-axis gimbal, a larger sensor for better low-light performance, and intuitive controls for smooth, cinematic footage.",
      rating: { rate: 4, count: 1800 },
      stock_quantity: 900,
    },
    {
      id: 707,
      title: "Sony ZV-E10 II",
      image: require("./SonyZVE10II.webp"),
      actual_price: 92990,
      discount_price: 79990,
      discount_percentage: 14,
      category: "Cameras",
      description:
        "The perfect interchangeable-lens camera for vloggers, featuring AI-powered autofocus, a vari-angle screen, and product showcase modes.",
      rating: { rate: 5, count: 1400 },
      stock_quantity: 650,
    },
  ],
},


{
  id: 8,
  title: "Drones",
  image: require("./DJIMavic4Pro.jpg"),
  products: [
    {
      id: 801,
      title: "DJI Mavic 4 Pro",
      image: require("./DJIMavic4.jpg"),
      actual_price: 279990,
      discount_price: 249990,
      discount_percentage: 11,
      category: "Drones",
      description:
        "The flagship consumer drone with a triple-camera system, including a Hasselblad main camera, omnidirectional obstacle sensing, and extended flight time.",
      rating: { rate: 5, count: 850 },
      stock_quantity: 300,
    },
    {
      id: 802,
      title: "DJI Air 3S",
      image: require("./DJIAir3S.png"),
      actual_price: 154990,
      discount_price: 134990,
      discount_percentage: 13,
      category: "Drones",
      description:
        "The ideal balance of portability and power, featuring a 1-inch CMOS sensor, 5.4K video, and advanced safety features for stunning aerial content.",
      rating: { rate: 5, count: 1100 },
      stock_quantity: 450,
    },
    {
      id: 803,
      title: "DJI Mini 5 Pro",
      image: require("./DJIMini5Pro.webp"),
      actual_price: 114990,
      discount_price: 99990,
      discount_percentage: 13,
      category: "Drones",
      description:
        "An ultra-light, sub-249g drone packed with pro-level features like 4K/60fps video, vertical shooting, and advanced obstacle avoidance.",
      rating: { rate: 4, count: 1500 },
      stock_quantity: 600,
    },
    {
      id: 804,
      title: "Autel Robotics EVO II Pro V4",
      image: require("./AutelEVOIIV4.jpeg"),
      actual_price: 240000,
      discount_price: 210000,
      discount_percentage: 13,
      category: "Drones",
      description:
        "A professional drone with a 1-inch sensor capable of 6K video, a 40-minute flight time, and a rugged design for demanding missions.",
      rating: { rate: 4, count: 550 },
      stock_quantity: 250,
    },
    {
      id: 805,
      title: "DJI Avata 2",
      image: require("./DJIAvata2.png"),
      actual_price: 125990,
      discount_price: 105990,
      discount_percentage: 16,
      category: "Drones",
      description:
        "Experience the thrill of immersive FPV flight with this intuitive and safe drone. Capture super-wide 4K video with enhanced stabilization.",
      rating: { rate: 5, count: 780 },
      stock_quantity: 400,
    },
    {
      id: 806,
      title: "Ryze Tello Drone",
      image: require("./RyzeTelloDrone.webp"),
      actual_price: 9999,
      discount_price: 8499,
      discount_percentage: 15,
      category: "Drones",
      description:
        "A fun and easy-to-fly mini drone powered by DJI technology. Perfect for beginners to learn the basics of flight and aerial photography.",
      rating: { rate: 4, count: 2500 },
      stock_quantity: 1100,
    },
  ],
},

 
 {
  id: 9,
  title: "Smart TV",
  image: require("./tv.webp"),
  products: [
    {
      id: 901,
      title: "Samsung 55-inch 4K UHD Smart TV",
      image: require("./Samsung55UHD.webp"),
      actual_price: 62999,
      discount_price: 55999,
      discount_percentage: 11,
      category: "Smart TV",
      description:
        "Crystal-clear 4K Ultra HD with HDR10+, slim design, and built-in Alexa/Google Assistant support.",
      rating: { rate: 5, count: 1800 },
      stock_quantity: 700,
    },
    {
      id: 902,
      title: "LG 65-inch OLED Smart TV",
      image: require("./LGOLED65.webp"),
      actual_price: 199999,
      discount_price: 174999,
      discount_percentage: 13,
      category: "Smart TV",
      description:
        "Experience true blacks and infinite contrast with OLED technology, Dolby Vision IQ, and Dolby Atmos.",
      rating: { rate: 5, count: 950 },
      stock_quantity: 350,
    },
    {
      id: 903,
      title: "Sony Bravia 50-inch 4K Android TV",
      image: require("./SonyBravia50.png"),
      actual_price: 74999,
      discount_price: 67999,
      discount_percentage: 9,
      category: "Smart TV",
      description:
        "Sony Bravia with 4K HDR Processor X1, Motionflow XR, and Google TV built-in.",
      rating: { rate: 5, count: 1200 },
      stock_quantity: 480,
    },
    {
      id: 904,
      title: "Xiaomi 43-inch Mi TV 5X",
      image: require("./XiaomiMiTV43.webp"),
      actual_price: 34999,
      discount_price: 29999,
      discount_percentage: 14,
      category: "Smart TV",
      description:
        "Bezel-less 4K display with Dolby Vision, PatchWall with IMDb integration, and 30W stereo speakers.",
      rating: { rate: 4, count: 2400 },
      stock_quantity: 1100,
    },
    {
      id: 905,
      title: "OnePlus 55-inch Q1 Series QLED TV",
      image: require("./OnePlusQ1QLED.webp"),
      actual_price: 70999,
      discount_price: 62999,
      discount_percentage: 11,
      category: "Smart TV",
      description:
        "Premium QLED panel, Dolby Atmos soundbar, OxygenPlay content, and seamless OnePlus ecosystem integration.",
      rating: { rate: 5, count: 1600 },
      stock_quantity: 600,
    },
    {
      id: 906,
      title: "TCL 65-inch 4K QLED Google TV",
      image: require("./TCL65QLED.jpg"),
      actual_price: 95000,
      discount_price: 79999,
      discount_percentage: 16,
      category: "Smart TV",
      description:
        "QLED panel with 100% color volume, Dolby Vision & Atmos, and hands-free Google Assistant.",
      rating: { rate: 4, count: 870 },
      stock_quantity: 400,
    },
    {
      id: 907,
      title: "Amazon Fire TV 43-inch 4K",
      image: require("./AmazonFireTV43.jpg"),
      actual_price: 33999,
      discount_price: 28999,
      discount_percentage: 15,
      category: "Smart TV",
      description:
        "4K Ultra HD display with Alexa voice remote, Prime Video, Netflix, Disney+, and Fire TV OS.",
      rating: { rate: 4, count: 3100 },
      stock_quantity: 1500,
    },
    {
      id: 908,
      title: "Hisense 58-inch 4K UHD Smart TV",
      image: require("./Hisense58UHD.webp"),
      actual_price: 46999,
      discount_price: 39999,
      discount_percentage: 15,
      category: "Smart TV",
      description:
        "Dolby Vision HDR, DTS Virtual:X, and Android TV 11 with Chromecast built-in.",
      rating: { rate: 4, count: 950 },
      stock_quantity: 550,
    },
    {
      id: 909,
      title: "Realme 32-inch HD Ready Smart TV",
      image: require("./Realme32HD.webp"),
      actual_price: 19999,
      discount_price: 15999,
      discount_percentage: 20,
      category: "Smart TV",
      description:
        "Compact budget-friendly TV with bezel-less design, Android TV, and 24W Quad Stereo Speakers.",
      rating: { rate: 4, count: 2100 },
      stock_quantity: 900,
    },
    {
      id: 910,
      title: "Philips 58-inch 4K Ambilight TV",
      image: require("./Philips58Ambilight.jpg"),
      actual_price: 64999,
      discount_price: 54999,
      discount_percentage: 15,
      category: "Smart TV",
      description:
        "Unique Ambilight technology that projects colors on walls, 4K HDR10+, and Dolby Atmos audio.",
      rating: { rate: 5, count: 640 },
      stock_quantity: 380,
    },
  ],
}

]