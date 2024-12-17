const baseUrl = 'https://kids-videos.s3.eu-west-1.amazonaws.com';

export const Categories = {
  GENERAL: {
    id: "general",
    name: {
      ar: 'عام',
      en: 'General',
      fr: 'Général',
      id: 'Umum',
      th: 'ทั่วไป',
      es: 'General',
      pl: 'Ogólne', // Polish
      ro: 'General', // Romanian
      cz: 'Obecné', // Czech
      ni: 'General' // Nigerian
    },
    image: `${baseUrl}/images/categories/General.webp`,
    href: '/videos-list/general',
  },
  EDUCATIONAL: {
    id: "educational",
    name: {
      ar: 'تعليمي',
      en: 'Educational',
      fr: 'Éducatif',
      id: 'Pendidikan',
      th: 'การศึกษา',
      es: 'Educativo',
      pl: 'Edukacyjne', // Polish
      ro: 'Educațional', // Romanian
      cz: 'Vzdělávací', // Czech
      ni: 'Educational' // Nigerian
    },
    image: `${baseUrl}/images/categories/Educational.webp`,
    href: '/videos-list/educational',
  },
  SONGS: {
    id: "songs",
    name: {
      ar: 'أغاني',
      en: 'Songs',
      fr: 'Chansons',
      id: 'Lagu',
      th: 'เพลง',
      es: 'Canciones',
      pl: 'Piosenki', // Polish
      ro: 'Cântece', // Romanian
      cz: 'Písně', // Czech
      ni: 'Songs' // Nigerian
    },
    image: `${baseUrl}/images/categories/Songs.webp`,
    href: '/videos-list/songs',
  },
  TRENDING: {
    id: "trending",
    name: {
      ar: 'الشائع',
      en: 'Trending',
      fr: 'Tendances',
      id: 'Sedang Tren',
      th: 'กำลังเป็นที่นิยม',
      es: 'Tendencias',
      pl: 'Trendy', // Polish
      ro: 'Tendințe', // Romanian
      cz: 'Trendy', // Czech
      ni: 'Trending' // Nigerian
    },
    image: `${baseUrl}/images/categories/Trending.webp`,
    href: '/videos-list/trending',
  },
  MATH: {
    id: "math",
    name: {
      ar: 'رياضيات',
      en: 'Math',
      fr: 'Mathématiques',
      id: 'Matematika',
      th: 'คณิตศาสตร์',
      es: 'Matemáticas',
      pl: 'Matematyka', // Polish
      ro: 'Matematică', // Romanian
      cz: 'Matematika', // Czech
      ni: 'Math' // Nigerian
    },
    image: `${baseUrl}/images/categories/Math.webp`,
    href: '/videos-list/math',
  },
  HISTORY: {
    id: "history",
    name: {
      ar: 'تاريخ',
      en: 'History',
      fr: 'Histoire',
      id: 'Sejarah',
      th: 'ประวัติศาสตร์',
      es: 'Historia',
      pl: 'Historia', // Polish
      ro: 'Istorie', // Romanian
      cz: 'Historie', // Czech
      ni: 'History' // Nigerian
    },
    image: `${baseUrl}/images/categories/History.webp`,
    href: '/videos-list/history',
  },
  SCIENCE: {
    id: "science",
    name: {
      ar: 'علوم',
      en: 'Science',
      fr: 'Science',
      id: 'Ilmu Pengetahuan',
      th: 'วิทยาศาสตร์',
      es: 'Ciencia',
      pl: 'Nauka', // Polish
      ro: 'Știință', // Romanian
      cz: 'Věda', // Czech
      ni: 'Science' // Nigerian
    },
    image: `${baseUrl}/images/categories/Science.webp`,
    href: '/videos-list/science',
  },
  ART: {
    id: "art",
    name: {
      ar: 'فن',
      en: 'Art',
      fr: 'Art',
      id: 'Seni',
      th: 'ศิลปะ',
      es: 'Arte',
      pl: 'Sztuka', // Polish
      ro: 'Artă', // Romanian
      cz: 'Umění', // Czech
      ni: 'Art' // Nigerian
    },
    image: `${baseUrl}/images/categories/Art.webp`,
    href: '/videos-list/art',
  },
  AGE3_5: {
    id: "age3_5",
    name: {
      ar: 'أعمار 3 إلى 5',
      en: 'Ages 3 to 5',
      fr: 'Âges 3 à 5',
      id: 'Usia 3 hingga 5',
      th: 'อายุ 3 ถึง 5 ปี',
      es: 'Edades 3 a 5',
      pl: 'Wiek 3 do 5', // Polish
      ro: 'Vârstele 3-5', // Romanian
      cz: 'Věk 3 až 5', // Czech
      ni: 'Ages 3 to 5' // Nigerian
    },
    image: `${baseUrl}/images/categories/Age3_5.webp`,
    href: '/videos-list/age3_5',
  },
  AGE5_6: {
    id: "age5_8",
    name: {
      ar: 'أعمار 5 إلى 8',
      en: 'Ages 5 to 8',
      fr: 'Âges 5 à 8',
      id: 'Usia 5 hingga 8',
      th: 'อายุ 5 ถึง 8 ปี',
      es: 'Edades 5 a 8',
      pl: 'Wiek 5 do 8', // Polish
      ro: 'Vârstele 5-8', // Romanian
      cz: 'Věk 5 až 8', // Czech
      ni: 'Ages 5 to 8' // Nigerian
    },
    image: `${baseUrl}/images/categories/Age5_6.webp`,
    href: '/videos-list/age5_8',
  },
  AGE8_10: {
    id: "age8_10",
    name: {
      ar: 'أعمار 8 إلى 10',
      en: 'Ages 8 to 10',
      fr: 'Âges 8 à 10',
      id: 'Usia 8 hingga 10',
      th: 'อายุ 8 ถึง 10 ปี',
      es: 'Edades 8 a 10',
      pl: 'Wiek 8 do 10', // Polish
      ro: 'Vârstele 8-10', // Romanian
      cz: 'Věk 8 až 10', // Czech
      ni: 'Ages 8 to 10' // Nigerian
    },
    image: `${baseUrl}/images/categories/Age5_6.webp`,
    href: '/videos-list/age8_10',
  },
};


