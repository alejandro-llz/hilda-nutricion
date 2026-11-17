// =========================================================
// Nutrióloga Hilda Lizárraga — interacciones mínimas
// El menú funciona solo con CSS (checkbox); aquí solo mejoramos.
// =========================================================

// Cambia aquí el número si algún día cambia (formato internacional, sin +).
const WHATSAPP = "526622223083";


// 1. Enlaces de WhatsApp: cada botón lleva su mensaje en data-wa
document.querySelectorAll("[data-wa]").forEach((el) => {
  const msg = encodeURIComponent(el.dataset.wa);
  el.href = `https://wa.me/${WHATSAPP}?text=${msg}`;
  el.target = "_blank";
  el.rel = "noopener";
});

// 2. Cerrar el menú al tocar un enlace o con la tecla Escape
const toggle = document.getElementById("menu-toggle");
document.querySelectorAll(".nav a").forEach((a) =>
  a.addEventListener("click", () => (toggle.checked = false))
);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") toggle.checked = false;
});

// 3. Header flotante al hacer scroll
const header = document.querySelector(".header");
const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 20);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// 4. Aparición suave de secciones
const io = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    }),
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// 5. Año del footer
document.getElementById("year").textContent = new Date().getFullYear();
