import HeroImage from "@/../public/assets/images/hero/hero.png";
import service from "./service";

const heroOneData = {
  slides: [
    {
      videoSrc: "https://kids-videos.s3.eu-west-1.amazonaws.com/main.mp4",
      image: HeroImage,
      title: {
        ar: `مرحبًا بكم في ${service.name}`,
        en: `Welcome to ${service.name}`,
        fr: `Bienvenue à ${service.name}`,
        id: `Selamat datang di ${service.name}`,
        th: `ยินดีต้อนรับสู่ ${service.name}`,
        es: `Bienvenido a ${service.name}`,
        pl: `Witaj w ${service.name}`, // Added Polish translation
        ro: `Bine ați venit la ${service.name}`, // Added Romanian translation
        cz: `Vítejte na ${service.name}`, // Added Czech translation
        ni: `Bienvenido a ${service.name}`, // Assuming this is similar to Spanish
      },
      description: {
        ar: "استمتع بالوصول غير المحدود إلى مكتبتنا من مقاطع الفيديو التعليمية والممتعة للأطفال.",
        en: "Enjoy unlimited access to our library of educational and fun videos for kids.",
        fr: "Profitez d'un accès illimité à notre bibliothèque de vidéos éducatives et amusantes pour les enfants.",
        id: "Nikmati akses tak terbatas ke perpustakaan video pendidikan dan menyenangkan kami untuk anak-anak.",
        th: "เพลิดเพลินกับการเข้าถึงวิดีโอการศึกษาและวิดีโอสนุก ๆ สำหรับเด็กไม่จำกัด",
        es: "Disfruta de acceso ilimitado a nuestra biblioteca de videos educativos y divertidos para niños.",
        pl: "Ciesz się nieograniczonym dostępem do naszej biblioteki edukacyjnych i zabawnych filmów dla dzieci", // Added Polish translation
        ro: "Bucurați-vă de acces nelimitat la biblioteca noastră de videoclipuri educative și amuzante pentru copii", // Added Romanian translation
        cz: "Užijte si neomezený přístup k naší knihovně vzdělávacích a zábavných videí pro děti", // Added Czech translation
        ni: "Disfruta de acceso ilimitado a nuestra biblioteca de videos educativos y divertidos para niños.", // Assuming this is similar to Spanish
      },
      btnOneText: {
        ar: "تسجيل الدخول",
        en: "Login",
        fr: "Connexion",
        id: "Masuk",
        th: "เข้าสู่ระบบ",
        es: "Iniciar sesión",
        pl: "Zaloguj się", // Added Polish translation
        ro: "Conectează-te", // Added Romanian translation
        cz: "Přihlásit se", // Added Czech translation
        ni: "Iniciar sesión", // Assuming this is similar to Spanish
      },
      btnTwoText: {
        ar: "استكشف الآن",
        en: "Explore Now",
        fr: "Explorer Maintenant",
        id: "Jelajahi Sekarang",
        th: "สำรวจเลย",
        es: "Explorar Ahora",
        pl: "Zbadaj teraz", // Added Polish translation
        ro: "Explorează acum", // Added Romanian translation
        cz: "Prozkoumat nyní", // Added Czech translation
        ni: "Explorar ahora", // Assuming this is similar to Spanish
      }
    }
  ]
};

export { heroOneData };
