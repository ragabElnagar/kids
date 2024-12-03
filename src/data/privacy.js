import service from "./service";

const privacyData = {
  title: {
    en: "Table of Contents",
    ar: "جدول المحتويات",
    fr: "Table des matières",
    es: "Tabla de contenido",
    id: "Daftar Isi",
    th: "สารบัญ",
  },
  items: [
    {
      title: {
        en: "1. Introduction",
        ar: "1. مقدمة",
        fr: "1. Introduction",
        es: "1. Introducción",
        id: "1. Pendahuluan",
        th: "1. บทนำ",
      },
      content: {
        title: {
          en: "Introduction",
          ar: "مقدمة",
          fr: "Introduction",
          es: "Introducción",
          id: "Pendahuluan",
          th: "บทนำ",
        },
        description: {
          en: `At ${service.name}, accessible from ${service.url}, one of our main priorities is the privacy of our young visitors and their guardians. This Privacy Policy document outlines the types of information that are collected and recorded by ${service.name} and how we use it. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us. This Privacy Policy applies only to our online activities and is valid for visitors to our website regarding the information that they share and/or we collect at ${service.name}. This policy does not apply to any information collected offline or via channels other than this website.`,
          ar: `في ${service.name}، المتاح عبر ${service.url}، من أهم أولوياتنا خصوصية زوارنا الصغار وأولياء أمورهم. يوضح هذا المستند سياسة الخصوصية الأنواع المختلفة من المعلومات التي يتم جمعها وتسجيلها بواسطة ${service.name} وكيف نستخدمها. إذا كانت لديك أسئلة إضافية أو تحتاج إلى مزيد من المعلومات حول سياسة الخصوصية الخاصة بنا، فلا تتردد في الاتصال بنا. تنطبق سياسة الخصوصية هذه فقط على أنشطتنا عبر الإنترنت وهي صالحة لزوار موقعنا الإلكتروني فيما يتعلق بالمعلومات التي يشاركونها و/أو نجمعها في ${service.name}. لا تنطبق هذه السياسة على أي معلومات يتم جمعها دون اتصال بالإنترنت أو عبر قنوات أخرى غير هذا الموقع.`,
          fr: `Chez ${service.name}, accessible depuis ${service.url}, l'une de nos principales priorités est la confidentialité de nos jeunes visiteurs et de leurs tuteurs. Ce document de politique de confidentialité décrit les types d'informations collectées et enregistrées par ${service.name} et comment nous les utilisons. Si vous avez des questions supplémentaires ou si vous avez besoin de plus d'informations sur notre politique de confidentialité, n'hésitez pas à nous contacter. Cette politique de confidentialité s'applique uniquement à nos activités en ligne et est valable pour les visiteurs de notre site Web concernant les informations qu'ils partagent et/ou que nous collectons chez ${service.name}. Cette politique ne s'applique pas à toute information collectée hors ligne ou via d'autres canaux que ce site Web.`,
          es: `En ${service.name}, accesible desde ${service.url}, una de nuestras principales prioridades es la privacidad de nuestros jóvenes visitantes y sus tutores. Este documento de política de privacidad describe los tipos de información que se recopilan y registran en ${service.name} y cómo los usamos. Si tiene preguntas adicionales o necesita más información sobre nuestra política de privacidad, no dude en contactarnos. Esta política de privacidad se aplica únicamente a nuestras actividades en línea y es válida para los visitantes de nuestro sitio web con respecto a la información que comparten y/o que recopilamos en ${service.name}. Esta política no se aplica a ninguna información recopilada fuera de línea o a través de otros canales que no sean este sitio web.`,
          id: `Di ${service.name}, yang dapat diakses dari ${service.url}, salah satu prioritas utama kami adalah privasi pengunjung muda kami dan wali mereka. Dokumen Kebijakan Privasi ini menjelaskan jenis informasi yang dikumpulkan dan dicatat oleh ${service.name} dan cara kami menggunakannya. Jika Anda memiliki pertanyaan tambahan atau memerlukan informasi lebih lanjut tentang Kebijakan Privasi kami, jangan ragu untuk menghubungi kami. Kebijakan Privasi ini hanya berlaku untuk aktivitas online kami dan berlaku bagi pengunjung ke situs web kami terkait informasi yang mereka bagikan dan/atau kami kumpulkan di ${service.name}. Kebijakan ini tidak berlaku untuk informasi yang dikumpulkan secara offline atau melalui saluran selain situs web ini.`,
          th: `ที่ ${service.name} ซึ่งเข้าถึงได้จาก ${service.url} หนึ่งในความสำคัญหลักของเราคือความเป็นส่วนตัวของผู้เยาว์ที่มาเยี่ยมชมและผู้ปกครอง เอกสารนโยบายความเป็นส่วนตัวนี้อธิบายถึงประเภทของข้อมูลที่ถูกรวบรวมและบันทึกโดย ${service.name} และวิธีที่เราใช้ข้อมูลเหล่านี้ หากคุณมีคำถามเพิ่มเติมหรือจำเป็นต้องการข้อมูลเพิ่มเติมเกี่ยวกับนโยบายความเป็นส่วนตัวของเรา โปรดอย่าลังเลที่จะติดต่อเรา นโยบายความเป็นส่วนตัวนี้ใช้เฉพาะกิจกรรมออนไลน์ของเราและมีผลบังคับใช้กับผู้เข้าชมเว็บไซต์ของเราเกี่ยวกับข้อมูลที่พวกเขาแบ่งปันและ/หรือเรารวบรวมที่ ${service.name} นโยบายนี้ไม่ใช้กับข้อมูลที่รวบรวมแบบออฟไลน์หรือผ่านช่องทางอื่นนอกเหนือจากเว็บไซต์นี้.`,
        },
      },
    },
    {
      title: {
        en: "2. Consent",
        ar: "2. الموافقة",
        fr: "2. Consentement",
        es: "2. Consentimiento",
        id: "2. Persetujuan",
        th: "2. การยินยอม",
      },
      content: {
        title: {
          en: "Consent",
          ar: "الموافقة",
          fr: "Consentement",
          es: "Consentimiento",
          id: "Persetujuan",
          th: "การยินยอม",
        },
        description: {
          en: `By using our website, you hereby consent to our Privacy Policy and agree to its terms. We encourage parents and guardians to monitor and guide their children's online activity. If you do not agree to our Privacy Policy, please do not use ${service.name}.`,
          ar: `باستخدام موقعنا الإلكتروني، فإنك توافق على سياسة الخصوصية الخاصة بنا وتوافق على شروطها. نشجع الآباء والأوصياء على مراقبة وتوجيه نشاط أطفالهم عبر الإنترنت. إذا كنت لا توافق على سياسة الخصوصية الخاصة بنا، يرجى عدم استخدام ${service.name}.`,
          fr: `En utilisant notre site Web, vous consentez par la présente à notre politique de confidentialité et acceptez ses termes. Nous encourageons les parents et les tuteurs à surveiller et à guider les activités en ligne de leurs enfants. Si vous n'êtes pas d'accord avec notre politique de confidentialité, veuillez ne pas utiliser ${service.name}.`,
          es: `Al usar nuestro sitio web, usted acepta nuestra política de privacidad y sus términos. Alentamos a los padres y tutores a monitorear y guiar la actividad en línea de sus hijos. Si no está de acuerdo con nuestra política de privacidad, no utilice ${service.name}.`,
          id: `Dengan menggunakan situs web kami, Anda dengan ini menyetujui Kebijakan Privasi kami dan menyetujui persyaratannya. Kami mendorong orang tua dan wali untuk memantau dan membimbing aktivitas online anak-anak mereka. Jika Anda tidak setuju dengan Kebijakan Privasi kami, harap jangan gunakan ${service.name}.`,
          th: `เมื่อใช้เว็บไซต์ของเรา คุณยินยอมในนโยบายความเป็นส่วนตัวของเราและยอมรับข้อกำหนด เราสนับสนุนให้พ่อแม่และผู้ปกครองดูแลและแนะนำการใช้งานออนไลน์ของบุตรหลาน หากคุณไม่เห็นด้วยกับนโยบายความเป็นส่วนตัวของเรา กรุณาอย่าใช้ ${service.name}.`,
        },
      },
    },
    {
      title: {
        en: "3. Information We Collect",
        ar: "3. المعلومات التي نجمعها",
        fr: "3. Informations que nous collectons",
        es: "3. Información que recopilamos",
        id: "3. Informasi yang Kami Kumpulkan",
        th: "3. ข้อมูลที่เรารวบรวม",
      },
      content: {
        title: {
          en: "Information We Collect",
          ar: "المعلومات التي نجمعها",
          fr: "Informations que nous collectons",
          es: "Información que recopilamos",
          id: "Informasi yang Kami Kumpulkan",
          th: "ข้อมูลที่เรารวบรวม",
        },
        description: {
          en: `The personal information that we ask you to provide, and the reasons for asking, will be made clear at the point we ask for your personal information. If you contact us directly, we may receive additional information about you or your child, such as your name, email address, phone number, the content of the message and/or attachments you may send us, and any other information you may choose to provide. We are committed to protecting the privacy and security of your child's personal information.`,
          ar: `سيتم توضيح المعلومات الشخصية التي نطلب منك تقديمها وأسباب طلبها في الوقت الذي نطلب فيه معلوماتك الشخصية. إذا اتصلت بنا مباشرة، فقد نتلقى معلومات إضافية عنك أو عن طفلك، مثل اسمك، وعنوان بريدك الإلكتروني، ورقم هاتفك، ومحتوى الرسالة و/أو المرفقات التي قد ترسلها إلينا، وأي معلومات أخرى قد تختار تقديمها. نحن ملتزمون بحماية خصوصية وأمن معلومات طفلك الشخصية.`,
          fr: `Les informations personnelles que nous vous demandons de fournir et les raisons de cette demande seront clarifiées au moment où nous vous demanderons vos informations personnelles. Si vous nous contactez directement, nous pourrions recevoir des informations supplémentaires à votre sujet ou à propos de votre enfant, telles que votre nom, adresse e-mail, numéro de téléphone, le contenu du message et/ou des pièces jointes que vous pourriez nous envoyer, ainsi que toute autre information que vous pourriez choisir de fournir. Nous nous engageons à protéger la confidentialité et la sécurité des informations personnelles de votre enfant.`,
          es: `La información personal que le pedimos que proporcione, y las razones para pedirla, se le aclararán en el momento en que le solicitemos su información personal. Si nos contacta directamente, podemos recibir información adicional sobre usted o su hijo, como su nombre, dirección de correo electrónico, número de teléfono, el contenido del mensaje y/o los archivos adjuntos que pueda enviarnos, y cualquier otra información que elija proporcionar. Nos comprometemos a proteger la privacidad y la seguridad de la información personal de su hijo.`,
          id: `Informasi pribadi yang kami minta Anda berikan, serta alasan memintanya, akan dijelaskan dengan jelas pada saat kami meminta informasi pribadi Anda. Jika Anda menghubungi kami secara langsung, kami mungkin menerima informasi tambahan tentang Anda atau anak Anda, seperti nama Anda, alamat email, nomor telepon, isi pesan dan/atau lampiran yang mungkin Anda kirimkan kepada kami, dan informasi lain yang mungkin Anda pilih untuk diberikan. Kami berkomitmen untuk melindungi privasi dan keamanan informasi pribadi anak Anda.`,
          th: `ข้อมูลส่วนบุคคลที่เราขอให้คุณให้ไว้ และเหตุผลในการขอ จะถูกอธิบายให้ชัดเจนเมื่อเราขอข้อมูลส่วนบุคคลของคุณ หากคุณติดต่อเราตรงๆ เราอาจได้รับข้อมูลเพิ่มเติมเกี่ยวกับคุณหรือบุตรหลานของคุณ เช่น ชื่อของคุณ ที่อยู่อีเมล หมายเลขโทรศัพท์ เนื้อหาของข้อความและ/หรือไฟล์แนบที่คุณอาจส่งให้เรา และข้อมูลอื่นๆ ที่คุณอาจเลือกให้ เรามุ่งมั่นที่จะปกป้องความเป็นส่วนตัวและความปลอดภัยของข้อมูลส่วนบุคคลของบุตรหลานของคุณ.`,
        },
      },
    },
    {
      title: {
        en: "4. Use of Information",
        ar: "4. استخدام المعلومات",
        fr: "4. Utilisation des informations",
        es: "4. Uso de la información",
        id: "4. Penggunaan Informasi",
        th: "4. การใช้ข้อมูล",
      },
      content: {
        title: {
          en: "Use of Information",
          ar: "استخدام المعلومات",
          fr: "Utilisation des informations",
          es: "Uso de la información",
          id: "Penggunaan Informasi",
          th: "การใช้ข้อมูล",
        },
        description: {
          en: `The information we collect is used to provide, operate, and maintain our website, improve, personalize, and expand our services, communicate with you, either directly or through one of our partners, for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.`,
          ar: `يتم استخدام المعلومات التي نجمعها لتوفير وتشغيل وصيانة موقعنا الإلكتروني، وتحسين خدماتنا وتخصيصها وتوسيعها، والتواصل معك إما مباشرة أو من خلال أحد شركائنا لأغراض خدمة العملاء، ولتزويدك بالتحديثات والمعلومات الأخرى المتعلقة بالموقع الإلكتروني، ولأغراض التسويق والترويج.`,
          fr: `Les informations que nous collectons sont utilisées pour fournir, exploiter et maintenir notre site Web, améliorer, personnaliser et étendre nos services, communiquer avec vous, soit directement, soit par l'intermédiaire de l'un de nos partenaires, pour le service client, vous fournir des mises à jour et d'autres informations relatives au site Web, et à des fins de marketing et de promotion.`,
          es: `La información que recopilamos se utiliza para proporcionar, operar y mantener nuestro sitio web, mejorar, personalizar y expandir nuestros servicios, comunicarnos con usted, ya sea directamente o a través de uno de nuestros socios, para el servicio al cliente, para proporcionarle actualizaciones y otra información relacionada con el sitio web, y para fines de marketing y promoción.`,
          id: `Informasi yang kami kumpulkan digunakan untuk menyediakan, mengoperasikan, dan memelihara situs web kami, meningkatkan, mempersonalisasi, dan memperluas layanan kami, berkomunikasi dengan Anda, baik secara langsung atau melalui salah satu mitra kami, untuk layanan pelanggan, memberikan Anda pembaruan dan informasi lain yang berkaitan dengan situs web, dan untuk tujuan pemasaran dan promosi.`,
          th: `ข้อมูลที่เรารวบรวมจะถูกใช้เพื่อจัดหา ดำเนินงาน และรักษาเว็บไซต์ของเรา ปรับปรุง ปรับเปลี่ยน และขยายบริการของเรา สื่อสารกับคุณ ไม่ว่าจะโดยตรงหรือผ่านหนึ่งในพันธมิตรของเรา เพื่อให้บริการลูกค้า แจ้งอัปเดต และข้อมูลอื่นๆ ที่เกี่ยวข้องกับเว็บไซต์ และเพื่อวัตถุประสงค์ทางการตลาดและการส่งเสริมการขาย`,
        },
      },
    },
    {
      title: {
        en: "5. Data Security",
        ar: "5. أمن البيانات",
        fr: "5. Sécurité des données",
        es: "5. Seguridad de los datos",
        id: "5. Keamanan Data",
        th: "5. ความปลอดภัยของข้อมูล",
      },
      content: {
        title: {
          en: "Data Security",
          ar: "أمن البيانات",
          fr: "Sécurité des données",
          es: "Seguridad de los datos",
          id: "Keamanan Data",
          th: "ความปลอดภัยของข้อมูล",
        },
        description: {
          en: `We implement a variety of security measures to maintain the safety of your personal information. We strive to protect your child's personal information, but no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your child's personal information, we cannot guarantee its absolute security.`,
          ar: `نقوم بتنفيذ مجموعة متنوعة من الإجراءات الأمنية للحفاظ على سلامة معلوماتك الشخصية. نحن نسعى لحماية معلومات طفلك الشخصية، ولكن لا توجد طريقة نقل عبر الإنترنت أو طريقة تخزين إلكترونية آمنة بنسبة 100%. في حين أننا نسعى جاهدين لاستخدام وسائل مقبولة تجاريًا لحماية معلومات طفلك الشخصية، لا يمكننا ضمان أمانها المطلق.`,
          fr: `Nous mettons en œuvre diverses mesures de sécurité pour protéger vos informations personnelles. Nous nous efforçons de protéger les informations personnelles de votre enfant, mais aucune méthode de transmission sur Internet, ni aucun moyen de stockage électronique n'est sécurisé à 100%. Bien que nous nous efforcions d'utiliser des moyens commercialement acceptables pour protéger les informations personnelles de votre enfant, nous ne pouvons garantir leur sécurité absolue.`,
          es: `Implementamos una variedad de medidas de seguridad para mantener la seguridad de su información personal. Nos esforzamos por proteger la información personal de su hijo, pero ningún método de transmisión por Internet o método de almacenamiento electrónico es 100% seguro. Si bien nos esforzamos por utilizar medios comercialmente aceptables para proteger la información personal de su hijo, no podemos garantizar su seguridad absoluta.`,
          id: `Kami menerapkan berbagai langkah keamanan untuk menjaga keamanan informasi pribadi Anda. Kami berupaya melindungi informasi pribadi anak Anda, namun tidak ada metode transmisi melalui Internet, atau metode penyimpanan elektronik yang 100% aman. Meskipun kami berusaha menggunakan cara yang dapat diterima secara komersial untuk melindungi informasi pribadi anak Anda, kami tidak dapat menjamin keamanannya secara mutlak.`,
          th: `เราใช้มาตรการรักษาความปลอดภัยที่หลากหลายเพื่อรักษาความปลอดภัยของข้อมูลส่วนบุคคลของคุณ เรามุ่งมั่นที่จะปกป้องข้อมูลส่วนบุคคลของบุตรหลานของคุณ แต่ไม่มีวิธีการส่งข้อมูลผ่านอินเทอร์เน็ตหรือวิธีการจัดเก็บข้อมูลทางอิเล็กทรอนิกส์ใดที่ปลอดภัย 100% แม้ว่าเราจะพยายามใช้วิธีการที่ยอมรับได้ในเชิงพาณิชย์เพื่อปกป้องข้อมูลส่วนบุคคลของบุตรหลานของคุณ แต่เราไม่สามารถรับประกันความปลอดภัยได้อย่างสมบูรณ์`,
        },
      },
    },
    {
      title: {
        en: "6. Changes to this Privacy Policy",
        ar: "6. تغييرات في سياسة الخصوصية هذه",
        fr: "6. Modifications à cette politique de confidentialité",
        es: "6. Cambios en esta política de privacidad",
        id: "6. Perubahan Kebijakan Privasi ini",
        th: "6. การเปลี่ยนแปลงนโยบายความเป็นส่วนตัวนี้",
      },
      content: {
        title: {
          en: "Changes to this Privacy Policy",
          ar: "تغييرات في سياسة الخصوصية هذه",
          fr: "Modifications à cette politique de confidentialité",
          es: "Cambios en esta política de privacidad",
          id: "Perubahan Kebijakan Privasi ini",
          th: "การเปลี่ยนแปลงนโยบายความเป็นส่วนตัวนี้",
        },
        description: {
          en: `We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We encourage you to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.`,
          ar: `قد نقوم بتحديث سياسة الخصوصية الخاصة بنا من وقت لآخر. سنقوم بإعلامك بأي تغييرات من خلال نشر سياسة الخصوصية الجديدة على هذه الصفحة. نشجعك على مراجعة سياسة الخصوصية هذه بشكل دوري لأي تغييرات. تصبح التغييرات في سياسة الخصوصية هذه سارية المفعول عند نشرها على هذه الصفحة.`,
          fr: `Nous pouvons mettre à jour notre politique de confidentialité de temps à autre. Nous vous informerons de tout changement en publiant la nouvelle politique de confidentialité sur cette page. Nous vous encourageons à consulter cette politique de confidentialité périodiquement pour toute modification. Les modifications apportées à cette politique de confidentialité sont effectives lorsqu'elles sont publiées sur cette page.`,
          es: `Podemos actualizar nuestra política de privacidad de vez en cuando. Le notificaremos cualquier cambio publicando la nueva política de privacidad en esta página. Le recomendamos que revise esta política de privacidad periódicamente para ver si hay cambios. Los cambios en esta política de privacidad entran en vigor cuando se publican en esta página.`,
          id: `Kami dapat memperbarui Kebijakan Privasi kami dari waktu ke waktu. Kami akan memberi tahu Anda tentang perubahan apa pun dengan memposting Kebijakan Privasi baru di halaman ini. Kami mendorong Anda untuk meninjau Kebijakan Privasi ini secara berkala untuk setiap perubahan. Perubahan pada Kebijakan Privasi ini berlaku saat diposting di halaman ini.`,
          th: `เราอาจอัปเดตนโยบายความเป็นส่วนตัวของเราเป็นครั้งคราว เราจะแจ้งให้คุณทราบถึงการเปลี่ยนแปลงใด ๆ โดยโพสต์นโยบายความเป็นส่วนตัวฉบับใหม่ในหน้านี้ เราขอแนะนำให้คุณทบทวนนโยบายความเป็นส่วนตัวนี้เป็นระยะ ๆ เพื่อดูการเปลี่ยนแปลง การเปลี่ยนแปลงนโยบายความเป็นส่วนตัวนี้จะมีผลเมื่อมีการโพสต์ในหน้านี้`,
        },
      },
    },
  ],
};



export default privacyData;
