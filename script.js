// Mobile menu
const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobileNav");

function toggleMenu(forceOpen = null) {
  const isOpen = forceOpen !== null ? forceOpen : mobileNav.hasAttribute("hidden");
  if (isOpen) {
    mobileNav.removeAttribute("hidden");
    hamburger.setAttribute("aria-expanded", "true");
  } else {
    mobileNav.setAttribute("hidden", "");
    hamburger.setAttribute("aria-expanded", "false");
  }
}

if (hamburger && mobileNav) {
  hamburger.addEventListener("click", () => {
    const willOpen = mobileNav.hasAttribute("hidden");
    toggleMenu(willOpen);
  });

  // Close menu on link click
  mobileNav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => toggleMenu(false));
  });
}

// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) e.target.classList.add("is-visible");
  });
}, { threshold: 0.12 });

reveals.forEach((el) => io.observe(el));

// Year
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();
