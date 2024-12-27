// Toggle Navbar visibility
function ShowNavbar() {
    const navlinks = document.querySelector('.nav-links');
    if (navlinks.style.display === 'none') {
        navlinks.style.display = 'flex'
    } else {
        navlinks.style.display = 'none'
    }
}

// Send Email function
const SendEmail = (event) => {
    event.preventDefault();

    var formData = {
        first_name: document.getElementById('first_name').value,
        last_name: document.getElementById('last_name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value
    };

    emailjs.send('service_nhe80zz', 'template_iqekdgp', formData)
        .then(function (response) {
            console.log('Email envoyé avec succès', response);
            alert('Votre message a été envoyé avec succès!');
            document.getElementById('contact-form').reset();
        }, function (error) {
            console.log('Échec de envoi de email', error);
            alert('Une erreur est survenue, veuillez réessayer.');
        });
}


// Content Web-Site
const translations = {
    en: {
        // Nav
        about: "About",
        academics: "Academics",
        admissions: "Admissions",
        why_us: "Why Us?",
        contact: "Contact Us",

        // Hero
        hero_title: "Garden Hall,Your Child’s Path to Academic Excellence",
        hero_description: "Providing an English-speaking environment with high-quality teaching delivered by experienced British educators.",
        explore_more: "Start Your Journey Today",

        // About
        about_title: "About Us",
        about_subtitle: "Founded on a vision of cultivating young minds with care",
        about_paragraph_1: "Garden Hall started with a small group of passionate educators who wanted to reimagine education. Our founders believed that a school should be more than a place to learn—it should be a second home where children feel valued and supported.",
        about_paragraph_2: "Over the years, we’ve grown into a vibrant community of educators, students, and families who share a common goal: to inspire a love of learning and nurture the unique potential of every child.",
        about_title_feature_1 : 'Our Mission :',
        about_feature_1: "To provide a world-class education that balances academic excellence with emotional and social growth.",
        about_feature_2: "To empower students with the skills they need to succeed in an ever-changing world.",
        about_feature_3: "To create a safe, inclusive environment where every child feels they belong.",
        about_icon_title: 'Happy strudent',

        // Academics
        academics_title: "Academics",
        academics_subtitle: "   We cater to students at every stage of their educational journey",
        // cards-1
        academics_title_cards_1: 'Creche',
        academics_content_cards_1: 'Laying the foundation for a lifetime of learning',
        // cards-2
        academics_title_cards_2: 'Primary',
        academics_content_cards_2: 'Building essential skills through engaging and interactive lessons.',
        // cards-3
        academics_title_cards_3: 'Secondary',
        academics_content_cards_3: 'Preparing students for the challenges of advanced learning.',
        // cards-4
        academics_title_cards_4: 'High School',
        academics_content_cards_4: 'Guiding students toward academic and personal excellence.',

        // Activities
        activities_title_1: "Extracurricular",
        activities_title_2: "Activities",
        // cards-1
        activities_title_cards_1: 'World-Class Campus',
        activities_content_cards_1: 'Our state-of-the-art campus is designed to inspire and engage students of all ages. From modern science labs to a fully equipped art studio, every corner of Garden Hall encourages exploration and creativity.',
        // cards-2
        activities_title_cards_2: 'Cutting Technology',
        activities_content_cards_2: 'Technology plays a vital role in our classrooms. With interactive learning tools and digital resources, we equip students with the skills they need for the future.',
        // cards-3
        activities_title_cards_3: 'A Love for Nature',
        activities_content_cards_3: ' As our name suggests, we’re passionate about connecting children with nature. Our campus features lush gardens, outdoor learning spaces, and eco-friendly initiatives to teach students the value of sustainability.',
        // cards-4
        activities_title_cards_4: 'Beyond the Classroom',
        activities_content_cards_4: ' Our extracurricular programs are just as important as our academics. From robotics and drama to music and sports, there’s something for every student to discover and enjoy.',

        // Admissions
        admissions_title: "Admissions",
        admissions_process_title: "Admissions Process",
        admissions_process_description: "We aim to make the admissions process as seamless and transparent as possible. Here’s how it works:",
        admissions_step1_title: "Discover Garden Hall",
        admissions_step1_description1: "Schedule a visit to see our campus, meet our team, and experience our classrooms in action.",
        admissions_step1_description2: "Join our Open House events to meet current families and learn about our programs.",
        admissions_step2_title: "Submit Your Application",
        admissions_step2_description1: "Complete our online application form. Don’t worry it’s simple and easy!",
        admissions_step2_description2: "Have questions? Our friendly admissions team is here to guide you.",
        admissions_step3_title: "Assessment & Interview",
        admissions_step3_description1: "We’ll invite your child for a relaxed assessment and interview to understand their strengths and learning style.",
        admissions_step3_description2: "This isn’t about “passing” or “failing” it’s about building a partnership to help your child succeed.",
        admissions_step4_title: "Enrollment",
        admissions_step4_description1: " Once your application is approved, we’ll walk you through the enrollment process step by step.",
        // Why Us ?
        whyus_title_1: "Why Choose",
        whyus_title_2: "Garden Hall?",
        whyus_content_1: "At Garden Hall, we offer more than just education. Our approach focuses on the holistic development of the child: academically, emotionally, and socially. With a strong community spirit and a commitment to personalized learning, we provide every child with the tools they need to succeed.",
        whyus_content_2: "we provide a safe and inclusive environment where your child will feel valued, supported, and encouraged to grow. Our dedicated staff members are passionate about helping every student reach their full potential, and our comprehensive programs ensure that no child is left behind.",

        whyus_title_cards_1: "Our Approach to Education",
        whyus_title_cards_1_1: "Teacher’s Perspective:",
        whyus_content_cards_1_1: "we offer a holistic education that combines rigorous academics with experiential learning. Our curriculum emphasizes critical thinking, creativity, and collaboration, preparing students for success in school and beyond.",
        whyus_title_cards_1_2: "Parent’s Perspective:",
        whyus_content_cards_1_2: "At Garden Hall, your child won’t just learn facts and figures—they’ll discover their passions, build lifelong friendships, and develop the confidence to chase their dreams.",

        whyus_title_cards_2: "A Focus on Individual Growth",
        whyus_title_cards_2_1: "we understand that every child is unique. That’s why we offer:",
        whyus_content_cards_2_1: "Personalized learning plans tailored to your child’s strengths and challenges.",
        whyus_content_cards_2_2: "A low student-to-teacher ratio, ensuring individualized attention.",
        whyus_content_cards_2_3: "Regular progress updates and parent-teacher collaboration to keep you informed every step of the way.",

        whyus_title_cards_3: "Our Vibrant Community",
        whyus_title_cards_3_1: "Education isn’t just about academics it’s about relationships. At Garden Hall, we pride ourselves on fostering a sense of belonging for every family.",
        whyus_content_cards_3_1: "For Parents: Join our active Parent Association and connect with other families.",
        whyus_content_cards_3_2: "For Students: Explore diverse extracurriculars, from arts and sports to leadership opportunities.",
        whyus_content_cards_3_3: "For Everyone: Celebrate together at our annual events like Cultural Fest, Science Fair, and Family Day.",

        // Contact
        contact_title: "Contact",
        contact_heading: "Join Our Garden Hall Family",
        contact_description: "We know that choosing a school is about more than test scores and rankings. It’s about finding a place where your child feels inspired, supported, and celebrated.",
        contact_form_heading: "Please fill in the information below",
        first_name: "First Name :",
        last_name: "Last Name :",
        email: "Email :",
        phone: "Phone Number :",
        submit_button: "Send Information"
    },
    fr: {
        // Nav
        about: "À propos",
        academics: "Académiques",
        admissions: "Admissions",
        why_us: "Pourquoi nous ?",
        contact: "Contactez-nous",

        // Hero
        hero_title: "Garden Hall ,Le chemin vers l'excellence académique pour votre enfant",
        hero_description: "Offrir un environnement anglophone avec un enseignement de haute qualité assuré par des éducateurs britanniques expérimentés.",
        explore_more: "Commencez votre voyage dès aujourd'hui",

        // About
        about_title: "À propos de nous",
        about_subtitle: "Fondé sur une vision de cultiver des jeunes esprits avec soin",
        about_paragraph_1: "Garden Hall a commencé avec un petit groupe d'éducateurs passionnés qui voulaient réinventer l'éducation. Nos fondateurs croyaient qu'une école devait être plus qu'un lieu d'apprentissage : elle devait être une seconde maison où les enfants se sentent valorisés et soutenus.",
        about_paragraph_2: "Au fil des ans, nous sommes devenus une communauté dynamique d'éducateurs, d'élèves et de familles qui partagent un objectif commun : inspirer l'amour de l'apprentissage et nourrir le potentiel unique de chaque enfant.",
        about_title_feature_1 : 'Notre mission :',
        about_feature_1: "Offrir une éducation de classe mondiale qui équilibre excellence académique et croissance émotionnelle et sociale.",
        about_feature_2: "Donner aux élèves les compétences dont ils ont besoin pour réussir dans un monde en constante évolution.",
        about_feature_3: "Créer un environnement sûr et inclusif où chaque enfant se sent chez lui.",
        about_icon_title: 'Clients satisfaits',

        // Academics
        academics_title: "Universitaires",
        academics_subtitle: "Nous accompagnons les étudiants à chaque étape de leur parcours éducatif",
        // cards-1
        academics_title_cards_1: 'Crèche',
        academics_content_cards_1: 'Poser les bases dune vie dapprentissage',
        // cards-2
        academics_title_cards_2: 'Primaire',
        academics_content_cards_2: 'Développer les compétences essentielles grâce à des leçons engageantes et interactives.',
        // cards-3
        academics_title_cards_3: 'Secondaire',
        academics_content_cards_3: 'Préparer les étudiants aux défis de l’apprentissage avancé.',
        // cards-4
        academics_title_cards_4: 'Lycée',
        academics_content_cards_4: 'Guider les étudiants vers l’excellence académique et personnelle.',

        // Activities
        activities_title_1: "Périscolaire",
        activities_title_2: "Activités",
        // cards-1
        activities_title_cards_1: 'Campus de classe mondiale',
        activities_content_cards_1: 'Notre campus ultramoderne est conçu pour inspirer et impliquer les étudiants de tous âges. Depuis des laboratoires scientifiques modernes à un studio dart entièrement équipé, à chaque coin du Garden Hall encourage l’exploration et la créativité.',
        // cards-2
        activities_title_cards_2: 'Technologie de coupe',
        activities_content_cards_2: 'La technologie joue un rôle essentiel dans nos salles de classe. Grâce à des outils dapprentissage interactifs et des ressources numériques, nous dotons les étudiants des compétences dont ils ont besoin pour lavenir.',
        // cards-3
        activities_title_cards_3: 'Un amour pour la nature',
        activities_content_cards_3: 'Comme notre nom l’indique, nous sommes passionnés par la connexion des enfants avec la nature. Notre campus comprend des jardins luxuriants, des espaces dapprentissage en plein air et des initiatives respectueuses de lenvironnement pour enseigner aux élèves la valeur de la durabilité.',
        // cards-4
        activities_title_cards_4: 'Au-delà de la salle de classe',
        activities_content_cards_4: 'Nos programmes parascolaires sont tout aussi importants que nos universitaires. De la robotique et du théâtre à la musique et au sport, il y a quelque chose à découvrir et à apprécier pour chaque élève.',

        // Admissions
        admissions_title: "Admissions",
        admissions_process_title: "Processus d'Admission",
        admissions_process_description: "Nous visons à rendre le processus d'admission aussi simple et transparent que possible. Voici comment cela fonctionne :",
        admissions_step1_title: "Découvrez Garden Hall",
        admissions_step1_description1: "Planifiez une visite pour voir notre campus, rencontrer notre équipe et découvrir nos salles de classe en action.",
        admissions_step1_description2: "Participez à nos journées portes ouvertes pour rencontrer des familles actuelles et en apprendre davantage sur nos programmes.",
        admissions_step2_title: "Soumettez Votre Candidature",
        admissions_step2_description1: "Remplissez notre formulaire de candidature en ligne. Ne vous inquiétez pas, c’est simple et rapide !",
        admissions_step2_description2: "Des questions ? Notre équipe d’admissions sympathique est là pour vous accompagner.",
        admissions_step3_title: "Évaluation et Entretien",
        admissions_step3_description1: "Nous inviterons votre enfant pour une évaluation et un entretien détendus afin de comprendre ses forces et son style d’apprentissage.",
        admissions_step3_description2: "Il ne s’agit pas de « réussir » ou « échouer », mais de bâtir un partenariat pour aider votre enfant à réussir.",
        admissions_step4_title: "Inscription",
        admissions_step4_description1: "Une fois votre candidature approuvée, nous vous guiderons étape par étape tout au long du processus d’inscription.",

        // why us
        whyus_title_1: "Pourquoi Choisir",
        whyus_title_2: "Garden Hall ?",
        whyus_content_1: "À Garden Hall, nous offrons plus qu’une simple éducation. Notre approche se concentre sur le développement global de l’enfant : académiquement, émotionnellement et socialement. Avec un fort esprit communautaire et un engagement envers l’apprentissage personnalisé, nous offrons à chaque enfant les outils nécessaires pour réussir.",
        whyus_content_2: "Nous offrons un environnement sûr et inclusif où votre enfant se sentira valorisé, soutenu et encouragé à grandir. Nos membres du personnel dédiés sont passionnés par l’aide à chaque élève pour atteindre son plein potentiel, et nos programmes complets garantissent qu’aucun enfant ne soit laissé pour compte.",

        whyus_title_cards_1: "Notre Approche de l’Éducation",
        whyus_title_cards_1_1: "Point de vue du professeur :",
        whyus_content_cards_1_1: "Nous offrons une éducation holistique qui combine des études rigoureuses et un apprentissage expérientiel. Notre programme met l'accent sur la pensée critique, la créativité et la collaboration, préparant ainsi les élèves à réussir à l'école et au-delà.",
        whyus_title_cards_1_2: "Point de vue des parents :",
        whyus_content_cards_1_2: "À Garden Hall, votre enfant ne se contentera pas d'apprendre des faits et des chiffres, il découvrira ses passions, tissera des amitiés durables et développera la confiance nécessaire pour poursuivre ses rêves.",

        whyus_title_cards_2: "Un Accent sur la Croissance Individuelle",
        whyus_title_cards_2_1: "Nous comprenons que chaque enfant est unique. C’est pourquoi nous offrons :",
        whyus_content_cards_2_1: "Des plans d'apprentissage personnalisés adaptés aux forces et défis de votre enfant.",
        whyus_content_cards_2_2: "Un faible ratio élèves-enseignants, garantissant une attention individualisée.",
        whyus_content_cards_2_3: "Des mises à jour régulières sur les progrès et une collaboration parent-enseignant pour vous tenir informé à chaque étape.",

        whyus_title_cards_: "Notre Communauté Dynamique",
        whyus_title_cards_3_1: "L'éducation ne consiste pas seulement à apprendre des connaissances, il s'agit aussi de relations. À Garden Hall, nous sommes fiers de cultiver un sentiment d'appartenance pour chaque famille.",
        whyus_content_cards_3_1: "Pour les parents : Rejoignez notre Association des Parents et connectez-vous avec d'autres familles.",
        whyus_content_cards_3_2: "Pour les élèves : Explorez diverses activités parascolaires, des arts et du sport aux opportunités de leadership.",
        whyus_content_cards_3_3: "Pour tous : Célébrez ensemble lors de nos événements annuels comme le Festival Culturel, le Salon des Sciences et la Journée des Familles.",

        // Contact
        contact_title: "Contact",
        contact_heading: "Rejoignez notre famille Garden Hall",
        contact_description: "Nous savons que choisir une école est bien plus que des résultats de tests et des classements. Il s'agit de trouver un endroit où votre enfant se sent inspiré, soutenu et célébré.",
        contact_form_heading: "Veuillez remplir les informations ci-dessous",
        first_name: "Prénom :",
        last_name: "Nom :",
        email: "Email :",
        phone: "Numéro de téléphone :",
        submit_button: "Envoyer les informations"
    }
};


// Change Langue
let currentLanguage = "en";
function toggleLanguage() {
    currentLanguage = currentLanguage === "en" ? "fr" : "en";
    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        if (translations[currentLanguage][key]) {
            el.textContent = translations[currentLanguage][key];
        }
    });
}