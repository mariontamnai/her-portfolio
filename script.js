const { stagger } = require("framer-motion");

const links = document.querySelectorAll('a[href^="#"]');

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();

        const form = e.target;
        const name = form.querySelector('input[name="name"]').value.trim();
        const email = form.querySelector('input[name="email"]').value.trim();
        const message = form.querySelector('textarea[name="message"]').value.trim();
        const errorDiv = document.getElementById('form-error');

        if (!name || !email || !message) {
            errorDiv.style.display = 'block';
            errorDiv.textContent = 'All fields are required.';
            return;
        };
    });
     gsap.from("header", {
       opacity: 0,
       y: -50,
       duration: 1,
     });
     gsap.from("section", {
       opacity: 0,
       y: 50,
       duration: 1,
       stagger: 0.3,
       scrollTrigger: {
       trigger: "section",
       start: "top 80%"
       }
     });

      document.querySelectorAll(".hover\\:shadow-xl").forEach(project => {
    project.addEventListener("mouseenter", () => {
      gsap.to(project, { scale: 1.05, duration: 0.3 });
    });
    project.addEventListener("mouseleave", () => {
      gsap.to(project, { scale: 1, duration: 0.3 });
    });
  });
  module.exports = {
    darkMode: "class", // Enable dark mode via class
    content: ["./*.html"],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  const toggleButton = document.getElementById("theme-toggle");
  const htmlElement = document.documentElement;


  if (localStorage.theme === "dark") {
    htmlElement.classList.add("dark");
  } else {
    htmlElement.classList.remove("dark");
  }

  // Toggle dark mode
  toggleButton.addEventListener("click", () => {
    if (htmlElement.classList.contains("dark")) {
      htmlElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      htmlElement.classList.add("dark");
      localStorage.theme = "dark";
    }
  });


