// Scroll halus ke section tertentu
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({
    top: el.offsetTop - 80,
    behavior: "smooth",
  });
}

const header = document.getElementById("header");
const navToggle = document.getElementById("navToggle");

// Scroll halus untuk link di navbar + tutup menu mobile setelah klik
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href").replace("#", "");
    scrollToSection(href);
    // tutup menu di mobile
    header.classList.remove("nav-open");
  });
});

// Toggle hamburger (mobile)
if (navToggle) {
  navToggle.addEventListener("click", () => {
    header.classList.toggle("nav-open");
  });
}

// Set tahun otomatis di footer
document.getElementById("year").textContent = new Date().getFullYear();

// Navbar mengecil & kasih shadow saat scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Animasi muncul saat di-scroll (intersection observer)
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        // animasi cukup sekali
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((el) => observer.observe(el));

// Form kontak (simulasi)
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Terima kasih! Data rencana kunjunganmu sudah terkirim (simulasi).");
    contactForm.reset();
  });
}
