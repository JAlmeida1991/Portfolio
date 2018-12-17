import "@fortawesome/fontawesome-free/css/all.min.css";
import { transitionNavBar, scrollToViewLink } from "./helpers";
import { burger, links } from "./globals";

links.forEach(link => scrollToViewLink(link));
burger.addEventListener("click", transitionNavBar);
