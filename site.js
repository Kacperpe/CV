const DEFAULT_LANGUAGE = "en";
const LANGUAGE_STORAGE_KEY = "cv_language";

const PAGE_TITLES = {
  en: {
    index: "CV - Kacper Pasinski",
    experience: "CV - Experience",
    education: "CV - Education",
    skills: "CV - Skills",
    projects: "CV - Projects",
  },
  pl: {
    index: "CV - Kacper Pasinski",
    experience: "CV - Doswiadczenie",
    education: "CV - Edukacja",
    skills: "CV - Umiejetnosci",
    projects: "CV - Projekty",
  },
};

const TRANSLATIONS = {
  en: {
    "hero.eyebrow": "Environmental engineering brand",
    "hero.subtitle": "Environmental Engineer and sustainability specialist",
    "hero.usp":
      "I deliver compliance-ready environmental documentation and optimization plans that shorten approval cycles and reduce operational waste.",
    "hero.metric1": "EIA / OOS",
    "hero.metric2": "Compliance and permits",
    "hero.metric3": "Audits, LCA, efficiency",
    "hero.cta.pdf": "Download PDF",
    "hero.cta.contact": "Contact",
    "hero.status": "Open to opportunities",
    "hero.scroll": "Scroll",
    "profile.role": "Environmental Engineer",
    "common.menu": "Menu",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "common.footer": "� 2026 Kacper Pasinski. All rights reserved.",
    "index.about.heading": "About",
    "index.about.lead":
      "I help industrial and infrastructure teams move from uncertainty to approved environmental decisions using clear documentation, measurable audits, and practical implementation plans.",
    "index.contact.email": "Email",
    "index.contact.location": "Location",
    "index.contact.location_value": "Warsaw, Poland",
    "index.contact.linkedin": "LinkedIn",
    "index.contact.copy": "Copy",
    "index.contact.copied": "Copied",
    "exp.heading": "Professional Experience",
    "exp.item1.title": "Environmental Protection Specialist",
    "exp.item1.company": "EcoConsult",
    "exp.item1.period": "2023 - present",
    "exp.item1.impact":
      "Impact: shortened environmental decision preparation by standardizing EIA and permit workflow.",
    "exp.item1.a1":
      "Prepared 30+ documentation packages for permits and reporting.",
    "exp.item1.a2":
      "Reduced audit follow-up time by 25% through corrective action templates.",
    "exp.item1.a3":
      "Coordinated cross-team reviews with investors and administration bodies.",
    "exp.item1.desc":
      "Leading environmental impact assessment projects and supporting clients in regulatory compliance.",
    "exp.item1.li1":
      "Preparing environmental documentation and emission reports",
    "exp.item1.li2": "Coordinating internal audits and corrective action plans",
    "exp.item1.li3": "Working with project teams and public administration",
    "exp.item2.title": "Process Engineer",
    "exp.item2.company": "XYZ Manufacturing Plant",
    "exp.item2.period": "2021 - 2023",
    "exp.item2.impact":
      "Impact: improved utility efficiency with measurable monthly KPI tracking and process updates.",
    "exp.item2.a1":
      "Delivered energy reduction roadmap and execution plan across production lines.",
    "exp.item2.a2":
      "Built KPI dashboards in Excel and Power BI for production and EHS leaders.",
    "exp.item2.a3":
      "Standardized operational EHS instructions for recurring processes.",
    "exp.item2.desc":
      "Optimizing production processes with a focus on utility consumption and waste management.",
    "exp.item2.li1": "Implemented an electricity reduction roadmap",
    "exp.item2.li2": "Analyzed production data and reported KPIs",
    "exp.item2.li3": "Standardized EHS operational procedures",
    "exp.item3.title": "Junior EHS Specialist",
    "exp.item3.company": "Green Industry",
    "exp.item3.period": "2020 - 2021",
    "exp.item3.impact":
      "Impact: improved baseline compliance discipline by introducing repeatable monitoring routines.",
    "exp.item3.a1":
      "Maintained complete waste records and monthly reporting packs.",
    "exp.item3.a2":
      "Tracked procedure compliance and escalated nonconformities early.",
    "exp.item3.a3":
      "Supported inspections, trainings, and operational safety reviews.",
    "exp.item3.desc":
      "Supporting occupational safety and environmental teams in daily operations.",
    "exp.item3.li1": "Maintained waste records and reporting data",
    "exp.item3.li2": "Monitored compliance with environmental procedures",
    "exp.item3.li3":
      "Participated in training sessions and workplace inspections",
    "edu.heading": "Education",
    "edu.item1.title": "Environmental Engineering - BEng",
    "edu.item1.company": "Warsaw University of Technology",
    "edu.item1.period": "2017 - 2021",
    "edu.item1.desc":
      "Specialization: environmental protection technologies, water and wastewater management, process modeling.",
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
    "skills.group.methods": "Methods",
    "skills.group.tools": "Tools",
    "skills.group.domains": "Domains",
    "skills.level.advanced": "Advanced",
    "skills.level.mid": "Intermediate",
    "skills.m1": "EIA / OOS documentation",
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
      "Impact: delivered a prioritized roadmap for compliance actions and reporting quality.",
    "projects.item1.badge3": "Reporting",
    "projects.item2.title": "Energy Consumption Optimization",
    "projects.item2.desc":
      "An analytics project based on measurement data, completed with implemented process improvements.",
    "projects.item2.impact":
      "Impact: introduced KPI cadence for utilities and identified the highest-return efficiency measures.",
    "projects.item3.title": "Waste Management Model",
    "projects.item3.desc":
      "Development of a segregation and transfer model, including documentation and implementation timeline.",
    "projects.item3.impact":
      "Impact: improved waste traceability and clarified responsibilities per process stream.",
    "projects.item3.badge3": "Planning",
    "projects.item4.title": "Compliance Reporting Sprint",
    "projects.item4.desc":
      "Short-cycle improvement project focused on monthly environmental reporting consistency and turnaround.",
    "projects.item4.impact":
      "Impact: reduced report preparation friction by introducing templates and role-based ownership.",
  },
  pl: {
    "hero.eyebrow": "Marka inzynierii srodowiska",
    "hero.subtitle":
      "Inzynier srodowiska i specjalista ds. zr�wnowazonego rozwoju",
    "hero.usp":
      "Dostarczam dokumentacje srodowiskowa gotowa do procedur administracyjnych oraz plany optymalizacji, kt�re skracaja czas decyzji i ograniczaja straty operacyjne.",
    "hero.metric1": "EIA / OOS",
    "hero.metric2": "Zgodnosc i pozwolenia",
    "hero.metric3": "Audyty, LCA, efektywnosc",
    "hero.cta.pdf": "Pobierz PDF",
    "hero.cta.contact": "Kontakt",
    "hero.status": "Otwartosc na wsp�lprace",
    "hero.scroll": "Przewin",
    "profile.role": "Inzynier srodowiska",
    "common.menu": "Menu",
    "nav.about": "O mnie",
    "nav.experience": "Doswiadczenie",
    "nav.education": "Edukacja",
    "nav.skills": "Umiejetnosci",
    "nav.projects": "Projekty",
    "common.footer": "� 2026 Kacper Pasinski. Wszystkie prawa zastrzezone.",
    "index.about.heading": "O mnie",
    "index.about.lead":
      "Wspieram zespoly przemyslowe i infrastrukturalne w przechodzeniu od niepewnosci do zatwierdzonych decyzji srodowiskowych dzieki czytelnej dokumentacji, mierzalnym audytom i praktycznym planom wdrozen.",
    "index.contact.email": "Email",
    "index.contact.location": "Lokalizacja",
    "index.contact.location_value": "Warszawa, Polska",
    "index.contact.linkedin": "LinkedIn",
    "index.contact.copy": "Kopiuj",
    "index.contact.copied": "Skopiowano",
    "exp.heading": "Doswiadczenie zawodowe",
    "exp.item1.title": "Specjalista ds. Ochrony Srodowiska",
    "exp.item1.company": "EcoConsult",
    "exp.item1.period": "2023 - obecnie",
    "exp.item1.impact":
      "Wplyw: skr�cenie przygotowania decyzji srodowiskowych przez standaryzacje procesu OOS i pozwolen.",
    "exp.item1.a1":
      "Przygotowanie ponad 30 pakiet�w dokumentacji do pozwolen i raportowania.",
    "exp.item1.a2":
      "Skr�cenie czasu realizacji zalecen poaudytowych o 25% dzieki szablonom dzialan korygujacych.",
    "exp.item1.a3":
      "Koordynacja przeglad�w miedzy zespolami, inwestorami i administracja.",
    "exp.item1.desc":
      "Prowadzenie projekt�w oceny oddzialywania na srodowisko i wsparcie klient�w przy zgodnosci z wymaganiami administracyjnymi.",
    "exp.item1.li1":
      "Przygotowanie dokumentacji srodowiskowej i raport�w emisyjnych",
    "exp.item1.li2":
      "Koordynacja audyt�w wewnetrznych oraz zalecen pokontrolnych",
    "exp.item1.li3": "Wsp�lpraca z zespolami projektowymi i urzedami",
    "exp.item2.title": "Inzynier Procesu",
    "exp.item2.company": "Zaklad Produkcyjny XYZ",
    "exp.item2.period": "2021 - 2023",
    "exp.item2.impact":
      "Wplyw: poprawa efektywnosci medi�w dzieki cyklicznemu monitorowaniu KPI i zmianom procesowym.",
    "exp.item2.a1":
      "Przygotowanie i wdrozenie mapy redukcji zuzycia energii dla linii produkcyjnych.",
    "exp.item2.a2":
      "Budowa dashboard�w KPI w Excelu i Power BI dla produkcji i EHS.",
    "exp.item2.a3":
      "Standaryzacja instrukcji operacyjnych EHS dla proces�w powtarzalnych.",
    "exp.item2.desc":
      "Optymalizacja proces�w produkcyjnych pod katem zuzycia medi�w i gospodarki odpadami.",
    "exp.item2.li1": "Wdrozenie planu redukcji zuzycia energii elektrycznej",
    "exp.item2.li2": "Analiza danych produkcyjnych i raportowanie KPI",
    "exp.item2.li3": "Standaryzacja procedur operacyjnych w obszarze EHS",
    "exp.item3.title": "Mlodszy Specjalista EHS",
    "exp.item3.company": "Green Industry",
    "exp.item3.period": "2020 - 2021",
    "exp.item3.impact":
      "Wplyw: poprawa dyscypliny zgodnosci przez wprowadzenie powtarzalnych rutyn monitoringu.",
    "exp.item3.a1":
      "Prowadzenie kompletnej ewidencji odpad�w i miesiecznych pakiet�w raportowych.",
    "exp.item3.a2":
      "Monitorowanie zgodnosci procedur i wczesna eskalacja niezgodnosci.",
    "exp.item3.a3": "Wsparcie inspekcji, szkolen i przeglad�w bezpieczenstwa.",
    "exp.item3.desc":
      "Wsparcie zespolu BHP i ochrony srodowiska w codziennych dzialaniach operacyjnych.",
    "exp.item3.li1": "Ewidencja odpad�w i przygotowanie danych do sprawozdan",
    "exp.item3.li2": "Kontrola zgodnosci z procedurami srodowiskowymi",
    "exp.item3.li3": "Udzial w szkoleniach i przegladach stanowisk pracy",
    "edu.heading": "Edukacja",
    "edu.item1.title": "Inzynieria srodowiska - Inzynier",
    "edu.item1.company": "Politechnika Warszawska",
    "edu.item1.period": "2017 - 2021",
    "edu.item1.desc":
      "Specjalizacja: technologie ochrony srodowiska, gospodarka wodno-sciekowa, modelowanie proces�w.",
    "edu.item2.title": "Kursy i certyfikacje",
    "edu.item2.company": "Szkolenia branzowe",
    "edu.item2.period": "2021 - 2025",
    "edu.item2.li1": "Audytor wewnetrzny ISO 14001",
    "edu.item2.li2": "Analiza danych w Excel i Power BI",
    "edu.item2.li3": "Podstawy GIS w analizie srodowiskowej",
    "skills.heading": "Umiejetnosci",
    "skills.cat1": "Kompetencje techniczne",
    "skills.cat2": "Narzedzia i oprogramowanie",
    "skills.cat3": "Praca zespolowa",
    "skills.tag1": "Analiza LCA",
    "skills.tag2": "Raporty EHS",
    "skills.tag3": "Gospodarka odpadami",
    "skills.tag4": "Bilans emisji",
    "skills.tag5": "Prowadzenie projekt�w",
    "skills.tag6": "Komunikacja z klientem",
    "skills.tag7": "Praca z dokumentacja",
    "skills.tag8": "Warsztaty i prezentacje",
    "skills.tag9": "Wsp�lpraca miedzydzialowa",
    "skills.group.methods": "Metody",
    "skills.group.tools": "Narzedzia",
    "skills.group.domains": "Obszary",
    "skills.level.advanced": "Zaawansowany",
    "skills.level.mid": "Sredniozaawansowany",
    "skills.m1": "Dokumentacja EIA / OOS",
    "skills.m2": "Audyty srodowiskowe",
    "skills.m3": "Raportowanie emisji",
    "skills.m4": "Wsparcie LCA",
    "skills.d1": "Efektywnosc energetyczna",
    "skills.d2": "Gospodarka odpadami",
    "skills.d3": "Pozwolenia i zgodnosc",
    "skills.d4": "Komunikacja miedzydzialowa",
    "projects.heading": "Wybrane projekty",
    "projects.item1.title": "Audyt srodowiskowy zakladu",
    "projects.item1.desc":
      "Kompleksowy przeglad obszar�w emisyjnych i plan dzialan redukujacych slad srodowiskowy.",
    "projects.item1.impact":
      "Wplyw: dostarczenie priorytetowej mapy dzialan dla zgodnosci i jakosci raportowania.",
    "projects.item1.badge3": "Raportowanie",
    "projects.item2.title": "Optymalizacja zuzycia energii",
    "projects.item2.desc":
      "Projekt analityczny oparty o dane pomiarowe, zakonczony wdrozeniem usprawnien procesowych.",
    "projects.item2.impact":
      "Wplyw: wdrozenie cyklu KPI dla medi�w oraz identyfikacja dzialan o najwyzszym zwrocie.",
    "projects.item3.title": "Model gospodarki odpadami",
    "projects.item3.desc":
      "Opracowanie modelu segregacji i przekazywania odpad�w, wraz z dokumentacja i harmonogramem wdrozenia.",
    "projects.item3.impact":
      "Wplyw: lepsza identyfikowalnosc strumieni odpad�w i jasny podzial odpowiedzialnosci.",
    "projects.item3.badge3": "Planowanie",
    "projects.item4.title": "Sprint raportowania zgodnosci",
    "projects.item4.desc":
      "Kr�tki projekt usprawniajacy sp�jnosc i terminowosc miesiecznego raportowania srodowiskowego.",
    "projects.item4.impact":
      "Wplyw: ograniczenie tarcia przy przygotowaniu raport�w dzieki szablonom i podzialowi odpowiedzialnosci.",
  },
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
  setupScrollSpy();
  setupContactCopy();
});

