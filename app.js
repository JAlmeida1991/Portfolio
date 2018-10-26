scrollToViewLink("about");
scrollToViewLink("projects");
scrollToViewLink("contact");

function scrollToViewLink(page) {
  document.getElementById(`${page}-link`).addEventListener("click", e => {
    e.preventDefault();
    document.getElementById(page).scrollIntoView({ behavior: "smooth" });
  });
}

// Need access to this... Arrow function sometimes fails using e.target
document.querySelector(".burger").addEventListener("click", function(e) {
  this.classList.toggle("transform");
});
