// import featherIconOne from "/assets/images/icons/feathur-1.svg";
// import featherIconTwo from "/assets/images/icons/feathur-2.svg";
// import featherIconThree from "/assets/images/icons/feathur-3.svg";
// import featherIconFour from "/assets/images/icons/feathur-4.svg";
import service from "./service";

const liveStreamingFeatureData = {
  title: {
    ar: `${service.name} يقدم قيمة رائعة للأطفال`,
    en: `${service.name} OFFERS GREAT VALUE FOR KIDS`,
    fr: `${service.name} OFFRE UNE GRANDE VALEUR POUR LES ENFANTS`,
    id: `${service.name} MENAWARKAN NILAI HEBAT UNTUK ANAK-ANAK`,
    th: `${service.name} มอบความคุ้มค่าที่สุดสำหรับเด็ก ๆ`,
    es: `${service.name} OFRECE UN GRAN VALOR PARA LOS NIÑOS`,
    pl: `${service.name} OFERUJE WIELKĄ WARTOŚĆ DLA DZIECI`,
    ro: `${service.name} OFERĂ O VALOARE MARE PENTRU COPII`,
    cz: `${service.name} NABÍZÍ VELKOU HODNOTU PRO DĚTI`,
    ni: `${service.name} OFRECE UN GRAN VALOR PARA LOS NIÑOS`, // Assuming this is similar to Spanish
  },
  features: [
    {
      image: "/assets/images/icons/feathur-1.svg",
      title: {
        ar: "فيديوهات تعليمية",
        en: "Educational videos",
        fr: "Vidéos éducatives",
        id: "Video edukasi",
        th: "วิดีโอการศึกษา",
        es: "Videos educativos",
        pl: "Filmy edukacyjne",
        ro: "Videoclipuri educative",
        cz: "Vzdělávací videa",
        ni: "Vídeos educativos", // Assuming this is similar to Spanish
      },
      description: {
        ar: "منصتنا تقدم مجموعة واسعة من الفيديوهات التعليمية الأصلية الممتعة والجذابة للأطفال.",
        en: "Our platform offers a wide range of original educational videos that are fun and engaging for kids.",
        fr: "Notre plateforme propose un large éventail de vidéos éducatives originales amusantes et captivantes pour les enfants.",
        id: "Platform kami menawarkan berbagai video pendidikan asli yang menyenangkan dan menarik untuk anak-anak.",
        th: "แพลตฟอร์มของเรามีวิดีโอการศึกษาต้นฉบับที่หลากหลาย สนุกและดึงดูดใจสำหรับเด็ก ๆ",
        es: "Nuestra plataforma ofrece una amplia gama de videos educativos originales que son divertidos y atractivos para los niños.",
        pl: "Nasza platforma oferuje szeroki wybór oryginalnych filmów edukacyjnych, które są zabawne i angażujące dla dzieci.",
        ro: "Platforma noastră oferă o gamă largă de videoclipuri educative originale care sunt amuzante și captivante pentru copii.",
        cz: "Naše platforma nabízí širokou škálu originálních vzdělávacích videí, která jsou zábavná a poutavá pro děti.",
        ni: "Nuestra plataforma ofrece una amplia gama de videos educativos originales que son divertidos y atractivos para los niños.", // Assuming this is similar to Spanish
      }
    },
    {
      image: "/assets/images/icons/feathur-2.svg",
      title: {
        ar: "آمن للأطفال",
        en: "Safe for kids",
        fr: "Sûr pour les enfants",
        id: "Aman untuk anak-anak",
        th: "ปลอดภัยสำหรับเด็ก",
        es: "Seguro para los niños",
        pl: "Bezpieczne dla dzieci",
        ro: "Sigur pentru copii",
        cz: "Bezpečné pro děti",
        ni: "Seguro para los niños", // Assuming this is similar to Spanish
      },
      description: {
        ar: "منصتنا تقدم بيئة آمنة وموثوقة للأطفال لاستكشاف وتعلم.",
        en: "Our platform offers a safe and secure environment for kids to explore and learn.",
        fr: "Notre plateforme offre un environnement sûr et sécurisé pour que les enfants puissent explorer et apprendre.",
        id: "Platform kami menawarkan lingkungan yang aman dan terjamin bagi anak-anak untuk menjelajahi dan belajar.",
        th: "แพลตฟอร์มของเรานำเสนอสิ่งแวดล้อมที่ปลอดภัยและมั่นคงสำหรับเด็ก ๆ ที่จะสำรวจและเรียนรู้",
        es: "Nuestra plataforma ofrece un entorno seguro y protegido para que los niños exploren y aprendan.",
        pl: "Nasza platforma oferuje bezpieczne i chronione środowisko, w którym dzieci mogą odkrywać i uczyć się.",
        ro: "Platforma noastră oferă un mediu sigur și protejat pentru ca copiii să exploreze și să învețe.",
        cz: "Naše platforma nabízí bezpečné a chráněné prostředí pro děti, aby mohly prozkoumávat a učit se.",
        ni: "Nuestra plataforma ofrece un entorno seguro y protegido para que los niños exploren y aprendan.", // Assuming this is similar to Spanish
      }
    },
    {
      image: "/assets/images/icons/feathur-3.svg",
      title: {
        ar: "شاهد من أي مكان",
        en: "Watch from anywhere",
        fr: "Regarder de n'importe où",
        id: "Tonton dari mana saja",
        th: "ดูได้จากทุกที่",
        es: "Ver desde cualquier lugar",
        pl: "Oglądaj z dowolnego miejsca",
        ro: "Vizionați de oriunde",
        cz: "Sledujte odkudkoli",
        ni: "Ver desde cualquier lugar", // Assuming this is similar to Spanish
      },
      description: {
        ar: "منصتنا متاحة على الهواتف، الأجهزة اللوحية، وأجهزة الكمبيوتر المكتبية في أي مكان في العالم.",
        en: "Our platform is accessible from any phones, tablets and desktops anywhere in the world.",
        fr: "Notre plateforme est accessible depuis n'importe quel téléphone, tablette ou ordinateur de bureau dans le monde entier.",
        id: "Platform kami dapat diakses dari ponsel, tablet, dan desktop di mana saja di dunia.",
        th: "แพลตฟอร์มของเราสามารถเข้าถึงได้จากโทรศัพท์ แท็บเล็ต และเดสก์ท็อปจากทุกที่ในโลก",
        es: "Nuestra plataforma es accesible desde cualquier teléfono, tableta y escritorio en cualquier parte del mundo.",
        pl: "Nasza platforma jest dostępna z każdego telefonu, tabletu i komputera stacjonarnego na całym świecie.",
        ro: "Platforma noastră este accesibilă de pe orice telefon, tabletă sau desktop din întreaga lume.",
        cz: "Naše platforma je přístupná z jakéhokoli telefonu, tabletu a desktopu kdekoli na světě.",
        ni: "Nuestra plataforma es accesible desde cualquier teléfono, tableta y escritorio en cualquier parte del mundo.", // Assuming this is similar to Spanish
      }
    },
    {
      image: "/assets/images/icons/feathur-4.svg",
      title: {
        ar: "ممتع وجذاب",
        en: "Fun and Engaging",
        fr: "Amusant et captivant",
        id: "Menyenangkan dan Menarik",
        th: "สนุกและน่าดึงดูด",
        es: "Divertido y Atractivo",
        pl: "Zabawne i angażujące",
        ro: "Distractiv și captivant",
        cz: "Zábavné a poutavé",
        ni: "Divertido y Atractivo", // Assuming this is similar to Spanish
      },
      description: {
        ar: "منصتنا تقدم تجربة ممتعة وجذابة للأطفال من جميع الأعمار.",
        en: "Our platform offers a fun and engaging experience for kids of all ages.",
        fr: "Notre plateforme offre une expérience amusante et captivante pour les enfants de tous âges.",
        id: "Platform kami menawarkan pengalaman yang menyenangkan dan menarik untuk anak-anak dari segala usia.",
        th: "แพลตฟอร์มของเรานำเสนอประสบการณ์ที่สนุกและน่าดึงดูดสำหรับเด็ก ๆ ทุกวัย",
        es: "Nuestra plataforma ofrece una experiencia divertida y atractiva para niños de todas las edades.",
        pl: "Nasza platforma oferuje zabawną i angażującą doświadczenie dla dzieci w każdym wieku.",
        ro: "Platforma noastră oferă o experiență distractivă și captivantă pentru copii de toate vârstele.",
        cz: "Naše platforma nabízí zábavný a poutavý zážitek pro děti všech věkových kategorií.",
        ni: "Nuestra plataforma ofrece una experiencia divertida y atractiva para niños de todas las edades.", // Assuming this is similar to Spanish
      }
    }
  ]
};

export { liveStreamingFeatureData };