function setupLanguage() {
  const toggle = document.querySelector("[data-lang-toggle]");
  if (!toggle) {
    return;
  }

  const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  const activeLanguage =
    savedLanguage === "pl" || savedLanguage === "en"
      ? savedLanguage
      : DEFAULT_LANGUAGE;

  applyLanguage(activeLanguage);

  toggle.addEventListener("click", () => {
    const currentLanguage =
      document.documentElement.lang === "pl" ? "pl" : "en";
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
      flag.textContent = "PL";
    }
    if (code) {
      code.textContent = "PL";
    }
  } else {
    toggle.setAttribute("aria-label", "Switch language to English");
    if (flag) {
      flag.textContent = "EN";
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

  const returningToIndex =
    sessionStorage.getItem("returningToIndex") === "true";
  const returningTarget = sessionStorage.getItem("returningToIndexTarget");
  const hashTarget = window.location.hash
    ? window.location.hash.replace("#", "")
    : "";

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      requestAnimationFrame(() => {
        section.scrollIntoView({ behavior: "auto", block: "start" });
      });
    }
  };

  if (returningToIndex) {
    scrollToSection(returningTarget || "about");
    sessionStorage.removeItem("returningToIndex");
    sessionStorage.removeItem("returningToIndexTarget");
  } else if (hashTarget) {
    scrollToSection(hashTarget);
  } else {
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  const onScroll = () => {
    const viewport = window.innerHeight || 1;
    const scrollY = window.scrollY;
    const progress = Math.min(scrollY / (viewport * 0.75), 1);

    hero.style.opacity = String(1 - progress);

    if (heroContent) {
      heroContent.style.transform = `translateY(-${Math.min(scrollY * 0.2, 140)}px)`;
    }

    if (progress > 0.34) {
      body.classList.add("hero-passed");
    } else {
      body.classList.remove("hero-passed");
    }

    hero.style.pointerEvents = progress >= 1 ? "none" : "auto";
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
}

function setupReturnToIndexFlag() {
  if (document.body.dataset.page !== "index") {
    return;
  }

  const navLinks = document.querySelectorAll("nav a");
  if (!navLinks.length) {
    return;
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const href = link.getAttribute("href");

      if (!href || href.startsWith("#")) {
        return;
      }

      if (href.startsWith("index.html#")) {
        const target = href.split("#")[1] || "about";
        sessionStorage.setItem("returningToIndex", "true");
        sessionStorage.setItem("returningToIndexTarget", target);
        return;
      }

      if (href !== "index.html") {
        sessionStorage.setItem("returningToIndex", "true");
        sessionStorage.setItem("returningToIndexTarget", "about");
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

  if (!sections.length) {
    return;
  }

  const clearActive = () => {
    sectionLinks.forEach((link) => {
      link.classList.remove("active");
      link.removeAttribute("aria-current");
    });
  };

  const setActive = (id) => {
    const target = sections.find((item) => item.id === id);
    if (!target) {
      return;
    }

    clearActive();
    target.link.classList.add("active");
    target.link.setAttribute("aria-current", "page");
  };

  if (!("IntersectionObserver" in window)) {
    setActive(sections[0].id);
    return;
  }

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
      threshold: [0.35, 0.55],
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

function setupRevealAnimations() {
  const targets = document.querySelectorAll(
    "main section, .timeline-item, .contact-pill, .skill-category, .project-card",
  );

  if (!targets.length) {
    return;
  }

  targets.forEach((target, index) => {
    target.classList.add("reveal");
    target.style.transitionDelay = `${Math.min(index * 35, 240)}ms`;
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
    { threshold: 0.2 },
  );

  targets.forEach((target) => observer.observe(target));
}
