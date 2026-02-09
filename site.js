const DEFAULT_LANGUAGE = "en";
const LANGUAGE_STORAGE_KEY = "cv_language";

const PAGE_TITLES = {
    en: {
        index: "CV - Kacper Pasiński",
        experience: "CV - Experience",
        education: "CV - Education",
        skills: "CV - Skills",
        projects: "CV - Projects"
    },
    pl: {
        index: "CV - Kacper Pasiński",
        experience: "CV - Doświadczenie",
        education: "CV - Edukacja",
        skills: "CV - Umiejętności",
        projects: "CV - Projekty"
    }
};

const TRANSLATIONS = {
    en: {
        "hero.eyebrow": "Online CV",
        "hero.subtitle": "Environmental Engineer and sustainability specialist",
        "hero.scroll": "Scroll",
        "profile.role": "Environmental Engineer",
        "common.menu": "Menu",
        "nav.about": "About",
        "nav.experience": "Experience",
        "nav.education": "Education",
        "nav.skills": "Skills",
        "nav.projects": "Projects",
        "common.footer": "© 2026 Kacper Pasiński. All rights reserved.",
        "index.about.heading": "About",
        "index.about.lead": "I support companies and institutions in projects focused on energy efficiency, waste management, and environmental impact analysis. I combine engineering precision with clear data communication so project decisions are faster and better justified.",
        "index.contact.email": "Email",
        "index.contact.phone": "Phone",
        "index.contact.location": "Location",
        "index.contact.location_value": "Warsaw, Poland",
        "index.contact.linkedin": "LinkedIn",
        "exp.heading": "Professional Experience",
        "exp.item1.title": "Environmental Protection Specialist",
        "exp.item1.company": "EcoConsult",
        "exp.item1.period": "2023 - present",
        "exp.item1.desc": "Leading environmental impact assessment projects and supporting clients in regulatory compliance.",
        "exp.item1.li1": "Preparing environmental documentation and emission reports",
        "exp.item1.li2": "Coordinating internal audits and corrective action plans",
        "exp.item1.li3": "Working with project teams and public administration",
        "exp.item2.title": "Process Engineer",
        "exp.item2.company": "XYZ Manufacturing Plant",
        "exp.item2.period": "2021 - 2023",
        "exp.item2.desc": "Optimizing production processes with a focus on utility consumption and waste management.",
        "exp.item2.li1": "Implemented an electricity reduction roadmap",
        "exp.item2.li2": "Analyzed production data and reported KPIs",
        "exp.item2.li3": "Standardized EHS operational procedures",
        "exp.item3.title": "Junior EHS Specialist",
        "exp.item3.company": "Green Industry",
        "exp.item3.period": "2020 - 2021",
        "exp.item3.desc": "Supporting occupational safety and environmental teams in daily operations.",
        "exp.item3.li1": "Maintained waste records and reporting data",
        "exp.item3.li2": "Monitored compliance with environmental procedures",
        "exp.item3.li3": "Participated in training sessions and workplace inspections",
        "edu.heading": "Education",
        "edu.item1.title": "Environmental Engineering - BEng",
        "edu.item1.company": "Warsaw University of Technology",
        "edu.item1.period": "2017 - 2021",
        "edu.item1.desc": "Specialization: environmental protection technologies, water and wastewater management, process modeling.",
        "edu.item2.title": "Courses and Certifications",
        "edu.item2.company": "Industry training",
        "edu.item2.period": "2021 - 2025",
        "edu.item2.li1": "ISO 14001 internal auditor",
        "edu.item2.li2": "Data analysis in Excel and Power BI",
        "edu.item2.li3": "GIS fundamentals in environmental analysis",
        "skills.heading": "Skills",
        "skills.cat1": "Technical Competencies",
        "skills.cat2": "Tools and Software",
        "skills.cat3": "Teamwork",
        "skills.tag1": "LCA analysis",
        "skills.tag2": "EHS reporting",
        "skills.tag3": "Waste management",
        "skills.tag4": "Emission accounting",
        "skills.tag5": "Project leadership",
        "skills.tag6": "Client communication",
        "skills.tag7": "Documentation work",
        "skills.tag8": "Workshops and presentations",
        "skills.tag9": "Cross-functional collaboration",
        "projects.heading": "Selected Projects",
        "projects.item1.title": "Environmental Audit for an Industrial Plant",
        "projects.item1.desc": "A comprehensive review of emission areas and an action plan to reduce environmental footprint.",
        "projects.item1.badge3": "Reporting",
        "projects.item2.title": "Energy Consumption Optimization",
        "projects.item2.desc": "An analytics project based on measurement data, completed with implemented process improvements.",
        "projects.item3.title": "Waste Management Model",
        "projects.item3.desc": "Development of a segregation and transfer model, including documentation and implementation timeline.",
        "projects.item3.badge3": "Planning"
    },
    pl: {
        "hero.eyebrow": "CV online",
        "hero.subtitle": "Inżynier środowiska i specjalista ds. zrównoważonego rozwoju",
        "hero.scroll": "Przewiń",
        "profile.role": "Inżynier środowiska",
        "common.menu": "Menu",
        "nav.about": "O mnie",
        "nav.experience": "Doświadczenie",
        "nav.education": "Edukacja",
        "nav.skills": "Umiejętności",
        "nav.projects": "Projekty",
        "common.footer": "© 2026 Kacper Pasiński. Wszystkie prawa zastrzeżone.",
        "index.about.heading": "O mnie",
        "index.about.lead": "Wspieram firmy i instytucje w projektach związanych z efektywnością energetyczną, gospodarką odpadami i analizą wpływu na środowisko. Łączę podejście inżynierskie z czytelną komunikacją danych, aby decyzje projektowe były szybsze i lepiej uzasadnione.",
        "index.contact.email": "Email",
        "index.contact.phone": "Telefon",
        "index.contact.location": "Lokalizacja",
        "index.contact.location_value": "Warszawa, Polska",
        "index.contact.linkedin": "LinkedIn",
        "exp.heading": "Doświadczenie zawodowe",
        "exp.item1.title": "Specjalista ds. Ochrony Środowiska",
        "exp.item1.company": "EcoConsult",
        "exp.item1.period": "2023 - obecnie",
        "exp.item1.desc": "Prowadzenie projektów oceny oddziaływania na środowisko i wsparcie klientów przy zgodności z wymaganiami administracyjnymi.",
        "exp.item1.li1": "Przygotowanie dokumentacji środowiskowej i raportów emisyjnych",
        "exp.item1.li2": "Koordynacja audytów wewnętrznych oraz zaleceń pokontrolnych",
        "exp.item1.li3": "Współpraca z zespołami projektowymi i urzędami",
        "exp.item2.title": "Inżynier Procesu",
        "exp.item2.company": "Zakład Produkcyjny XYZ",
        "exp.item2.period": "2021 - 2023",
        "exp.item2.desc": "Optymalizacja procesów produkcyjnych pod kątem zużycia mediów i gospodarki odpadami.",
        "exp.item2.li1": "Wdrożenie planu redukcji zużycia energii elektrycznej",
        "exp.item2.li2": "Analiza danych produkcyjnych i raportowanie KPI",
        "exp.item2.li3": "Standaryzacja procedur operacyjnych w obszarze EHS",
        "exp.item3.title": "Młodszy Specjalista EHS",
        "exp.item3.company": "Green Industry",
        "exp.item3.period": "2020 - 2021",
        "exp.item3.desc": "Wsparcie zespołu BHP i ochrony środowiska w codziennych działaniach operacyjnych.",
        "exp.item3.li1": "Ewidencja odpadów i przygotowanie danych do sprawozdań",
        "exp.item3.li2": "Kontrola zgodności z procedurami środowiskowymi",
        "exp.item3.li3": "Udział w szkoleniach i przeglądach stanowisk pracy",
        "edu.heading": "Edukacja",
        "edu.item1.title": "Inżynieria środowiska - Inżynier",
        "edu.item1.company": "Politechnika Warszawska",
        "edu.item1.period": "2017 - 2021",
        "edu.item1.desc": "Specjalizacja: technologie ochrony środowiska, gospodarka wodno-ściekowa, modelowanie procesów.",
        "edu.item2.title": "Kursy i certyfikacje",
        "edu.item2.company": "Szkolenia branżowe",
        "edu.item2.period": "2021 - 2025",
        "edu.item2.li1": "Audytor wewnętrzny ISO 14001",
        "edu.item2.li2": "Analiza danych w Excel i Power BI",
        "edu.item2.li3": "Podstawy GIS w analizie środowiskowej",
        "skills.heading": "Umiejętności",
        "skills.cat1": "Kompetencje techniczne",
        "skills.cat2": "Narzędzia i oprogramowanie",
        "skills.cat3": "Praca zespołowa",
        "skills.tag1": "Analiza LCA",
        "skills.tag2": "Raporty EHS",
        "skills.tag3": "Gospodarka odpadami",
        "skills.tag4": "Bilans emisji",
        "skills.tag5": "Prowadzenie projektów",
        "skills.tag6": "Komunikacja z klientem",
        "skills.tag7": "Praca z dokumentacją",
        "skills.tag8": "Warsztaty i prezentacje",
        "skills.tag9": "Współpraca międzydziałowa",
        "projects.heading": "Wybrane projekty",
        "projects.item1.title": "Audyt środowiskowy zakładu",
        "projects.item1.desc": "Kompleksowy przegląd obszarów emisyjnych i plan działań redukujących ślad środowiskowy.",
        "projects.item1.badge3": "Raportowanie",
        "projects.item2.title": "Optymalizacja zużycia energii",
        "projects.item2.desc": "Projekt analityczny oparty o dane pomiarowe, zakończony wdrożeniem usprawnień procesowych.",
        "projects.item3.title": "Model gospodarki odpadami",
        "projects.item3.desc": "Opracowanie modelu segregacji i przekazywania odpadów, wraz z dokumentacją i harmonogramem wdrożenia.",
        "projects.item3.badge3": "Planowanie"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const hero = document.getElementById("hero");
    const heroContent = document.querySelector(".hero-content");

    setupLanguage();
    setupMobileMenu();
    setupIndexHero(body, hero, heroContent);
    setupRevealAnimations();
    setupReturnToIndexFlag();
});

