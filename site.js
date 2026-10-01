const DEFAULT_LANGUAGE = "en";
const LANGUAGE_STORAGE_KEY = "cv_language";

const PAGE_TITLES = {
  en: {
    index: "Kacper Pasiński – Environmental Engineer",
    projects: "Projects – Kacper Pasiński",
  },
  pl: {
    index: "Kacper Pasiński – Inżynier środowiska",
    projects: "Projekty – Kacper Pasiński",
  },
};

const TRANSLATIONS = {
  en: {
    "hero.subtitle": "Environmental Engineer and sustainability specialist",
    "hero.usp":
      "I deliver compliance-ready environmental documentation and optimization plans that shorten approval cycles and reduce operational waste.",
    "hero.cta.pdf": "Save as PDF",
    "hero.cta.contact": "Contact",
    "hero.status": "Open to opportunities",
    "profile.role": "Environmental Engineer",
    "common.menu": "Menu",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "common.footer": "© 2026 Kacper Pasiński",
    "index.about.heading": "About",
    "index.about.lead":
      "I help industrial and infrastructure teams move from uncertainty to approved environmental decisions using clear documentation, measurable audits, and practical implementation plans.",
    "index.contact.email": "Email",
    "index.contact.location": "Location",
    "index.contact.location_value": "Warsaw, Poland",
    "index.contact.linkedin": "LinkedIn",
    "index.contact.copy": "Copy",
    "index.contact.copied": "Copied",
    "exp.heading": "Experience",
    "exp.item1.title": "Environmental Protection Specialist",
    "exp.item1.company": "EcoConsult",
    "exp.item1.period": "2023 – present",
    "exp.item1.impact":
      "Shortened environmental decision preparation by standardizing EIA and permit workflow.",
    "exp.item1.a1":
      "Prepared 30+ documentation packages for permits and reporting.",
    "exp.item1.a2":
      "Reduced audit follow-up time by 25% through corrective action templates.",
    "exp.item1.a3":
      "Coordinated cross-team reviews with investors and administration bodies.",
    "exp.item2.title": "Process Engineer",
    "exp.item2.company": "XYZ Manufacturing Plant",
    "exp.item2.period": "2021 – 2023",
    "exp.item2.impact":
      "Improved utility efficiency with measurable monthly KPI tracking and process updates.",
    "exp.item2.a1":
      "Delivered energy reduction roadmap and execution plan across production lines.",
    "exp.item2.a2":
      "Built KPI dashboards in Excel and Power BI for production and EHS leaders.",
    "exp.item2.a3":
      "Standardized operational EHS instructions for recurring processes.",
    "exp.item3.title": "Junior EHS Specialist",
    "exp.item3.company": "Green Industry",
    "exp.item3.period": "2020 – 2021",
    "exp.item3.impact":
      "Improved baseline compliance discipline by introducing repeatable monitoring routines.",
    "exp.item3.a1":
      "Maintained complete waste records and monthly reporting packs.",
    "exp.item3.a2":
      "Tracked procedure compliance and escalated nonconformities early.",
    "exp.item3.a3":
      "Supported inspections, trainings, and operational safety reviews.",
    "edu.heading": "Education",
    "edu.item1.title": "Environmental Engineering – BEng",
    "edu.item1.company": "Warsaw University of Technology",
    "edu.item1.period": "2017 – 2021",
    "edu.item1.desc":
      "Specialization: environmental protection technologies, water and wastewater management, process modeling.",
    "edu.item2.title": "Courses and Certifications",
    "edu.item2.company": "Industry training",
    "edu.item2.period": "2021 – 2025",
    "edu.item2.li1": "ISO 14001 internal auditor",
    "edu.item2.li2": "Data analysis in Excel and Power BI",
    "edu.item2.li3": "GIS fundamentals in environmental analysis",
    "skills.heading": "Skills",
    "skills.group.methods": "Methods",
    "skills.group.tools": "Tools",
    "skills.group.domains": "Domains",
    "skills.m1": "EIA documentation",
    "skills.m2": "Environmental audits",
    "skills.m3": "Emission reporting",
    "skills.m4": "LCA support",
    "skills.d1": "Energy efficiency",
    "skills.d2": "Waste management",
    "skills.d3": "Permitting and compliance",
    "skills.d4": "Cross-team communication",
    "projects.heading": "Selected Projects",
    "projects.item1.title": "Environmental Audit for an Industrial Plant",
    "projects.item1.desc":
      "A comprehensive review of emission areas and an action plan to reduce environmental footprint.",
    "projects.item1.impact":
      "Delivered a prioritized roadmap for compliance actions and reporting quality.",
    "projects.item1.badge3": "Reporting",
    "projects.item2.title": "Energy Consumption Optimization",
    "projects.item2.desc":
      "An analytics project based on measurement data, completed with implemented process improvements.",
    "projects.item2.impact":
      "Introduced KPI cadence for utilities and identified the highest-return efficiency measures.",
    "projects.item3.title": "Waste Management Model",
    "projects.item3.desc":
      "Development of a segregation and transfer model, including documentation and implementation timeline.",
    "projects.item3.impact":
      "Improved waste traceability and clarified responsibilities per process stream.",
    "projects.item3.badge3": "Planning",
    "projects.item4.title": "Compliance Reporting Sprint",
    "projects.item4.desc":
      "Short-cycle improvement project focused on monthly environmental reporting consistency and turnaround.",
    "projects.item4.impact":
      "Reduced report preparation friction by introducing templates and role-based ownership.",
  },
  pl: {
    "hero.subtitle":
      "Inżynier środowiska i specjalista ds. zrównoważonego rozwoju",
    "hero.usp":
      "Przygotowuję dokumentację środowiskową gotową do procedur administracyjnych oraz plany optymalizacji, które skracają czas uzyskania decyzji i ograniczają straty operacyjne.",
    "hero.cta.pdf": "Zapisz jako PDF",
    "hero.cta.contact": "Kontakt",
    "hero.status": "Otwarty na współpracę",
    "profile.role": "Inżynier środowiska",
    "common.menu": "Menu",
    "nav.about": "O mnie",
    "nav.experience": "Doświadczenie",
    "nav.education": "Edukacja",
    "nav.skills": "Umiejętności",
    "nav.projects": "Projekty",
    "common.footer": "© 2026 Kacper Pasiński",
    "index.about.heading": "O mnie",
    "index.about.lead":
      "Pomagam zespołom przemysłowym i infrastrukturalnym przejść od niepewności do zatwierdzonych decyzji środowiskowych – dzięki czytelnej dokumentacji, mierzalnym audytom i praktycznym planom wdrożeń.",
    "index.contact.email": "E-mail",
    "index.contact.location": "Lokalizacja",
    "index.contact.location_value": "Warszawa, Polska",
    "index.contact.linkedin": "LinkedIn",
    "index.contact.copy": "Kopiuj",
    "index.contact.copied": "Skopiowano",
    "exp.heading": "Doświadczenie",
    "exp.item1.title": "Specjalista ds. ochrony środowiska",
    "exp.item1.company": "EcoConsult",
    "exp.item1.period": "2023 – obecnie",
    "exp.item1.impact":
      "Skrócenie przygotowania decyzji środowiskowych dzięki standaryzacji procesu OOŚ i pozwoleń.",
    "exp.item1.a1":
      "Przygotowanie ponad 30 pakietów dokumentacji do pozwoleń i raportowania.",
    "exp.item1.a2":
      "Skrócenie czasu realizacji zaleceń poaudytowych o 25% dzięki szablonom działań korygujących.",
    "exp.item1.a3":
      "Koordynacja przeglądów między zespołami, inwestorami i administracją.",
    "exp.item2.title": "Inżynier procesu",
    "exp.item2.company": "Zakład Produkcyjny XYZ",
    "exp.item2.period": "2021 – 2023",
    "exp.item2.impact":
      "Poprawa efektywności zużycia mediów dzięki comiesięcznemu monitorowaniu KPI i zmianom procesowym.",
    "exp.item2.a1":
      "Przygotowanie i wdrożenie planu redukcji zużycia energii dla linii produkcyjnych.",
    "exp.item2.a2":
      "Budowa dashboardów KPI w Excelu i Power BI dla produkcji i EHS.",
    "exp.item2.a3":
      "Standaryzacja instrukcji operacyjnych EHS dla procesów powtarzalnych.",
    "exp.item3.title": "Młodszy specjalista EHS",
    "exp.item3.company": "Green Industry",
    "exp.item3.period": "2020 – 2021",
    "exp.item3.impact":
      "Poprawa dyscypliny w zakresie zgodności dzięki wprowadzeniu powtarzalnych rutyn monitoringu.",
    "exp.item3.a1":
      "Prowadzenie kompletnej ewidencji odpadów i miesięcznych pakietów raportowych.",
    "exp.item3.a2":
      "Monitorowanie zgodności z procedurami i wczesna eskalacja niezgodności.",
    "exp.item3.a3": "Wsparcie inspekcji, szkoleń i przeglądów bezpieczeństwa.",
    "edu.heading": "Edukacja",
    "edu.item1.title": "Inżynieria środowiska – studia inżynierskie",
    "edu.item1.company": "Politechnika Warszawska",
    "edu.item1.period": "2017 – 2021",
    "edu.item1.desc":
      "Specjalizacja: technologie ochrony środowiska, gospodarka wodno-ściekowa, modelowanie procesów.",
    "edu.item2.title": "Kursy i certyfikaty",
    "edu.item2.company": "Szkolenia branżowe",
    "edu.item2.period": "2021 – 2025",
    "edu.item2.li1": "Audytor wewnętrzny ISO 14001",
    "edu.item2.li2": "Analiza danych w Excelu i Power BI",
    "edu.item2.li3": "Podstawy GIS w analizie środowiskowej",
    "skills.heading": "Umiejętności",
    "skills.group.methods": "Metody",
    "skills.group.tools": "Narzędzia",
    "skills.group.domains": "Obszary",
    "skills.m1": "Dokumentacja OOŚ",
    "skills.m2": "Audyty środowiskowe",
    "skills.m3": "Raportowanie emisji",
    "skills.m4": "Wsparcie LCA",
    "skills.d1": "Efektywność energetyczna",
    "skills.d2": "Gospodarka odpadami",
    "skills.d3": "Pozwolenia i zgodność",
    "skills.d4": "Komunikacja międzydziałowa",
    "projects.heading": "Wybrane projekty",
    "projects.item1.title": "Audyt środowiskowy zakładu przemysłowego",
    "projects.item1.desc":
      "Kompleksowy przegląd obszarów emisyjnych i plan działań ograniczających ślad środowiskowy.",
    "projects.item1.impact":
      "Priorytetowa mapa działań na rzecz zgodności i jakości raportowania.",
    "projects.item1.badge3": "Raportowanie",
    "projects.item2.title": "Optymalizacja zużycia energii",
    "projects.item2.desc":
      "Projekt analityczny oparty na danych pomiarowych, zakończony wdrożeniem usprawnień procesowych.",
    "projects.item2.impact":
      "Wdrożenie cyklu KPI dla mediów oraz wskazanie działań o najwyższym zwrocie.",
    "projects.item3.title": "Model gospodarki odpadami",
    "projects.item3.desc":
      "Opracowanie modelu segregacji i przekazywania odpadów wraz z dokumentacją i harmonogramem wdrożenia.",
    "projects.item3.impact":
      "Lepsza identyfikowalność strumieni odpadów i jasny podział odpowiedzialności.",
    "projects.item3.badge3": "Planowanie",
    "projects.item4.title": "Sprint raportowania zgodności",
    "projects.item4.desc":
      "Krótki projekt usprawniający spójność i terminowość miesięcznego raportowania środowiskowego.",
    "projects.item4.impact":
      "Mniej tarcia przy przygotowaniu raportów dzięki szablonom i przypisaniu odpowiedzialności.",
  },
};

