const btn = document.getElementById("menuBtn");
const drawer = document.getElementById("drawer");

function openDrawer() {
  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");
  btn.setAttribute("aria-expanded", "true");
}

function closeDrawer() {
  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
  btn.setAttribute("aria-expanded", "false");
}

btn?.addEventListener("click", () => {
  const isOpen = drawer.classList.contains("is-open");
  isOpen ? closeDrawer() : openDrawer();
});

drawer?.addEventListener("click", (e) => {
  // 背景クリックで閉じる（リンク押下は別で処理）
  if (e.target === drawer) closeDrawer();
});

document.querySelectorAll(".drawer__link").forEach((a) => {
  a.addEventListener("click", () => closeDrawer());
});

// Escで閉じる
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeDrawer();
});
