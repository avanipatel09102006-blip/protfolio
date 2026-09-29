/* ====================================
   PortfolioPro - Main JavaScript
==================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ====================================
       Smooth Scrolling
    ==================================== */

    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId && targetId.startsWith("#")) {

                const targetSection = document.querySelector(targetId);

                if (targetSection) {

                    event.preventDefault();

                    targetSection.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }

        });

    });


    /* ====================================
       Contact Form
    ==================================== */

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !subject || !message) {

                alert("Please fill in all fields.");

                return;

            }

            alert(
                "Thank you, " +
                name +
                "! Your message has been received."
            );

            contactForm.reset();

        });

    }


    /* ====================================
       Scroll Reveal Animation
    ==================================== */

    const animatedElements = document.querySelectorAll(
        ".skill-card, .project-card, .about-content, .about-image, .contact-info, .contact-form"
    );

    const observer = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );

    animatedElements.forEach(function (element) {

        element.classList.add("hidden");

        observer.observe(element);

    });


    /* ====================================
       Active Navigation
    ==================================== */

    const sections = document.querySelectorAll("section[id]");

    window.addEventListener("scroll", function () {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {

                currentSection = section.getAttribute("id");

            }

        });


        navLinks.forEach(function (link) {

            link.classList.remove("active");

            if (
                link.getAttribute("href") === "#" + currentSection
            ) {

                link.classList.add("active");

            }

        });

    });


    /* ====================================
       Current Year
    ==================================== */

    const copyright = document.querySelector(".copyright");

    if (copyright) {

        const currentYear = new Date().getFullYear();

        copyright.innerHTML =
            "© " +
            currentYear +
            " Avani Patel. All Rights Reserved.";

    }


    /* ====================================
       Console Message
    ==================================== */

    console.log(
        "PortfolioPro loaded successfully 🚀"
    );

});
/* ====================================
   Back To Top
==================================== */

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });


    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}
/* ====================================
   Typing Animation
==================================== */

const typingText = document.getElementById("typing-text");

if (typingText) {

    const roles = [
        "Full Stack Developer",
        "Web Developer",
        "Software Developer"
    ];

    let roleIndex = 0;
    let characterIndex = 0;
    let isDeleting = false;

    function typeRole() {

        const currentRole = roles[roleIndex];

        if (isDeleting) {

            characterIndex--;

        } else {

            characterIndex++;

        }

        typingText.textContent =
            currentRole.substring(0, characterIndex);


        let typingSpeed = isDeleting ? 60 : 100;


        if (!isDeleting &&
            characterIndex === currentRole.length) {

            typingSpeed = 1800;

            isDeleting = true;

        }


        else if (isDeleting &&
                 characterIndex === 0) {

            isDeleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {

                roleIndex = 0;

            }

            typingSpeed = 500;

        }


        setTimeout(typeRole, typingSpeed);

    }


    typeRole();

}
/* ====================================
   Mobile Navigation
==================================== */

const menuToggle = document.getElementById("menuToggle");
const navLinksMenu = document.querySelector(".nav-links");

if (menuToggle && navLinksMenu) {

    menuToggle.addEventListener("click", function () {

        navLinksMenu.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (navLinksMenu.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });


    /* Close menu after clicking a link */

    navLinksMenu.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navLinksMenu.classList.remove("active");

            const icon = menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

}
/* ====================================
   Contact Form Validation
==================================== */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();


        if (!name || !email || !subject || !message) {

            formMessage.textContent =
                "Please fill in all the fields.";

            formMessage.className =
                "form-message error";

            return;
        }


        formMessage.textContent =
            "Thank you! Your message has been prepared successfully.";

        formMessage.className =
            "form-message success";


        contactForm.reset();

    });

}