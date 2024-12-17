import service from "./service";

const termsData = {
    title: {
      en: "Table of Contents",
      ar: "جدول المحتويات",
      fr: "Table des matières",
      es: "Tabla de contenidos",
      id: "Daftar Isi",
      th: "สารบัญ",
      pl: "Spis treści", // Polish
      ro: "Cuprins", // Romanian
      cz: "Obsah", // Czech
      ni: "Table of Contents" // Nigerian (similar to English)
  },  
  items: [
    {
      title: {
        en: `1. Introduction to ${service.name}`,
        ar: `1. مقدمة إلى ${service.name}`,
        fr: `1. Introduction à ${service.name}`,
        es: `1. Introducción a ${service.name}`,
        id: `1. Pengantar ke ${service.name}`,
        th: `1. บทนำสู่ ${service.name}`,
        pl: `1. Wprowadzenie do ${service.name}`, // Polish
        ro: `1. Introducere în ${service.name}`, // Romanian
        cz: `1. Úvod do ${service.name}`, // Czech
        ni: `1. Introduction to ${service.name}` // Nigerian (similar to English)
      },
      content: {
        title: {
          en: `Introduction to ${service.name}`,
          ar: `مقدمة إلى ${service.name}`,
          fr: `Introduction à ${service.name}`,
          es: `Introducción a ${service.name}`,
          id: `Pengantar ke ${service.name}`,
          th: `บทนำสู่ ${service.name}`,
          pl: `Wprowadzenie do ${service.name}`, // Polish
          ro: `Introducere în ${service.name}`, // Romanian
          cz: `Úvod do ${service.name}`, // Czech
          ni: `Introduction to ${service.name}` // Nigerian
        },
        description: {
          en: `Welcome to ${service.name}! This website is designed to provide a safe, fun, and educational online environment for children. By using our service, you agree to comply with and be bound by the following terms and conditions. Please read these carefully and discuss them with your parent or guardian.`,
          ar: `مرحبًا بك في ${service.name}! تم تصميم هذا الموقع لتوفير بيئة تعليمية آمنة وممتعة للأطفال عبر الإنترنت. باستخدام خدمتنا، فإنك توافق على الالتزام بالشروط والأحكام التالية. يرجى قراءة هذه بعناية ومناقشتها مع والديك أو الوصي عليك.`,
          fr: `Bienvenue sur ${service.name} ! Ce site est conçu pour offrir un environnement en ligne sûr, amusant et éducatif pour les enfants. En utilisant notre service, vous acceptez de respecter les termes et conditions suivants. Veuillez les lire attentivement et en discuter avec vos parents ou tuteurs.`,
          es: `¡Bienvenido a ${service.name}! Este sitio web está diseñado para proporcionar un entorno en línea seguro, divertido y educativo para los niños. Al utilizar nuestro servicio, acepta cumplir y estar sujeto a los siguientes términos y condiciones. Por favor, léalos detenidamente y discútalos con su padre, madre o tutor.`,
          id: `Selamat datang di ${service.name}! Situs web ini dirancang untuk menyediakan lingkungan online yang aman, menyenangkan, dan edukatif untuk anak-anak. Dengan menggunakan layanan kami, Anda setuju untuk mematuhi dan terikat oleh syarat dan ketentuan berikut. Silakan baca dengan cermat dan diskusikan dengan orang tua atau wali Anda.`,
          th: `ยินดีต้อนรับสู่ ${service.name}! เว็บไซต์นี้ออกแบบมาเพื่อให้สภาพแวดล้อมออนไลน์ที่ปลอดภัย สนุกสนาน และให้ความรู้สำหรับเด็กๆ การใช้บริการของเรา หมายความว่าคุณยอมรับและตกลงที่จะปฏิบัติตามข้อกำหนดและเงื่อนไขต่อไปนี้ โปรดอ่านอย่างละเอียดและปรึกษากับพ่อแม่หรือผู้ปกครองของคุณ`,
          pl: `Witamy w ${service.name}! Ta strona internetowa została zaprojektowana, aby zapewnić bezpieczne, zabawne i edukacyjne środowisko online dla dzieci. Korzystając z naszej usługi, zgadzasz się przestrzegać następujących warunków. Prosimy o dokładne przeczytanie i omówienie ich z rodzicem lub opiekunem.`,
          ro: `Bine ați venit la ${service.name}! Acest site web este conceput pentru a oferi un mediu online sigur, distractiv și educațional pentru copii. Utilizând serviciul nostru, sunteți de acord să respectați și să fiți legat de următorii termeni și condiții. Vă rugăm să le citiți cu atenție și să le discutați cu părintele sau tutorele dumneavoastră.`,
          cz: `Vítejte na ${service.name}! Tato webová stránka je navržena tak, aby poskytovala bezpečné, zábavné a vzdělávací online prostředí pro děti. Používáním naší služby souhlasíte s dodržováním a být vázáni následujícími podmínkami. Přečtěte si je pečlivě a proberte je s vaším rodičem nebo opatrovníkem.`,
          ni: `Welcome to ${service.name}! This website is designed to provide a safe, fun, and educational online environment for children. By using our service, you agree to comply with and be bound by the following terms and conditions. Please read these carefully and discuss them with your parent or guardian.`
        }
      }
    },    
    {
      title: {
        en: "2. User Eligibility",
        ar: "2. أهلية المستخدم",
        fr: "2. Éligibilité de l'utilisateur",
        es: "2. Elegibilidad del usuario",
        id: "2. Kelayakan Pengguna",
        th: "2. คุณสมบัติของผู้ใช้",
        pl: "2. Kwalifikowalność użytkownika", // Polish
        ro: "2. Eligibilitatea utilizatorului", // Romanian
        cz: "2. Způsobilost uživatele", // Czech
        ni: "2. User Eligibility" // Nigerian (similar to English)
      },
      content: {
        title: {
          en: "User Eligibility",
          ar: "أهلية المستخدم",
          fr: "Éligibilité de l'utilisateur",
          es: "Elegibilidad del usuario",
          id: "Kelayakan Pengguna",
          th: "คุณสมบัติของผู้ใช้",
          pl: "Kwalifikowalność użytkownika", // Polish
          ro: "Eligibilitatea utilizatorului", // Romanian
          cz: "Způsobilost uživatele", // Czech
          ni: "User Eligibility" // Nigerian
        },
        description: {
          en: `${service.name} is intended for children with the consent and supervision of their parents or guardians. Parents or guardians must create the account, and by doing so, they confirm that they have provided their consent for their child to use the service.`,
          ar: `يُقصد بـ ${service.name} للأطفال بإشراف وموافقة آبائهم أو الأوصياء عليهم. يجب على الوالدين أو الأوصياء إنشاء الحساب، وبقيامهم بذلك، فإنهم يؤكدون أنهم قد قدموا موافقتهم لاستخدام طفلهم للخدمة.`,
          fr: `${service.name} est destiné aux enfants avec le consentement et la supervision de leurs parents ou tuteurs. Les parents ou tuteurs doivent créer le compte, et en le faisant, ils confirment qu'ils ont donné leur consentement pour que leur enfant utilise le service.`,
          es: `${service.name} está destinado a niños con el consentimiento y la supervisión de sus padres o tutores. Los padres o tutores deben crear la cuenta, y al hacerlo, confirman que han proporcionado su consentimiento para que su hijo utilice el servicio.`,
          id: `${service.name} ditujukan untuk anak-anak dengan persetujuan dan pengawasan orang tua atau wali. Orang tua atau wali harus membuat akun, dan dengan melakukan itu, mereka mengkonfirmasi bahwa mereka telah memberikan persetujuan bagi anak mereka untuk menggunakan layanan.`,
          th: `${service.name} ตั้งใจสำหรับเด็กโดยได้รับความยินยอมและการดูแลของผู้ปกครองหรือผู้ดูแล ผู้ปกครองหรือนายทะเบียนจะต้องสร้างบัญชี และโดยการทำเช่นนั้น พวกเขายืนยันว่าพวกเขาได้ให้ความยินยอมให้บุตรหลานของพวกเขาใช้บริการนี้`,
          pl: `${service.name} jest przeznaczony dla dzieci za zgodą i pod nadzorem ich rodziców lub opiekunów. Rodzice lub opiekunowie muszą utworzyć konto, a tworząc je, potwierdzają, że udzielili zgody na korzystanie przez ich dziecko z usługi.`,
          ro: `${service.name} este destinat copiilor cu consimțământul și sub supravegherea părinților sau tutorilor lor. Părinții sau tutorii trebuie să creeze contul, iar făcând acest lucru, confirmă că au acordat consimțământul pentru ca copilul lor să utilizeze serviciul.`,
          cz: `${service.name} je určen pro děti s souhlasem a pod dohledem jejich rodičů nebo opatrovníků. Rodiče nebo opatrovníci musí vytvořit účet, a tím potvrzují, že dali souhlas pro své dítě, aby službu používalo.`,
          ni: `${service.name} is intended for children with the consent and supervision of their parents or guardians. Parents or guardians must create the account, and by doing so, they confirm that they have provided their consent for their child to use the service.`
        }
      }
    },    
    {
      title: {
        en: "3. Account Creation",
        ar: "3. إنشاء الحساب",
        fr: "3. Création de compte",
        es: "3. Creación de cuenta",
        id: "3. Pembuatan Akun",
        th: "3. การสร้างบัญชี",
        pl: "3. Tworzenie konta", // Polish
        ro: "3. Crearea contului", // Romanian
        cz: "3. Vytvoření účtu", // Czech
        ni: "3. Account Creation" // Nigerian (similar to English)
      },
      content: {
        title: {
          en: "Account Creation",
          ar: "إنشاء الحساب",
          fr: "Création de compte",
          es: "Creación de cuenta",
          id: "Pembuatan Akun",
          th: "การสร้างบัญชี",
          pl: "Tworzenie konta", // Polish
          ro: "Crearea contului", // Romanian
          cz: "Vytvoření účtu", // Czech
          ni: "Account Creation" // Nigerian
        },
        description: {
          en: `To access the content on ${service.name}, users must subscribe using their mobile provider's credit. Account creation is managed by parents or guardians, ensuring that the content is accessed appropriately.`,
          ar: `للوصول إلى المحتوى على ${service.name}، يجب على المستخدمين الاشتراك باستخدام رصيد موفر الجوال الخاص بهم. يتم إدارة إنشاء الحساب من قبل الوالدين أو الأوصياء لضمان الوصول السليم إلى المحتوى.`,
          fr: `Pour accéder au contenu de ${service.name}, les utilisateurs doivent s'abonner en utilisant le crédit de leur fournisseur de téléphonie mobile. La création de compte est gérée par les parents ou tuteurs, garantissant que le contenu est accessible de manière appropriée.`,
          es: `Para acceder al contenido de ${service.name}, los usuarios deben suscribirse utilizando el crédito de su proveedor de telefonía móvil. La creación de cuentas está gestionada por los padres o tutores, lo que garantiza que el contenido sea accesado de manera adecuada.`,
          id: `Untuk mengakses konten di ${service.name}, pengguna harus berlangganan menggunakan kredit penyedia seluler mereka. Pembuatan akun dikelola oleh orang tua atau wali, memastikan bahwa konten diakses dengan tepat.`,
          th: `ในการเข้าถึงเนื้อหาบน ${service.name} ผู้ใช้จะต้องสมัครสมาชิกโดยใช้เครดิตจากผู้ให้บริการโทรศัพท์มือถือ การสร้างบัญชีจะได้รับการจัดการโดยผู้ปกครองหรือผู้ดูแล เพื่อให้มั่นใจว่ามีการเข้าถึงเนื้อหาอย่างเหมาะสม`,
          pl: `Aby uzyskać dostęp do treści na ${service.name}, użytkownicy muszą subskrybować, korzystając z kredytu swojego dostawcy usług mobilnych. Tworzenie konta jest zarządzane przez rodziców lub opiekunów, zapewniając odpowiedni dostęp do treści.`,
          ro: `Pentru a accesa conținutul de pe ${service.name}, utilizatorii trebuie să se aboneze folosind creditul furnizorului lor de telefonie mobilă. Crearea contului este gestionată de părinți sau tutori, asigurându-se că accesul la conținut este realizat corespunzător.`,
          cz: `Pro přístup k obsahu na ${service.name} musí uživatelé provést předplatné pomocí kreditu svého mobilního operátora. Vytvoření účtu je spravováno rodiči nebo opatrovníky, kteří zajišťují, že obsah je přístupný správným způsobem.`,
          ni: `To access the content on ${service.name}, users must subscribe using their mobile provider's credit. Account creation is managed by parents or guardians, ensuring that the content is accessed appropriately.`
        }
      }
    },    
    {
      title: {
        en: `4. Content Available on ${service.name}`,
        ar: `4. المحتوى المتاح على ${service.name}`,
        fr: `4. Contenu disponible sur ${service.name}`,
        es: `4. Contenido disponible en ${service.name}`,
        id: `4. Konten yang Tersedia di ${service.name}`,
        th: `4. เนื้อหาที่มีอยู่ใน ${service.name}`,
        pl: `4. Dostępne treści na ${service.name}`, // Polish
        ro: `4. Conținut disponibil pe ${service.name}`, // Romanian
        cz: `4. Obsah dostupný na ${service.name}`, // Czech
        ni: `4. Content Available on ${service.name}` // Nigerian (similar to English)
      },
      content: {
        title: {
          en: `Content Available on ${service.name}`,
          ar: `المحتوى المتاح على ${service.name}`,
          fr: `Contenu disponible sur ${service.name}`,
          es: `Contenido disponible en ${service.name}`,
          id: `Konten yang Tersedia di ${service.name}`,
          th: `เนื้อหาที่มีอยู่ใน ${service.name}`,
          pl: `Dostępne treści na ${service.name}`, // Polish
          ro: `Conținut disponibil pe ${service.name}`, // Romanian
          cz: `Obsah dostupný na ${service.name}`, // Czech
          ni: `Content Available on ${service.name}` // Nigerian
        },
        description: {
          en: `${service.name} offers a variety of in-house created videos for children, including educational, fun, and songs videos. Please note that there is no user-generated content on this platform.`,
          ar: `يقدم ${service.name} مجموعة متنوعة من مقاطع الفيديو المصممة خصيصًا للأطفال، بما في ذلك مقاطع فيديو تعليمية وممتعة وأغاني. يرجى ملاحظة أنه لا يوجد محتوى منشأ من قبل المستخدمين على هذه المنصة.`,
          fr: `${service.name} propose une variété de vidéos créées en interne pour les enfants, y compris des vidéos éducatives, amusantes et des chansons. Veuillez noter qu'il n'y a aucun contenu généré par les utilisateurs sur cette plateforme.`,
          es: `${service.name} ofrece una variedad de videos creados internamente para niños, incluidos videos educativos, divertidos y de canciones. Tenga en cuenta que no hay contenido generado por los usuarios en esta plataforma.`,
          id: `${service.name} menawarkan berbagai video yang dibuat secara internal untuk anak-anak, termasuk video edukatif, menyenangkan, dan lagu. Harap dicatat bahwa tidak ada konten buatan pengguna di platform ini.`,
          th: `${service.name} นำเสนอวิดีโอหลากหลายประเภทที่สร้างขึ้นเองสำหรับเด็กๆ รวมถึงวิดีโอการศึกษา สนุกสนาน และเพลง โปรดทราบว่าไม่มีเนื้อหาที่สร้างโดยผู้ใช้บนแพลตฟอร์มนี้`,
          pl: `${service.name} oferuje różnorodne filmy stworzone wewnętrznie dla dzieci, w tym filmy edukacyjne, zabawne oraz piosenki. Należy pamiętać, że na tej platformie nie ma treści generowanych przez użytkowników.`, // Polish
          ro: `${service.name} oferă o varietate de videoclipuri create intern pentru copii, inclusiv videoclipuri educaționale, amuzante și cântece. Vă rugăm să rețineți că nu există conținut generat de utilizatori pe această platformă.`, // Romanian
          cz: `${service.name} nabízí různé interně vytvořené videa pro děti, včetně vzdělávacích, zábavných a písniček. Všimněte si, že na této platformě nejsou žádné uživatelsky generované obsah.`, // Czech
          ni: `${service.name} offers a variety of in-house created videos for children, including educational, fun, and songs videos. Please note that there is no user-generated content on this platform.` // Nigerian
        }
      }
    },    
    {
      title: {
        en: "5. Privacy and Data Collection",
        ar: "5. الخصوصية وجمع البيانات",
        fr: "5. Vie privée et collecte de données",
        es: "5. Privacidad y recopilación de datos",
        id: "5. Privasi dan Pengumpulan Data",
        th: "5. ความเป็นส่วนตัวและการเก็บข้อมูล",
        pl: "5. Prywatność i zbieranie danych", // Polish
        ro: "5. Confidențialitate și colectarea datelor", // Romanian
        cz: "5. Ochrana osobních údajů a sběr dat", // Czech
        ni: "5. Privacy and Data Collection" // Nigerian (similar to English)
      },
      content: {
        title: {
          en: "Privacy and Data Collection",
          ar: "الخصوصية وجمع البيانات",
          fr: "Vie privée et collecte de données",
          es: "Privacidad y recopilación de datos",
          id: "Privasi dan Pengumpulan Data",
          th: "ความเป็นส่วนตัวและการเก็บข้อมูล",
          pl: "Prywatność i zbieranie danych", // Polish
          ro: "Confidențialitate și colectarea datelor", // Romanian
          cz: "Ochrana osobních údajů a sběr dat", // Czech
          ni: "Privacy and Data Collection" // Nigerian
        },
        description: {
          en: `${service.name} may collect data for the purposes of improving our service, marketing, and promotional activities. The specific data collected and its intended use will be clearly stated at the time of collection. Please review our Privacy Policy Page for more details.`,
          ar: `قد يقوم ${service.name} بجمع البيانات لأغراض تحسين الخدمة والأنشطة التسويقية والترويجية. سيتم تحديد البيانات المحددة التي يتم جمعها والغرض منها بوضوح في وقت جمعها. يرجى مراجعة صفحة سياسة الخصوصية الخاصة بنا للحصول على مزيد من التفاصيل.`,
          fr: `${service.name} peut collecter des données à des fins d'amélioration de notre service, de marketing et d'activités promotionnelles. Les données spécifiques collectées et leur utilisation prévue seront clairement indiquées au moment de la collecte. Veuillez consulter notre page Politique de confidentialité pour plus de détails.`,
          es: `${service.name} puede recopilar datos con el propósito de mejorar nuestro servicio, actividades de marketing y promoción. Los datos específicos recopilados y su uso previsto se indicarán claramente en el momento de la recopilación. Consulte nuestra página de Política de privacidad para obtener más detalles.`,
          id: `${service.name} dapat mengumpulkan data untuk tujuan meningkatkan layanan kami, pemasaran, dan kegiatan promosi. Data spesifik yang dikumpulkan dan penggunaannya akan dijelaskan dengan jelas pada saat pengumpulan. Harap tinjau halaman Kebijakan Privasi kami untuk lebih jelasnya.`,
          th: `${service.name} อาจรวบรวมข้อมูลเพื่อวัตถุประสงค์ในการปรับปรุงบริการ การตลาด และกิจกรรมส่งเสริมการขาย ข้อมูลเฉพาะที่รวบรวมและการใช้งานที่ตั้งใจจะใช้จะระบุไว้อย่างชัดเจนในขณะทำการรวบรวม โปรดตรวจสอบหน้าข้อมูลนโยบายความเป็นส่วนตัวของเราสำหรับรายละเอียดเพิ่มเติม`,
          pl: `${service.name} może zbierać dane w celu ulepszania naszej usługi, działań marketingowych i promocyjnych. Konkretne dane zbierane i ich zamierzony cel zostaną wyraźnie określone w momencie zbierania. Prosimy zapoznać się z naszą stroną Polityki prywatności, aby uzyskać więcej informacji.`, // Polish
          ro: `${service.name} poate colecta date în scopul îmbunătățirii serviciilor noastre, marketingului și activităților promoționale. Datele specifice colectate și utilizarea lor vor fi clar indicate în momentul colectării. Vă rugăm să consultați pagina noastră Politica de confidențialitate pentru mai multe detalii.`, // Romanian
          cz: `${service.name} může shromažďovat údaje za účelem zlepšení našich služeb, marketingu a propagačních aktivit. Konkrétní shromažďované údaje a jejich zamýšlené použití budou jasně uvedeny v době sběru. Podívejte se na naši stránku Zásady ochrany osobních údajů pro více informací.`, // Czech
          ni: `${service.name} may collect data for the purposes of improving our service, marketing, and promotional activities. The specific data collected and its intended use will be clearly stated at the time of collection. Please review our Privacy Policy Page for more details.` // Nigerian
        }
      }
    },    
    {
      title: {
        en: "6. User Conduct",
        ar: "6. سلوك المستخدم",
        fr: "6. Conduite de l'utilisateur",
        es: "6. Conducta del usuario",
        id: "6. Perilaku Pengguna",
        th: "6. พฤติกรรมของผู้ใช้",
        pl: "6. Zachowanie użytkownika", // Polish
        ro: "6. Comportamentul utilizatorului", // Romanian
        cz: "6. Chování uživatele", // Czech
        ni: "6. User Conduct" // Nigerian (similar to English)
      },
      content: {
        title: {
          en: "User Conduct",
          ar: "سلوك المستخدم",
          fr: "Conduite de l'utilisateur",
          es: "Conducta del usuario",
          id: "Perilaku Pengguna",
          th: "พฤติกรรมของผู้ใช้",
          pl: "Zachowanie użytkownika", // Polish
          ro: "Comportamentul utilizatorului", // Romanian
          cz: "Chování uživatele", // Czech
          ni: "User Conduct" // Nigerian
        },
        description: {
          en: `There are no specific rules regarding user behavior on ${service.name}. However, as a platform designed for children, we expect all users to engage with the content responsibly.`,
          ar: `لا توجد قواعد محددة بشأن سلوك المستخدم على ${service.name}. ومع ذلك، كمنصة مصممة للأطفال، نتوقع أن يتعامل جميع المستخدمين مع المحتوى بشكل مسؤول.`,
          fr: `Il n'y a pas de règles spécifiques concernant le comportement des utilisateurs sur ${service.name}. Cependant, en tant que plateforme conçue pour les enfants, nous nous attendons à ce que tous les utilisateurs interagissent de manière responsable avec le contenu.`,
          es: `No hay reglas específicas sobre el comportamiento del usuario en ${service.name}. Sin embargo, como plataforma diseñada para niños, esperamos que todos los usuarios interactúen con el contenido de manera responsable.`,
          id: `Tidak ada aturan khusus mengenai perilaku pengguna di ${service.name}. Namun, sebagai platform yang dirancang untuk anak-anak, kami mengharapkan semua pengguna berinteraksi dengan konten secara bertanggung jawab.`,
          th: `ไม่มีข้อกำหนดเฉพาะเกี่ยวกับพฤติกรรมของผู้ใช้บน ${service.name} อย่างไรก็ตาม ในฐานะแพลตฟอร์มที่ออกแบบสำหรับเด็ก เราคาดหวังให้ผู้ใช้ทุกคนมีความรับผิดชอบในการใช้เนื้อหา`,
          pl: `Nie ma określonych zasad dotyczących zachowania użytkowników na ${service.name}. Jednakże, jako platforma zaprojektowana dla dzieci, oczekujemy, że wszyscy użytkownicy będą odpowiedzialnie angażować się w treści.`, // Polish
          ro: `Nu există reguli specifice referitoare la comportamentul utilizatorilor pe ${service.name}. Cu toate acestea, fiind o platformă concepută pentru copii, așteptăm ca toți utilizatorii să interacționeze responsabil cu conținutul.`, // Romanian
          cz: `Neexistují žádná specifická pravidla týkající se chování uživatelů na ${service.name}. Nicméně, jako platforma navržená pro děti, očekáváme, že všichni uživatelé budou s obsahem zacházet zodpovědně.`, // Czech
          ni: `There are no specific rules regarding user behavior on ${service.name}. However, as a platform designed for children, we expect all users to engage with the content responsibly.` // Nigerian
        }
      }
    },    
    {
      title: {
        en: "7. Intellectual Property",
        ar: "7. الملكية الفكرية",
        fr: "7. Propriété intellectuelle",
        es: "7. Propiedad intelectual",
        id: "7. Hak Kekayaan Intelektual",
        th: "7. ทรัพย์สินทางปัญญา",
        pl: "7. Własność intelektualna", // Polish
        ro: "7. Proprietatea intelectuală", // Romanian
        cz: "7. Duševní vlastnictví", // Czech
        ni: "7. Intellectual Property" // Nigerian (similar to English)
      },
      content: {
        title: {
          en: "Intellectual Property",
          ar: "الملكية الفكرية",
          fr: "Propriété intellectuelle",
          es: "Propiedad intelectual",
          id: "Hak Kekayaan Intelektual",
          th: "ทรัพย์สินทางปัญญา",
          pl: "Własność intelektualna", // Polish
          ro: "Proprietatea intelectuală", // Romanian
          cz: "Duševní vlastnictví", // Czech
          ni: "Intellectual Property" // Nigerian
        },
        description: {
          en: `All video content on ${service.name} is the property of SecondProfit and is protected by copyright laws. Users are not permitted to share, reproduce, or distribute the content without explicit permission.`,
          ar: `جميع مقاطع الفيديو على ${service.name} هي ملك لشركة SecondProfit وتحميها قوانين حقوق النشر. لا يُسمح للمستخدمين بمشاركة أو إعادة إنتاج أو توزيع المحتوى دون إذن صريح.`,
          fr: `Tout le contenu vidéo sur ${service.name} est la propriété de SecondProfit et est protégé par les lois sur le droit d'auteur. Les utilisateurs ne sont pas autorisés à partager, reproduire ou distribuer le contenu sans permission explicite.`,
          es: `Todo el contenido de video en ${service.name} es propiedad de SecondProfit y está protegido por las leyes de derechos de autor. Los usuarios no tienen permiso para compartir, reproducir o distribuir el contenido sin el permiso explícito.`,
          id: `Semua konten video di ${service.name} adalah milik SecondProfit dan dilindungi oleh undang-undang hak cipta. Pengguna tidak diizinkan untuk berbagi, mereproduksi, atau mendistribusikan konten tanpa izin eksplisit.`,
          th: `เนื้อหาวิดีโอทั้งหมดใน ${service.name} เป็นทรัพย์สินของ SecondProfit และได้รับการคุ้มครองโดยกฎหมายลิขสิทธิ์ ผู้ใช้ไม่ได้รับอนุญาตให้แชร์ ทำซ้ำ หรือแจกจ่ายเนื้อหาโดยไม่ได้รับอนุญาต`,
          pl: `Wszystkie treści wideo na ${service.name} są własnością SecondProfit i są chronione prawami autorskimi. Użytkownicy nie mają pozwolenia na udostępnianie, reprodukowanie ani dystrybucję treści bez wyraźnego zezwolenia.`, // Polish
          ro: `Toate conținuturile video de pe ${service.name} sunt proprietatea SecondProfit și sunt protejate de legile drepturilor de autor. Utilizatorii nu au permisiunea de a partaja, reproduce sau distribui conținutul fără permisiune explicită.`, // Romanian
          cz: `Veškerý video obsah na ${service.name} je majetkem SecondProfit a je chráněn autorskými právy. Uživatelé nemají povoleno sdílet, reprodukovat ani distribuovat obsah bez výslovného souhlasu.`, // Czech
          ni: `All video content on ${service.name} is the property of SecondProfit and is protected by copyright laws. Users are not permitted to share, reproduce, or distribute the content without explicit permission.` // Nigerian
        }
      }
    },    
    {
      title: {
        en: "8. Liability and Disclaimers",
        ar: "8. المسؤولية وإخلاء المسؤولية",
        fr: "8. Responsabilité et décharges",
        es: "8. Responsabilidad y renuncias",
        id: "8. Kewajiban dan Penafian",
        th: "8. ความรับผิดและข้อปฏิเสธ",
        pl: "8. Odpowiedzialność i zrzeczenia się odpowiedzialności", // Polish
        ro: "8. Răspundere și renunțări", // Romanian
        cz: "8. Odpovědnost a zřeknutí se odpovědnosti", // Czech
        ni: "8. Liability and Disclaimers" // Nigerian (similar to English)
      },
      content: {
        title: {
          en: "Liability and Disclaimers",
          ar: "المسؤولية وإخلاء المسؤولية",
          fr: "Responsabilité et décharges",
          es: "Responsabilidad y renuncias",
          id: "Kewajiban dan Penafian",
          th: "ความรับผิดและข้อปฏิเสธ",
          pl: "Odpowiedzialność i zrzeczenia się odpowiedzialności", // Polish
          ro: "Răspundere și renunțări", // Romanian
          cz: "Odpovědnost a zřeknutí se odpovědnosti", // Czech
          ni: "Liability and Disclaimers" // Nigerian
        },
        description: {
          en: `${service.name} is not responsible for any inaccuracies in the content provided. Additionally, we are not liable for any technical issues or other problems that may arise from the use of our service.`,
          ar: `${service.name} غير مسؤول عن أي أخطاء في المحتوى المقدم. بالإضافة إلى ذلك، نحن لسنا مسؤولين عن أي مشاكل فنية أو مشاكل أخرى قد تنشأ عن استخدام خدمتنا.`,
          fr: `${service.name} n'est pas responsable des inexactitudes dans le contenu fourni. De plus, nous ne sommes pas responsables des problèmes techniques ou autres qui pourraient découler de l'utilisation de notre service.`,
          es: `${service.name} no es responsable de ninguna inexactitud en el contenido proporcionado. Además, no somos responsables de problemas técnicos u otros problemas que puedan surgir del uso de nuestro servicio.`,
          id: `${service.name} tidak bertanggung jawab atas ketidakakuratan dalam konten yang disediakan. Selain itu, kami tidak bertanggung jawab atas masalah teknis atau masalah lain yang mungkin timbul dari penggunaan layanan kami.`,
          th: `${service.name} ไม่รับผิดชอบต่อความไม่ถูกต้องใดๆ ในเนื้อหาที่ให้ไว้ นอกจากนี้เรายังไม่รับผิดชอบต่อปัญหาทางเทคนิคหรือปัญหาอื่นๆ ที่อาจเกิดขึ้นจากการใช้บริการของเรา`,
          pl: `${service.name} nie ponosi odpowiedzialności za jakiekolwiek nieścisłości w dostarczonym materiale. Ponadto, nie ponosimy odpowiedzialności za problemy techniczne ani inne problemy, które mogą wyniknąć z korzystania z naszej usługi.`, // Polish
          ro: `${service.name} nu este responsabil pentru inexactitățile din conținutul furnizat. De asemenea, nu suntem responsabili pentru probleme tehnice sau alte probleme care pot apărea din utilizarea serviciului nostru.`, // Romanian
          cz: `${service.name} nenese odpovědnost za žádné nepřesnosti v poskytnutém obsahu. Dále neneseme odpovědnost za technické problémy nebo jiné problémy, které mohou vzniknout při používání naší služby.`, // Czech
          ni: `${service.name} is not responsible for any inaccuracies in the content provided. Additionally, we are not liable for any technical issues or other problems that may arise from the use of our service.` // Nigerian
        }
      }
    },    
    {
      title: {
        en: "9. Changes to the Terms and Conditions",
        ar: "9. تغييرات في الشروط والأحكام",
        fr: "9. Modifications des conditions générales",
        es: "9. Cambios en los términos y condiciones",
        id: "9. Perubahan pada Syarat dan Ketentuan",
        th: "9. การเปลี่ยนแปลงข้อกำหนดและเงื่อนไข",
        pl: "9. Zmiany w warunkach użytkowania", // Polish
        ro: "9. Modificări ale termenilor și condițiilor", // Romanian
        cz: "9. Změny podmínek", // Czech
        ni: "9. Changes to the Terms and Conditions" // Nigerian (similar to English)
      },
      content: {
        title: {
          en: "Changes to the Terms and Conditions",
          ar: "تغييرات في الشروط والأحكام",
          fr: "Modifications des conditions générales",
          es: "Cambios en los términos y condiciones",
          id: "Perubahan pada Syarat dan Ketentuan",
          th: "การเปลี่ยนแปลงข้อกำหนดและเงื่อนไข",
          pl: "Zmiany w warunkach użytkowania", // Polish
          ro: "Modificări ale termenilor și condițiilor", // Romanian
          cz: "Změny podmínek", // Czech
          ni: "Changes to the Terms and Conditions" // Nigerian
        },
        description: {
          en: `Users should periodically check the terms and conditions, as any changes will be effective immediately. By signing up and using ${service.name}, you agree to these terms and any future updates.`,
          ar: `يجب على المستخدمين مراجعة الشروط والأحكام دوريًا، حيث أن أي تغييرات ستصبح سارية المفعول فورًا. بالتسجيل واستخدام ${service.name}، فإنك توافق على هذه الشروط وأي تحديثات مستقبلية.`,
          fr: `Les utilisateurs doivent consulter périodiquement les termes et conditions, car toute modification prendra effet immédiatement. En vous inscrivant et en utilisant ${service.name}, vous acceptez ces termes et toute mise à jour future.`,
          es: `Los usuarios deben revisar periódicamente los términos y condiciones, ya que cualquier cambio será efectivo inmediatamente. Al registrarse y usar ${service.name}, usted acepta estos términos y cualquier actualización futura.`,
          id: `Pengguna harus secara berkala memeriksa syarat dan ketentuan, karena perubahan apa pun akan berlaku segera. Dengan mendaftar dan menggunakan ${service.name}, Anda menyetujui syarat ini dan pembaruan di masa mendatang.`,
          th: `ผู้ใช้ควรตรวจสอบข้อกำหนดและเงื่อนไขเป็นระยะๆ เนื่องจากการเปลี่ยนแปลงใดๆ จะมีผลในทันที การลงทะเบียนและการใช้ ${service.name} หมายความว่าคุณยอมรับข้อกำหนดเหล่านี้และการอัปเดตในอนาคต`,
          pl: `Użytkownicy powinni regularnie sprawdzać warunki użytkowania, ponieważ wszelkie zmiany będą miały natychmiastowy skutek. Rejestrując się i korzystając z ${service.name}, zgadzasz się na te warunki i przyszłe aktualizacje.`, // Polish
          ro: `Utilizatorii trebuie să verifice periodic termenii și condițiile, deoarece orice modificare va intra în vigoare imediat. Prin înscrierea și utilizarea ${service.name}, sunteți de acord cu acești termeni și orice actualizări viitoare.`, // Romanian
          cz: `Uživatelé by měli pravidelně kontrolovat podmínky, protože jakékoli změny budou okamžitě účinné. Registrací a používáním ${service.name} souhlasíte s těmito podmínkami a jakýmikoli budoucími aktualizacemi.`, // Czech
          ni: `Users should periodically check the terms and conditions, as any changes will be effective immediately. By signing up and using ${service.name}, you agree to these terms and any future updates.` // Nigerian
        }
      }
    },    
    {
      title: {
        en: "10. Contact Information",
        ar: "10. معلومات الاتصال",
        fr: "10. Coordonnées",
        es: "10. Información de contacto",
        id: "10. Informasi Kontak",
        th: "10. ข้อมูลการติดต่อ",
        pl: "10. Informacje kontaktowe", // Polish
        ro: "10. Informații de contact", // Romanian
        cz: "10. Kontaktní informace", // Czech
        ni: "10. Contact Information" // Nigerian (similar to English)
      },
      content: {
        title: {
          en: "Contact Information",
          ar: "معلومات الاتصال",
          fr: "Coordonnées",
          es: "Información de contacto",
          id: "Informasi Kontak",
          th: "ข้อมูลการติดต่อ",
          pl: "Informacje kontaktowe", // Polish
          ro: "Informații de contact", // Romanian
          cz: "Kontaktní informace", // Czech
          ni: "Contact Information" // Nigerian
        },
        description: {
          en: `If you have any questions or concerns about these terms, please contact us via our Contact Page or email us at ${service.supportMail}.`,
          ar: `إذا كانت لديك أي أسئلة أو مخاوف بشأن هذه الشروط، يرجى الاتصال بنا عبر صفحة الاتصال الخاصة بنا أو مراسلتنا عبر البريد الإلكتروني على ${service.supportMail}.`,
          fr: `Si vous avez des questions ou des préoccupations concernant ces conditions, veuillez nous contacter via notre page de contact ou par email à ${service.supportMail}.`,
          es: `Si tiene alguna pregunta o inquietud sobre estos términos, contáctenos a través de nuestra página de contacto o envíenos un correo electrónico a ${service.supportMail}.`,
          id: `Jika Anda memiliki pertanyaan atau kekhawatiran tentang syarat ini, harap hubungi kami melalui halaman Kontak kami atau email kami di ${service.supportMail}.`,
          th: `หากคุณมีคำถามหรือข้อกังวลเกี่ยวกับข้อกำหนดเหล่านี้ โปรดติดต่อเราผ่านทางหน้าติดต่อหรือส่งอีเมลมาที่ ${service.supportMail}`,
          pl: `Jeśli masz jakiekolwiek pytania lub wątpliwości dotyczące tych warunków, skontaktuj się z nami za pośrednictwem naszej strony kontaktowej lub wyślij e-mail na adres ${service.supportMail}.`, // Polish
          ro: `Dacă aveți întrebări sau nelămuriri cu privire la acești termeni, vă rugăm să ne contactați prin pagina noastră de contact sau să ne trimiteți un e-mail la ${service.supportMail}.`, // Romanian
          cz: `Pokud máte jakékoliv dotazy nebo obavy ohledně těchto podmínek, kontaktujte nás prostřednictvím naší kontaktní stránky nebo nám pošlete e-mail na adresu ${service.supportMail}.`, // Czech
          ni: `If you have any questions or concerns about these terms, please contact us via our Contact Page or email us at ${service.supportMail}.` // Nigerian
        }
      }
    }    
  ],
};


export default termsData;
