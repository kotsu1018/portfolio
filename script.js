const currentUrl = window.location.href;

// TODO: 関数で改めて作成
if (currentUrl.includes("project")) {
  document.querySelector(".nav-project").classList.add("active");
}

if (currentUrl.includes("contact")) {
  document.querySelector(".nav-contact").classList.add("active");
}

if (currentUrl.includes("about")) {
  document.querySelector(".nav-about").classList.add("active");
}

const hamburgerMenu = document.querySelector(".hamburger-menu");
const menuModal = document.querySelector(".menuModal");
const modalBackground = document.querySelector(".modal_background");

function showMenu() {
  menuModal.classList.toggle("show");
  modalBackground.classList.toggle("show");
}

function checkWidth() {
  console.log(window.innerWidth);
  if (window.innerWidth > 1024) {
    menuModal.classList.remove("show");
    modalBackground.classList.remove("show");
  }
}

hamburgerMenu.addEventListener("click", showMenu);
modalBackground.addEventListener("click", showMenu);
window.addEventListener("resize", checkWidth);
