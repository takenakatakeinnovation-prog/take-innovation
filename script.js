// ===== Header scroll behavior =====
const header = document.getElementById("siteHeader");
const SCROLL_TRIGGER = 80; // ナビが出るタイミング調整

function onScroll() {
  const y = window.scrollY || document.documentElement.scrollTop;
  if (y > SCROLL_TRIGGER) header.classList.add("is-scrolled");
  else header.classList.remove("is-scrolled");
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// ===== Mobile drawer =====
const btn = document.getElementById("menuBtn");
const drawer = document.getElementById("drawer");

function openDrawer() {
  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");
  btn.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden"; // 背景スクロール防止
}
function closeDrawer() {
  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
  btn.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}

btn?.addEventListener("click", () => {
  const isOpen = drawer.classList.contains("is-open");
  isOpen ? closeDrawer() : openDrawer();
});

drawer?.addEventListener("click", (e) => {
  if (e.target === drawer) closeDrawer();
});

document.querySelectorAll(".drawer__link").forEach((a) => {
  a.addEventListener("click", () => closeDrawer());
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeDrawer();
});
