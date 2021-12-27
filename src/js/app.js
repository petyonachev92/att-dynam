import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  addAttribute();
});

function addAttribute() {
  let product = document.getElementsByClassName('product')[0];
  let info = document.getElementsByClassName('price')[0].textContent;

  product.setAttribute('data-price', info);
}