document.addEventListener("DOMContentLoaded", () => {
  setupLanguage();
  setupMobileMenu();
  setupIndexScroll();
  setupRevealAnimations();
  setupReturnToIndexFlag();
  setupScrollSpy();
  setupContactCopy();
  setupPrint();
});

function setupLanguage() {
  const toggle = document.querySelector("[data-lang-toggle]");
  if (!toggle) {
    return;
  }

  let savedLanguage = null;
  try {
    savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  } catch (_error) {
    savedLanguage = null;
  }

  const activeLanguage =
    savedLanguage === "pl" || savedLanguage === "en"
      ? savedLanguage
      : DEFAULT_LANGUAGE;

  applyLanguage(activeLanguage);

  toggle.addEventListener("click", () => {
    const currentLanguage =
      document.documentElement.lang === "pl" ? "pl" : "en";
    applyLanguage(currentLanguage === "en" ? "pl" : "en");
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
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch (_error) {
    // Storage unavailable (private mode) – language still applies for this view.
  }
  updateLanguageToggle(language);
}

function updateLanguageToggle(language) {
  const toggle = document.querySelector("[data-lang-toggle]");
  if (!toggle) {
    return;
  }

  const code = toggle.querySelector(".lang-code");
  const nextLanguage = language === "en" ? "PL" : "EN";

  toggle.setAttribute(
    "aria-label",
    language === "en" ? "Switch language to Polish" : "Switch language to English",
  );
  if (code) {
    code.textContent = nextLanguage;
  }
}

function setupMobileMenu() {
  const body = document.body;
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("header nav");

  if (!menuToggle || !nav) {
    return;
  }

  const isMobile = () => window.matchMedia("(max-width: 760px)").matches;

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

function setupIndexScroll() {
  if (document.body.dataset.page !== "index") {
    return;
  }

  let returningToIndex = false;
  let returningTarget = null;
  try {
    returningToIndex = sessionStorage.getItem("returningToIndex") === "true";
    returningTarget = sessionStorage.getItem("returningToIndexTarget");
    sessionStorage.removeItem("returningToIndex");
    sessionStorage.removeItem("returningToIndexTarget");
  } catch (_error) {
    returningToIndex = false;
  }

  const hashTarget = window.location.hash.replace("#", "");
  const target = returningToIndex ? returningTarget || "about" : hashTarget;
  const section = target ? document.getElementById(target) : null;

  if (section) {
    requestAnimationFrame(() => {
      section.scrollIntoView({ behavior: "auto", block: "start" });
    });
  }
}

function setupReturnToIndexFlag() {
  if (document.body.dataset.page !== "index") {
    return;
  }

  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", () => {
      const href = link.getAttribute("href");
      if (!href || href.startsWith("#") || href === "index.html") {
        return;
      }

      try {
        sessionStorage.setItem("returningToIndex", "true");
        sessionStorage.setItem("returningToIndexTarget", "about");
      } catch (_error) {
        // Ignore – return position is a convenience only.
      }
    });
  });
}

