// Așteptăm ca documentul să fie încărcat complet
document.addEventListener("DOMContentLoaded", () => {
  // 1. Efect de Reveal la Scroll (Elementele apar pe măsură ce navighezi)
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Aplicăm efectul pe secțiuni și carduri
  const elementsToAnimate = document.querySelectorAll(
    ".text-box, .card, .section-title, .quote-container",
  );
  elementsToAnimate.forEach((el) => {
    el.classList.add("hidden"); // Starea inițială
    observer.observe(el);
  });

  // 2. Schimbarea stilului barei de navigare la scroll
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(255, 255, 255, 0.95)";
      navbar.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
    } else {
      navbar.style.background = "#fff";
      navbar.style.boxShadow = "none";
    }
  });

  // 3. Smooth Scroll pentru link-urile din meniu
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
