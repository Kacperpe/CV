document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const hero = document.getElementById("hero");
    const heroContent = document.querySelector(".hero-content");

    setupMobileMenu();
    setupIndexHero(body, hero, heroContent);
    setupRevealAnimations();
    setupReturnToIndexFlag();
});

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
