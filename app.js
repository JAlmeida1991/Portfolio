scrollToViewLink("about");
scrollToViewLink("projects");
scrollToViewLink("contact");

transitionNavBar("burger");

function scrollToViewLink(page) {
  document.getElementById(`${page}-link`).addEventListener("click", e => {
    e.preventDefault();
    document.getElementById(page).scrollIntoView({ behavior: "smooth" });
  });
}

function transitionNavBar(burger) {
  document.querySelector(`.${burger}`).addEventListener("click", e => {
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
