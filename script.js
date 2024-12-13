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