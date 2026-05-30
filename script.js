const menuButton = document.querySelector(".menu-button");
const megaMenu = document.querySelector(".mega-menu");
const enquiryForm = document.querySelector(".enquiry-form");

document.querySelectorAll("img[data-fallback]").forEach((image) => {
  image.addEventListener(
    "error",
    () => {
      image.src = image.dataset.fallback;
    },
    { once: true }
  );
});

function setMenu(open) {
  megaMenu?.classList.toggle("is-open", open);
  document.body.classList.toggle("menu-open", open);
  menuButton?.setAttribute("aria-expanded", String(open));
  megaMenu?.setAttribute("aria-hidden", String(!open));
}

menuButton?.addEventListener("click", () => {
  setMenu(!megaMenu?.classList.contains("is-open"));
});

megaMenu?.addEventListener("click", (event) => {
  if (event.target.matches("a")) setMenu(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});

enquiryForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = enquiryForm.querySelector("button");
  button.textContent = "Thank you. We will call you soon.";
  button.disabled = true;
});
