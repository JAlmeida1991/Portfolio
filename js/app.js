(function() {
  "use strict";

  scrollToViewLink("about");
  scrollToViewLink("projects");
  scrollToViewLink("contact");

  transitionNavBar();

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

  function transitionNavBar() {
    document.querySelector(".burger").addEventListener("click", e => {
      transformBurger();
      if (document.querySelector(".nav").classList.contains("block-js")) {
        dropUpMenu();
      } else {
        dropDownMenu();
      }
    });
  }

  function transformBurger() {
    document.querySelector(".burger").classList.toggle("transform");
  }

  function dropDownMenu() {
    document.querySelector(".nav").classList.toggle("block-js");
    setTimeout(() => {
      document.querySelector(".nav-list").classList.toggle("transform-zero-js");
    }, 0);
  }
  function dropUpMenu() {
    document.querySelector(".nav-list").classList.toggle("transform-zero-js");
    setTimeout(() => {
      document.querySelector(".nav").classList.toggle("block-js");
    }, 500);
  }
})();
