// Variables declarations
const mobileMenuOpen = document.querySelector(".mobile-menu-open");
const mobileMenuClose = document.querySelector(".mobile-menu-close");
const mobileLogo = document.querySelector("#logo-mobile");
// event listener for bars button
mobileMenuOpen.addEventListener("click", function () {
  mobileMenuClose.classList.remove("mobile-menu-close");
  mobileMenuOpen.classList.add("mobile-menu-close");
  mobileLogo.classList.add("hide");
});
// event listener for times button
mobileMenuClose.addEventListener("click", function () {
  mobileMenuOpen.classList.remove("mobile-menu-close");
  mobileMenuClose.classList.add("mobile-menu-close");
  mobileLogo.classList.remove("hide");
});