function setupScrollSpy() {
  if (document.body.dataset.page !== "index") {
    return;
  }

  const sectionLinks = Array.from(
    document.querySelectorAll("header nav a[href^='#']"),
  );
  if (!sectionLinks.length) {
    return;
  }

  const sections = sectionLinks
    .map((link) => {
      const id = link.getAttribute("href").slice(1);
      const section = document.getElementById(id);
      return section ? { id, section, link } : null;
    })
    .filter(Boolean);

  if (!sections.length || !("IntersectionObserver" in window)) {
    return;
  }

  const setActive = (id) => {
    sectionLinks.forEach((link) => {
      link.classList.remove("active");
      link.removeAttribute("aria-current");
    });

    const target = sections.find((item) => item.id === id);
    if (target) {
      target.link.classList.add("active");
      target.link.setAttribute("aria-current", "location");
    }
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visible.length > 0) {
        setActive(visible[0].target.id);
      }
    },
    {
      threshold: [0, 0.35, 0.55],
      rootMargin: "-35% 0px -45% 0px",
    },
  );

  sections.forEach((item) => observer.observe(item.section));
}

function setupContactCopy() {
  const copyButtons = document.querySelectorAll("[data-copy-email]");
  if (!copyButtons.length) {
    return;
  }

  const getI18n = (key) => {
    const lang = document.documentElement.lang === "pl" ? "pl" : "en";
    return (
      TRANSLATIONS[lang]?.[key] || TRANSLATIONS[DEFAULT_LANGUAGE][key] || ""
    );
  };

  const fallbackCopy = (text) => {
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "absolute";
    area.style.left = "-9999px";
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    document.body.removeChild(area);
  };

  copyButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const email = button.getAttribute("data-copy-email");
      if (!email) {
        return;
      }

      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(email);
        } else {
          fallbackCopy(email);
        }
      } catch (_error) {
        fallbackCopy(email);
      }

      button.dataset.copied = "true";
      button.textContent = getI18n("index.contact.copied");

      window.setTimeout(() => {
        button.dataset.copied = "false";
        button.textContent = getI18n("index.contact.copy");
      }, 1400);
    });
  });
}

function setupPrint() {
  document.querySelectorAll("[data-print]").forEach((button) => {
    button.addEventListener("click", () => {
      document
        .querySelectorAll(".reveal")
        .forEach((element) => element.classList.add("in-view"));
      window.print();
    });
  });
}

function setupRevealAnimations() {
  const targets = document.querySelectorAll(
    ".timeline-item, .contact-pill, .skill-category, .project-card",
  );

  if (!targets.length || !("IntersectionObserver" in window)) {
    return;
  }

  targets.forEach((target) => target.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );

  targets.forEach((target) => observer.observe(target));
}
