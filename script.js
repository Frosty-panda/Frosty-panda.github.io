const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");

function closeMenu() {
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation");
  siteNav.classList.remove("is-open");
}

menuButton.addEventListener("click", () => {
  const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isExpanded));
  menuButton.setAttribute("aria-label", isExpanded ? "Open navigation" : "Close navigation");
  siteNav.classList.toggle("is-open", !isExpanded);
});

siteNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    closeMenu();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

for (const image of document.querySelectorAll(".profile-photo, .hero-photo, .photo-image")) {
  const placeholder = image.nextElementSibling;
  const showImage = () => {
    image.hidden = false;
    placeholder.hidden = true;
  };

  image.addEventListener("load", showImage);
  if (image.complete && image.naturalWidth > 0) {
    showImage();
  }
}
