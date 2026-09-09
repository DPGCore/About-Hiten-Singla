/* =========================
   ACTIVE NAVIGATION
========================= */

const navLinks =
    document.querySelectorAll("nav a");

const sections =
    document.querySelectorAll("main section");


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (entry.isIntersecting) {

                        navLinks.forEach(
                            (link) => {

                                const target =
                                    link.getAttribute("href");

                                link.classList.toggle(
                                    "active",
                                    target ===
                                    "#" + entry.target.id
                                );

                            }
                        );

                    }

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