function setupLanguage() {
    const toggle = document.querySelector("[data-lang-toggle]");
    if (!toggle) {
        return;
    }

    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    const activeLanguage = savedLanguage === "pl" || savedLanguage === "en" ? savedLanguage : DEFAULT_LANGUAGE;

    applyLanguage(activeLanguage);

    toggle.addEventListener("click", () => {
        const currentLanguage = document.documentElement.lang === "pl" ? "pl" : "en";
        const nextLanguage = currentLanguage === "en" ? "pl" : "en";
        applyLanguage(nextLanguage);
    });
}

function applyLanguage(language) {
    const dictionary = TRANSLATIONS[language] || TRANSLATIONS[DEFAULT_LANGUAGE];
    const page = document.body.dataset.page || "index";
    const pageTitles = PAGE_TITLES[language] || PAGE_TITLES[DEFAULT_LANGUAGE];

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;
        if (dictionary[key]) {
            element.textContent = dictionary[key];
        }
    });

    if (pageTitles[page]) {
        document.title = pageTitles[page];
    }

    document.documentElement.lang = language;
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    updateLanguageToggle(language);
}

function updateLanguageToggle(language) {
    const toggle = document.querySelector("[data-lang-toggle]");
    if (!toggle) {
        return;
    }

    const flag = toggle.querySelector(".lang-flag");
    const code = toggle.querySelector(".lang-code");

    if (language === "en") {
        toggle.setAttribute("aria-label", "Switch language to Polish");
        if (flag) {
            flag.textContent = "🇵🇱";
        }
        if (code) {
            code.textContent = "PL";
        }
    } else {
        toggle.setAttribute("aria-label", "Switch language to English");
        if (flag) {
            flag.textContent = "🇬🇧";
        }
        if (code) {
            code.textContent = "EN";
        }
    }
}

