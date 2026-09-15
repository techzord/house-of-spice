// =========================
// HOUSE OF SPICE JAVASCRIPT
// =========================

document.addEventListener("DOMContentLoaded", function () {


    // =========================
    // MOBILE MENU
    // =========================

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {

            navLinks.classList.toggle("active");

        });


        // Close menu after clicking a link

        const navItems = navLinks.querySelectorAll("a");

        navItems.forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("active");

            });

        });

    }


    // =========================
    // RESERVATION FORM
    // =========================

    const reservationForm =
        document.querySelector(".reservation-form");

    if (reservationForm) {

        reservationForm.addEventListener("submit", function (event) {

            event.preventDefault();

            alert(
                "Reservation request received! Thank you for choosing House of Spice."
            );

            reservationForm.reset();

        });

    }


    // =========================
    // SCROLL REVEAL
    // =========================

    const revealElements = document.querySelectorAll(
        ".section-heading, " +
        ".about-content, " +
        ".about-visual, " +
        ".gallery-item, " +
        ".reservation-content, " +
        ".reservation-form, " +
        ".contact-heading, " +
        ".contact-info, " +
        ".contact-card"
    );


    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        revealObserver.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


        revealElements.forEach(function (element) {

            element.classList.add("reveal");

            revealObserver.observe(element);

        });

    }

});