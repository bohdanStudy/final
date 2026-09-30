const menuButton = document.querySelector(".menu-toggle");
const siteNavigation = document.querySelector("#primary-navigation");
const desktopViewport = window.matchMedia("(min-width: 64rem)");

if (menuButton && siteNavigation) {
  const setMenuOpen = (isOpen) => {
    const shouldOpen = isOpen && !desktopViewport.matches;

    menuButton.setAttribute("aria-expanded", String(shouldOpen));
    menuButton.setAttribute(
      "aria-label",
      shouldOpen ? "Закрити меню" : "Відкрити меню",
    );
    siteNavigation.classList.toggle("is-open", shouldOpen);
  };

  menuButton.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    setMenuOpen(!isExpanded);
  });

  siteNavigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
      menuButton.focus();
    }
  });

  desktopViewport.addEventListener("change", () => setMenuOpen(false));
}