function setupMobileMenu() {
    const body = document.body;
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("header nav");

    if (!menuToggle || !nav) {
        return;
    }

    const isMobile = () => window.matchMedia("(max-width: 640px)").matches;

    const closeMenu = () => {
        body.classList.remove("menu-open");
        menuToggle.setAttribute("aria-expanded", "false");
    };

    const toggleMenu = () => {
        const willOpen = !body.classList.contains("menu-open");
        body.classList.toggle("menu-open", willOpen);
        menuToggle.setAttribute("aria-expanded", String(willOpen));
    };

    menuToggle.addEventListener("click", toggleMenu);

    nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            if (isMobile()) {
                closeMenu();
            }
        });
    });

    window.addEventListener("resize", () => {
        if (!isMobile()) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });
}

function setupIndexHero(body, hero, heroContent) {
    if (!hero || !body.classList.contains("has-hero")) {
        return;
    }

    const returningToIndex = sessionStorage.getItem("returningToIndex") === "true";

    if (returningToIndex) {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
            requestAnimationFrame(() => {
                aboutSection.scrollIntoView({ behavior: "auto", block: "start" });
            });
        }
        sessionStorage.removeItem("returningToIndex");
    } else {
        window.scrollTo({ top: 0, behavior: "auto" });
    }

    const onScroll = () => {
        const viewport = window.innerHeight || 1;
        const scrollY = window.scrollY;
        const progress = Math.min(scrollY / (viewport * 0.75), 1);

        hero.style.opacity = String(1 - progress);

        if (heroContent) {
            heroContent.style.transform = `translateY(-${Math.min(scrollY * 0.25, 180)}px)`;
        }

        if (progress > 0.38) {
            body.classList.add("hero-passed");
        } else {
            body.classList.remove("hero-passed");
        }

        if (progress >= 1) {
            hero.style.pointerEvents = "none";
        } else {
            hero.style.pointerEvents = "auto";
        }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
}

function setupReturnToIndexFlag() {
    const navLinks = document.querySelectorAll("nav a");
    if (!navLinks.length) {
        return;
    }

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            const href = link.getAttribute("href");
            if (href && href !== "index.html") {
                sessionStorage.setItem("returningToIndex", "true");
            }
        });
    });
}

function setupRevealAnimations() {
    const targets = document.querySelectorAll(
        "main section, .timeline-item, .contact-item, .skill-category, .project-card"
    );

    if (!targets.length) {
        return;
    }

    targets.forEach((target, index) => {
        target.classList.add("reveal");
        target.style.transitionDelay = `${Math.min(index * 40, 240)}ms`;
    });

    if (!("IntersectionObserver" in window)) {
        targets.forEach((target) => target.classList.add("in-view"));
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );

    targets.forEach((target) => observer.observe(target));
}