export const videos = [
  {
    title: {
      en: '7 Wonders of the World',
      ar: '7 عجائب من العالم',
      fr: '7 Merveilles du Monde',
      id: '7 Keajaiban Dunia',
      th: '7 สิ่งมหัศจรรย์ของโลก',
      es: '7 Maravillas del Mundo',
      pl: '7 Cudów Świata',  // Polish
      ro: '7 Minuni ale Lumii',  // Romanian
      cz: '7 Divů Světa',  // Czech
      ni: '7 Maravillas del Mundo'  // Nigerian (same as Spanish)
    },
    videoSrc: 'https://kids-videos.s3.eu-west-1.amazonaws.com/Krushna/7_Wonders_of_world_final_render.mp4',
    image: `${baseUrl}/images/thumbnails/7_Wonders_of_the_World.webp`,
    categories: [Categories.TRENDING, Categories.HISTORY, Categories.EDUCATIONAL]
  },
  {
    title: {
      en: 'Wheels on the Bus',
      ar: 'العجلات على الحافلة',
      fr: 'Les roues du bus',
      id: 'Roda di Bus',
      th: 'ล้อบนรถบัส',
      es: 'Las ruedas del autobús',
      pl: 'Koła na autobusie',  // Polish
      ro: 'Roțile autobuzului',  // Romanian
      cz: 'Kola na autobuse',  // Czech
      ni: 'Kołami na autobusie'  // Nigerian (same as Polish)
    },
    videoSrc: 'https://kids-videos.s3.eu-west-1.amazonaws.com/Krushna/Comp+1.mp4',
    image: `${baseUrl}/images/thumbnails/Wheels on the bus1.webp`,
    categories: [Categories.TRENDING, Categories.SONGS]
  },
  {
    title: {
      en: 'London Bridge',
      ar: 'جسر لندن',
      fr: 'London Bridge',
      id: 'London Bridge',
      th: 'สะพานลอนดอน',
      es: 'Puente de Londres',
      pl: 'Most w Londynie',  // Polish
      ro: 'Podul Londrei',  // Romanian
      cz: 'Londýnský most',  // Czech
      ni: 'London Bridge'  // Nigerian (same as English)
    },
    videoSrc: 'https://kids-videos.s3.eu-west-1.amazonaws.com/Krushna/London_bridge_video.mp4',
    image: `${baseUrl}/images/thumbnails/London_Bridge.webp`,
    categories: [Categories.ART, Categories.SONGS, Categories.HISTORY]
  },
  {
    title: {
      en: 'Months of the Year',
      ar: 'أشهر السنة',
      fr: 'Mois de l\'année',
      id: 'Bulan Tahun',
      th: 'เดือนของปี',
      es: 'Meses del año',
      pl: 'Miesiące roku',  // Polish
      ro: 'Lunile anului',  // Romanian
      cz: 'Měsíce v roce',  // Czech
      ni: 'Mesele anului'  // Nigerian (same as Romanian)
    },
    videoSrc: 'https://kids-videos.s3.eu-west-1.amazonaws.com/Krushna/Months_of_the_year_final_render.mp4',
    image: `${baseUrl}/images/thumbnails/Months_of_the_Year.webp`,
    categories: [Categories.AGE3_5, Categories.GENERAL, Categories.TRENDING, Categories.EDUCATIONAL]
  },
  {
    title: {
      en: 'Tisket Tasket',
      ar: 'تيسكيت تاسكيت',
      fr: 'Tisket Tasket',
      id: 'Tisket Tasket',
      th: 'Tisket Tasket',
      es: 'Tisket Tasket',
      pl: 'Tisket Tasket',  // Polish
      ro: 'Tisket Tasket',  // Romanian
      cz: 'Tisket Tasket',  // Czech
      ni: 'Tisket Tasket'  // Nigerian (same as other languages)
    },
    videoSrc: 'https://kids-videos.s3.eu-west-1.amazonaws.com/Krushna/Tisket_tasket_final_renderf.mp4',
    image: `${baseUrl}/images/thumbnails/tisket_a_tasket1.webp`,
    categories: [Categories.ART, Categories.SONGS]
  },
  {
    title: {
      en: 'Days of the Week',
      ar: 'أيام الأسبوع',
      fr: 'Jours de la semaine',
      id: 'Hari Minggu',
      th: 'วันของสัปดาห์',
      es: 'Días de la semana',
      pl: 'Dni tygodnia',  // Polish
      ro: 'Zilele săptămânii',  // Romanian
      cz: 'Dny v týdnu',  // Czech
      ni: 'Days of the Week'  // Nigerian (same as English)
    },
    videoSrc: 'https://kids-videos.s3.eu-west-1.amazonaws.com/Krushna/days+of+the+week.mp4',
    image: `${baseUrl}/images/thumbnails/Days_of_the_Week.webp`,
    categories: [Categories.AGE3_5, Categories.TRENDING, Categories.EDUCATIONAL, Categories.SONGS]
  },
  {
    title: {
      en: 'Little Stars',
      ar: 'النجوم الصغيرة',
      fr: 'Petites étoiles',
      id: 'Bintang Kecil',
      th: 'ดวงดาวเล็กๆ',
      es: 'Pequeñas estrellas',
      pl: 'Małe gwiazdy',  // Polish
      ro: 'Steluțele mici',  // Romanian
      cz: 'Malé hvězdy',  // Czech
      ni: 'Little Stars'  // Nigerian (same as English)
    },
    videoSrc: 'https://kids-videos.s3.eu-west-1.amazonaws.com/Krushna/little_stars.mp4',
    image: `${baseUrl}/images/thumbnails/title_twinkle_twinkle_little_star1.webp`,
    categories: [Categories.AGE3_5, Categories.TRENDING, Categories.SONGS]
  },
  {
    title: {
      en: 'Planets of the Solar System',
      ar: 'كواكب النظام الشمسي',
      fr: 'Planètes du système solaire',
      id: 'Planet Tata Surya',
      th: 'ดาวเคราะห์ในระบบสุริยะ',
      es: 'Planetas del sistema solar',
      pl: 'Planety Układu Słonecznego',  // Polish
      ro: 'Planetele sistemului solar',  // Romanian
      cz: 'Planety sluneční soustavy',  // Czech
      ni: 'Planets of the Solar System'  // Nigerian (same as English)
    },
    videoSrc: 'https://kids-videos.s3.eu-west-1.amazonaws.com/Krushna/main.mp4',
    image: `${baseUrl}/images/thumbnails/Planets_of_the_Solar_System.webp`,
    categories: [Categories.TRENDING, Categories.EDUCATIONAL, Categories.AGE3_5]
  },
  {
    title: {
      en: 'Reptiles',
      ar: 'الزواحف',
      fr: 'Reptiles',
      id: 'Reptil',
      th: 'สัตว์เลื้อยคลาน',
      es: 'Reptiles',
      pl: 'Gady',  // Polish
      ro: 'Reptile',  // Romanian
      cz: 'Plazi',  // Czech
      ni: 'Reptiles'  // Nigerian (same as English)
    },
    videoSrc: 'https://kids-videos.s3.eu-west-1.amazonaws.com/Krushna/reptiles_render.mp4',
    image: `${baseUrl}/images/thumbnails/Reptiles.webp`,
    categories: [Categories.SCIENCE, Categories.EDUCATIONAL]
  },  
  {
    title: {
      en: 'I Spy ABC',
      ar: 'أنا أتجسس ABC',
      fr: 'Je découvre ABC',
      id: 'Saya Mengintip ABC',
      th: 'ฉันสอดแนม ABC',
      es: 'Yo espío ABC',
      pl: 'Szpieguję ABC',
      ro: 'Eu spionez ABC',
      cz: 'Špehuji ABC',
      ni: 'Yo espío ABC'
    },
    videoSrc: 'https://kids-videos.s3.eu-west-1.amazonaws.com/Mohammad/I+Spy+ABC(VID)_1.mp4',
    image: `${baseUrl}/images/thumbnails/I_Spy_ABC.webp`,
    categories: [Categories.AGE3_5, Categories.TRENDING, Categories.EDUCATIONAL]
  },
  {
    title: {
      en: 'Colors',
      ar: 'ألوان',
      fr: 'Couleurs',
      id: 'Warna',
      th: 'สี',
      es: 'Colores',
      pl: 'Kolory',
      ro: 'Culori',
      cz: 'Barvy',
      ni: 'Colores'
    },
    videoSrc: 'https://kids-videos.s3.eu-west-1.amazonaws.com/Mohammad/colors.mp4',
    image: `${baseUrl}/images/thumbnails/colours1.webp`,
    categories: [Categories.ART, Categories.SONGS]
  },
  {
    title: {
      en: 'Ecosystems',
      ar: 'النظم البيئية',
      fr: 'Écosystèmes',
      id: 'Ekosistem',
      th: 'ระบบนิเวศ',
      es: 'Ecosistemas',
      pl: 'Ekosystemy',
      ro: 'Ecosisteme',
      cz: 'Ekosystémy',
      ni: 'Ecosistemas'
    },
    videoSrc: 'https://kids-videos.s3.eu-west-1.amazonaws.com/YASSER/3+to+5+Age+group/Ecosystems.mp4',
    image: `${baseUrl}/images/thumbnails/Ecosystem1.webp`,
    categories: [Categories.SCIENCE, Categories.AGE8_10, Categories.EDUCATIONAL]
  },
  {
    title: {
      en: 'Ecosystems - Exploration of different ecosystems and food chain',
      ar: 'النظم البيئية - استكشاف النظم البيئية المختلفة وسلسلة الغذاء',
      fr: 'Écosystèmes - Exploration des différents écosystèmes et chaîne alimentaire',
      id: 'Ekosistem - Eksplorasi berbagai ekosistem dan rantai makanan',
      th: 'ระบบนิเวศ - สำรวจระบบนิเวศต่างๆ และห่วงโซ่อาหาร',
      es: 'Ecosistemas - Exploración de diferentes ecosistemas y cadena alimentaria',
      pl: 'Ekosystemy - Eksploracja różnych ekosystemów i łańcucha pokarmowego',
      ro: 'Ecosisteme - Explorarea diferitelor ecosisteme și lanțul trofic',
      cz: 'Ekosystémy - Průzkum různých ekosystémů a potravního řetězce',
      ni: 'Ecosistemas - Exploración de diferentes ecosistemas y cadena alimentaria'
    },
    videoSrc: 'https://kids-videos.s3.eu-west-1.amazonaws.com/YASSER/3+to+5+Age+group/Ecosystems-+Exploration+of+different+ecosystems+and+food+chain.mp4',
    image: `${baseUrl}/images/thumbnails/Ecosystems___Exploration_of_different_ecosystems_and_food_chain.webp`,
    categories: [Categories.SCIENCE, Categories.AGE3_5, Categories.EDUCATIONAL]
  },
  {
    title: {
      en: 'Geometry',
      ar: 'الهندسة',
      fr: 'Géométrie',
      id: 'Geometri',
      th: 'เรขาคณิต',
      es: 'Geometría',
      pl: 'Geometria',
      ro: 'Geometrie',
      cz: 'Geometrie',
      ni: 'Geometría'
    },
    videoSrc: 'https://kids-videos.s3.eu-west-1.amazonaws.com/YASSER/3+to+5+Age+group/Geometry.mp4',
    image: `${baseUrl}/images/thumbnails/Geometry.webp`,
    categories: [Categories.MATH, Categories.AGE3_5, Categories.EDUCATIONAL]
  },
  {
    title: {
      en: 'Math - Multiplication',
      ar: 'الرياضيات - الضرب',
      fr: 'Maths - Multiplication',
      id: 'Matematika - Perkalian',
      th: 'คณิตศาสตร์ - การคูณ',
      es: 'Matemáticas - Multiplicación',
      pl: 'Matematyka - Mnożenie',
      ro: 'Matematica - Înmulțirea',
      cz: 'Matematika - Násobení',
      ni: 'Matemáticas - Multiplicación'
    },
    videoSrc: 'https://kids-videos.s3.eu-west-1.amazonaws.com/YASSER/3+to+5+Age+group/Math-+maltiplication.mp4',
    image: `${baseUrl}/images/thumbnails/Math___Multiplication.webp`,
    categories: [Categories.MATH, Categories.AGE8_10, Categories.EDUCATIONAL]
  },
  {
    title: {
      en: 'Patterns and Sequences',
      ar: 'الأنماط والمتتاليات',
      fr: 'Motifs et séquences',
      id: 'Pola dan Urutan',
      th: 'รูปแบบและลำดับ',
      es: 'Patrones y Secuencias',
      pl: 'Wzory i Sekwencje',
      ro: 'Modele și Secvențe',
      cz: 'Vzorce a Sekvence',
      ni: 'Patrones y Secuencias'
    },
    videoSrc: 'https://kids-videos.s3.eu-west-1.amazonaws.com/YASSER/3+to+5+Age+group/Patterns+and+sequences.mp4',
    image: `${baseUrl}/images/thumbnails/Patterns_and_Sequences.webp`,
    categories: [Categories.MATH, Categories.AGE3_5, Categories.EDUCATIONAL]
  },
  {
    title: {
      en: 'Physical Science - Basics of Matter',
      ar: 'العلوم الفيزيائية - أساسيات المادة',
      fr: 'Sciences physiques - Notions de base sur la matière',
      id: 'Ilmu Fisika - Dasar-dasar Materi',
      th: 'วิทยาศาสตร์กายภาพ - พื้นฐานของสสาร',
      es: 'Ciencia física - Fundamentos de la materia',
      pl: 'Nauki fizyczne - Podstawy materii',
      ro: 'Științele fizice - Noțiuni de bază ale materiei',
      cz: 'Fyzikální vědy - Základy hmoty',
      ni: 'Ciencia física - Fundamentos de la materia'
    },
    videoSrc: 'https://kids-videos.s3.eu-west-1.amazonaws.com/YASSER/3+to+5+Age+group/Physical+science-+Basics+of+matter.mp4',
    image: `${baseUrl}/images/thumbnails/Physical_Science___Basics_of_Matter.webp`,
    categories: [Categories.SCIENCE, Categories.AGE3_5, Categories.EDUCATIONAL]
  },
  {
    title: {
      en: 'Social Study - Community Helpers',
      ar: 'الدراسات الاجتماعية - المساعدون في المجتمع',
      fr: 'Études sociales - Les aides communautaires',
      id: 'Studi Sosial - Penolong Komunitas',
      th: 'สังคมศึกษา - ผู้ช่วยชุมชน',
      es: 'Estudios sociales - Ayudantes de la comunidad',
      pl: 'Badania społeczne - Pomocnicy społeczności',
      ro: 'Studiu social - Ajutoare comunitare',
      cz: 'Sociální studie - Pomocníci komunity',
      ni: 'Ìmọ̀ Ẹ̀kọ́ Àjọṣe - Olùrànlọ́wọ́ Awujọ'
    },
    videoSrc: 'https://kids-videos.s3.eu-west-1.amazonaws.com/YASSER/3+to+5+Age+group/Social+study+community+helpers.mp4',
    image: `${baseUrl}/images/thumbnails/Social_Study___Community_Helpers.webp`,
    categories: [Categories.HISTORY, Categories.AGE3_5, Categories.EDUCATIONAL]
  },
  {
    title: {
      en: 'Geography',
      ar: 'الجغرافيا',
      fr: 'Géographie',
      id: 'Geografi',
      th: 'ภูมิศาสตร์',
      es: 'Geografía',
      pl: 'Geografia',
      ro: 'Geografie',
      cz: 'Geografie',
      ni: 'Ẹ̀kọ́ Ilẹ̀-Àkúnya'
    },
    videoSrc: 'https://kids-videos.s3.eu-west-1.amazonaws.com/YASSER/3+to+5+Age+group/geography.mp4',
    image: `${baseUrl}/images/thumbnails/Geography1.webp`,
    categories: [Categories.SCIENCE, Categories.AGE3_5, Categories.EDUCATIONAL]
  },
  {
    title: {
      en: 'Grammar',
      ar: 'النحو',
      fr: 'Grammaire',
      id: 'Tata Bahasa',
      th: 'ไวยากรณ์',
      es: 'Gramática',
      pl: 'Gramatyka',
      ro: 'Gramatica',
      cz: 'Gramatika',
      ni: 'Ìmọ̀ Ẹ̀dá-ọrọ'
    },
    videoSrc: 'https://kids-videos.s3.eu-west-1.amazonaws.com/YASSER/3+to+5+Age+group/grammer.mp4',
    image: `${baseUrl}/images/thumbnails/Grammars1.webp`,
    categories: [Categories.AGE3_5, Categories.EDUCATIONAL]
  },
  {
    title: {
      en: 'History',
      ar: 'التاريخ',
      fr: 'Histoire',
      id: 'Sejarah',
      th: 'ประวัติศาสตร์',
      es: 'Historia',
      pl: 'Historia',
      ro: 'Istorie',
      cz: 'Dějiny',
      ni: 'Ìtàn'
    },
    videoSrc: 'https://kids-videos.s3.eu-west-1.amazonaws.com/YASSER/3+to+5+Age+group/history.mp4',
    image: `${baseUrl}/images/thumbnails/History.webp`,
    categories: [Categories.HISTORY, Categories.AGE3_5, Categories.EDUCATIONAL]
  },
  {
    title: {
      en: 'Human Body',
      ar: 'الجسم البشري',
      fr: 'Le corps humain',
      id: 'Tubuh Manusia',
      th: 'ร่างกายมนุษย์',
      es: 'Cuerpo humano',
      pl: 'Ludzkie ciało',
      ro: 'Corpul uman',
      cz: 'Lidské tělo',
      ni: 'Ara Ẹ̀dá Ẹ̀dá'
    },
    videoSrc: 'https://kids-videos.s3.eu-west-1.amazonaws.com/YASSER/3+to+5+Age+group/human+body.mp4',
    image: `${baseUrl}/images/thumbnails/Human_Body.webp`,
    categories: [Categories.SCIENCE, Categories.AGE3_5, Categories.EDUCATIONAL]
  },
  {
    title: {
      en: 'Language and Literacy',
      ar: 'اللغة ومحو الأمية',
      fr: 'Langue et alphabétisation',
      id: 'Bahasa dan Literasi',
      th: 'ภาษาและการรู้หนังสือ',
      es: 'Lenguaje y alfabetización',
      pl: 'Język i alfabetyzacja',
      ro: 'Limba și alfabetizare',
      cz: 'Jazyk a gramotnost',
      ni: 'Èdá àti Ìmọ̀ Ọ̀rọ̀'
    },
    videoSrc: 'https://kids-videos.s3.eu-west-1.amazonaws.com/YASSER/3+to+5+Age+group/language+and+literacy.mp4',
    image: `${baseUrl}/images/thumbnails/Language_and_Literacy.webp`,
    categories: [Categories.AGE3_5, Categories.EDUCATIONAL]
  },  
  {
    title: {
      en: 'Math - Fractions and Decimals',
      ar: 'الرياضيات - الكسور والأعداد العشرية',
      fr: 'Mathématiques - Fractions et décimales',
      id: 'Matematika - Pecahan dan Desimal',
      th: 'คณิตศาสตร์ - เศษส่วนและทศนิยม',
      es: 'Matemáticas - Fracciones y decimales',
      pl: 'Matematyka - Ułamki i liczby dziesiętne',
      ro: 'Matematică - Fracții și zecimale',
      cz: 'Matematika - Zlomek a desetinná čísla',
      ni: 'Math - Ìpín àti Àdájọ̀'
    },
    videoSrc: 'https://kids-videos.s3.eu-west-1.amazonaws.com/YASSER/3+to+5+Age+group/math-fractions+and+decimals.mp4',
    image: `${baseUrl}/images/thumbnails/Math___Fractions_and_Decimals.webp`,
    categories: [Categories.MATH, Categories.AGE8_10, Categories.EDUCATIONAL]
  },
  {
    title: {
      en: 'Music and Rhythm',
      ar: 'الموسيقى والإيقاع',
      fr: 'Musique et rythme',
      id: 'Musik dan Irama',
      th: 'ดนตรีและจังหวะ',
      es: 'Música y ritmo',
      pl: 'Muzyka i rytm',
      ro: 'Muzică și ritm',
      cz: 'Hudba a rytmus',
      ni: 'Orin àti Ìdájọ́'
    },
    videoSrc: 'https://kids-videos.s3.eu-west-1.amazonaws.com/YASSER/3+to+5+Age+group/music+and+rhythm.mp4',
    image: `${baseUrl}/images/thumbnails/music_and_rhythm1.webp`,
    categories: [Categories.ART, Categories.AGE3_5, Categories.SONGS]
  },
  {
    title: {
      en: 'Physical Education',
      ar: 'التربية البدنية',
      fr: 'Éducation physique',
      id: 'Pendidikan Jasmani',
      th: 'พลศึกษา',
      es: 'Educación física',
      pl: 'Wychowanie fizyczne',
      ro: 'Educație fizică',
      cz: 'Tělesná výchova',
      ni: 'Ẹ̀kọ́ Ìdárayá'
    },
    videoSrc: 'https://kids-videos.s3.eu-west-1.amazonaws.com/YASSER/3+to+5+Age+group/physical+education.mp4',
    image: `${baseUrl}/images/thumbnails/Physical_Education.webp`,
    categories: [Categories.AGE3_5, Categories.EDUCATIONAL]
  },
  {
    title: {
      en: 'Dance and Freeze',
      ar: 'الرقص والتجميد',
      fr: 'Danser et se figer',
      id: 'Menari dan Membeku',
      th: 'เต้นรำและหยุดนิ่ง',
      es: 'Bailar y congelarse',
      pl: 'Taniec i Zatrzymaj się',
      ro: 'Dans și îngheț',
      cz: 'Tanec a zmrazení',
      ni: 'Dáǹsì àti Dídákẹ́'
    },
    videoSrc: 'https://kids-videos.s3.eu-west-1.amazonaws.com/YASSER/Dance+and+freez.mp4',
    image: `${baseUrl}/images/thumbnails/Dance_and_Freeze.webp`,
    categories: [Categories.ART, Categories.AGE3_5, Categories.SONGS]
  },
  {
    title: {
      en: 'Fruits',
      ar: 'الفاكهة',
      fr: 'Fruits',
      id: 'Buah-buahan',
      th: 'ผลไม้',
      es: 'Frutas',
      pl: 'Owoce',
      ro: 'Fructe',
      cz: 'Ovoce',
      ni: 'Èso'
    },
    videoSrc: 'https://kids-videos.s3.eu-west-1.amazonaws.com/YASSER/Fruits.mp4',
    image: `${baseUrl}/images/thumbnails/Fruits.webp`,
    categories: [Categories.SCIENCE, Categories.AGE5_6, Categories.EDUCATIONAL]
  },  
  {
    title: {
      en: 'Global and Maps',
      ar: 'العالم والخرائط',
      fr: 'Monde et cartes',
      id: 'Global dan Peta',
      th: 'ทั่วโลกและแผนที่',
      es: 'Global y mapas',
      pl: 'Świat i mapy',
      ro: 'Global și hărți',
      cz: 'Svět a mapy',
      ni: 'Àgbáyé àti Ìkànsí'
    },
    videoSrc: 'https://kids-videos.s3.eu-west-1.amazonaws.com/YASSER/Global+and+maps.mp4',
    image: `${baseUrl}/images/thumbnails/global_and_maps1.webp`,
    categories: [Categories.SCIENCE, Categories.AGE5_6, Categories.EDUCATIONAL]
  },
  {
    title: {
      en: 'Mathematics Education',
      ar: 'التعليم الرياضي',
      fr: 'Éducation mathématique',
      id: 'Pendidikan Matematika',
      th: 'การศึกษาคณิตศาสตร์',
      es: 'Educación matemática',
      pl: 'Edukacja matematyczna',
      ro: 'Educație matematică',
      cz: 'Matematické vzdělávání',
      ni: 'Ẹ̀kọ́ Ìṣirò'
    },
    videoSrc: 'https://kids-videos.s3.eu-west-1.amazonaws.com/YASSER/Mathamatics+education.mp4',
    image: `${baseUrl}/images/thumbnails/mathematics_education1.webp`,
    categories: [Categories.MATH, Categories.AGE5_6, Categories.EDUCATIONAL]
  },
  {
    title: {
      en: 'Rainbow Color',
      ar: 'ألوان قوس قزح',
      fr: 'Couleurs de l\'arc-en-ciel',
      id: 'Warna Pelangi',
      th: 'สีรุ้ง',
      es: 'Colores del arcoíris',
      pl: 'Kolory tęczy',
      ro: 'Culorile curcubeului',
      cz: 'Barvy duhy',
      ni: 'Àwọ̀ Oòrùn'
    },
    videoSrc: 'https://kids-videos.s3.eu-west-1.amazonaws.com/YASSER/Ranbow+color.mp4',
    image: `${baseUrl}/images/thumbnails/Rainbow_Color.webp`,
    categories: [Categories.ART, Categories.AGE3_5]
  },
  {
    title: {
      en: 'Shapes',
      ar: 'الأشكال',
      fr: 'Formes',
      id: 'Bentuk',
      th: 'รูปร่าง',
      es: 'Formas',
      pl: 'Kształty',
      ro: 'Forme',
      cz: 'Tvary',
      ni: 'Àwòkọ́'
    },
    videoSrc: 'https://kids-videos.s3.eu-west-1.amazonaws.com/YASSER/Shapes+.mp4',
    image: `${baseUrl}/images/thumbnails/shapes1.webp`,
    categories: [Categories.ART, Categories.AGE3_5, Categories.EDUCATIONAL]
  },
  {
    title: {
      en: 'Solar System',
      ar: 'النظام الشمسي',
      fr: 'Système solaire',
      id: 'Sistem Tata Surya',
      th: 'ระบบสุริยะ',
      es: 'Sistema solar',
      pl: 'Układ słoneczny',
      ro: 'Sistemul solar',
      cz: 'Sluneční soustava',
      ni: 'Ẹ̀rọ Oòrùn'
    },
    videoSrc: 'https://kids-videos.s3.eu-west-1.amazonaws.com/YASSER/Solar+system.mp4',
    image: `${baseUrl}/images/thumbnails/Solar_System.webp`,
    categories: [Categories.SCIENCE, Categories.AGE5_6, Categories.EDUCATIONAL]
  }  
];