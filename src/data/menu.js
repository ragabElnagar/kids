// import logo from "/assets/images/logo.png";

const menuOneData = {
  logo: "/assets/images/logo.png",
  href: "/",
  btnText: {
    en: "Account",
    ar: "الحساب",
    fr: "Compte",
    id: "Akun",
    th: "บัญชี",
    es: "Cuenta",
    pl: "Konto", // Added Polish translation
    ro: "Cont", // Added Romanian translation
    cz: "Účet", // Added Czech translation
    ni: "Cuenta" // Assuming this is similar to Spanish
  },
  buttonTextTwo: {
    ar: "تسجيل الدخول",
    en: "Login",
    fr: "Connexion",
    id: "Masuk",
    th: "เข้าสู่ระบบ",
    es: "Iniciar sesión",
    pl: "Zaloguj się", // Added Polish translation
    ro: "Conectează-te", // Added Romanian translation
    cz: "Přihlásit se", // Added Czech translation
    ni: "Iniciar sesión" // Assuming this is similar to Spanish
  },
  menus: [
    {
      name: {
        ar: "الصفحة الرئيسية",
        en: "Home",
        fr: "Accueil",
        id: "Beranda",
        th: "หน้าแรก",
        es: "Inicio",
        pl: "Strona główna", // Added Polish translation
        ro: "Acasă", // Added Romanian translation
        cz: "Domů", // Added Czech translation
        ni: "Inicio" // Assuming this is similar to Spanish
      },
      href: "/",
    },
    {
      name: {
        ar: "جميع الفئات",
        en: "All Categories",
        fr: "Toutes les catégories",
        id: "Semua Kategori",
        th: "หมวดหมู่ทั้งหมด",
        es: "Todas las categorías",
        pl: "Wszystkie kategorie", // Added Polish translation
        ro: "Toate categoriile", // Added Romanian translation
        cz: "Všechny kategorie", // Added Czech translation
        ni: "Todas las categorías" // Assuming this is similar to Spanish
      },
      href: "/categories",
    },
    {
      name: {
        ar: "معلومات عنا",
        en: "About Us",
        fr: "À propos de nous",
        id: "Tentang Kami",
        th: "เกี่ยวกับเรา",
        es: "Sobre Nosotros",
        pl: "O nas", // Added Polish translation
        ro: "Despre noi", // Added Romanian translation
        cz: "O nás", // Added Czech translation
        ni: "Sobre Nosotros" // Assuming this is similar to Spanish
      },
      href: "/about",
    },
    {
      name: {
        ar: "الأسئلة الشائعة",
        en: "FAQ",
        fr: "FAQ",
        id: "FAQ",
        th: "คำถามที่พบบ่อย",
        es: "FAQ",
        pl: "FAQ", // Added Polish translation
        ro: "Întrebări frecvente", // Added Romanian translation
        cz: "Často kladené dotazy", // Added Czech translation
        ni: "FAQ" // Assuming this is similar to English
      },
      href: "/faq",
    },
  ],
};

const menuTwoData = {
  primaryMenus: [
    { name: { en: "Home", pl: "Strona główna", ro: "Acasă", cz: "Domů", ni: "Inicio" }, href: "/" },
    { name: { en: "Search", pl: "Szukaj", ro: "Căutare", cz: "Hledat", ni: "Buscar" }, href: "category" },
    { name: { en: "Movies", pl: "Filmy", ro: "Filme", cz: "Filmy", ni: "Películas" }, href: "movie-list" },
    { name: { en: "Add To Playlist", pl: "Dodaj do listy odtwarzania", ro: "Adăugați la listă", cz: "Přidat do seznamu", ni: "Agregar a la lista de reproducción" }, href: "playlist" },
    { name: { en: "Tv Showes", pl: "Programy telewizyjne", ro: "Emisiuni TV", cz: "Televizní pořady", ni: "Programas de TV" }, href: "pagination-one" },
    { name: { en: "Games", pl: "Gry", ro: "Jocuri", cz: "Hry", ni: "Juegos" }, href: "pagination-two" },
    { name: { en: "Sports", pl: "Sporty", ro: "Sporturi", cz: "Sporty", ni: "Deportes" }, href: "pagination-one" },
  ],
};

export { menuOneData, menuTwoData };
