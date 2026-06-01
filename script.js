const menuButton = document.querySelector(".menu-button");
const megaMenu = document.querySelector(".mega-menu");
const enquiryForm = document.querySelector(".enquiry-form");
const whatsappNumber = "918826758881";

const whatsappFloat = document.createElement("a");
whatsappFloat.className = "whatsapp-float";
whatsappFloat.href =
  "https://wa.me/918826758881?text=Hello%20Stone%20Field%20International%20School%2C%20I%20want%20to%20book%20a%20campus%20visit";
whatsappFloat.target = "_blank";
whatsappFloat.rel = "noopener noreferrer";
whatsappFloat.setAttribute("aria-label", "Send WhatsApp inquiry");
whatsappFloat.textContent = "WhatsApp";
document.body.appendChild(whatsappFloat);

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
  const data = new FormData(enquiryForm);
  const message = encodeURIComponent(
    `Hello Stone Field International School, I want to book a campus visit. Parent: ${data.get("parentName") || "Not provided"}, Phone: ${data.get("phone") || "Not provided"}, Student class: ${data.get("class") || "Not selected"}, Message: ${data.get("message") || "No message"}.`
  );
  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank", "noopener,noreferrer");
});
