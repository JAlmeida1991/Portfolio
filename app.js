scrollToView("about");
scrollToView("projects");
scrollToView("contact");

function scrollToView(page) {
  document.getElementById(`${page}-link`).addEventListener("click", e => {
    e.preventDefault();
    document.getElementById(page).scrollIntoView({ behavior: "smooth" });
  });
}
