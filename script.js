// ========================================
// Hiten Singla Portfolio
// Simple JavaScript
// ========================================


// NAV ACTIVE LINK
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function updateActiveNav() {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 180;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    const href = link.getAttribute("href");

    if (href === "#" + current) {
      link.classList.add("active");
    }

  });

}

window.addEventListener("scroll", updateActiveNav);

updateActiveNav();


// SCROLL REVEAL
const revealElements = document.querySelectorAll(
  ".glass-card, .section-heading, .hero-text, .hero-photo-area"
);

const observer = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("revealed");

      }

    });

  },
  {
    threshold: 0.12
  }
);


revealElements.forEach(element => {

  element.classList.add("reveal");

  observer.observe(element);

});


// SMOOTH NAVIGATION
document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function(event) {

    const targetId = this.getAttribute("href");

    if (targetId === "#") return;

    const target = document.querySelector(targetId);

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });

});


// CURRENT YEAR
const yearElements = document.querySelectorAll("[data-year]");

yearElements.forEach(element => {

  element.textContent = new Date().getFullYear();

});
                }
            );

        },
        {
            rootMargin:
                "-35% 0px -55% 0px"
        }
    );


sections.forEach(
    (section) => {

        observer.observe(section);

    }
);


/* =========================
   PAGE LOAD
========================= */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "loaded"
        );

    }
);
