import { burger, nav, navList } from "./globals";

function transformBurger() {
  burger.classList.toggle("transform");
}

function dropDownMenu() {
  nav.classList.toggle("block-js");
  setTimeout(() => {
    navList.classList.toggle("transform-zero-js");
  }, 0);
}
function dropUpMenu() {
  navList.classList.toggle("transform-zero-js");
  setTimeout(() => {
    nav.classList.toggle("block-js");
  }, 500);
}

function transitionNavBar() {
  transformBurger();
  if (nav.classList.contains("block-js")) {
    dropUpMenu();
  } else {
    dropDownMenu();
  }
}

function scrollToViewLink(page) {
  document.getElementById(`${page}-link`).addEventListener("click", e => {
    // Need to prevent default behavior of link in order for smooth transition
    e.preventDefault();
    // Add transition to section
    document.getElementById(page).scrollIntoView({ behavior: "smooth" });
    // Close burger
    transformBurger();
    // Close dropdown
    dropDownMenu();
  });
}

export { transitionNavBar, scrollToViewLink };
