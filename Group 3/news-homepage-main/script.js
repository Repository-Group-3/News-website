// console.log("js file connected");

function openMobileMenu() {
  console.log("clicddked");

  let menu = document.getElementById("menu");
  let overlay = document.getElementById("overlay");

  menu.classList.toggle("active");
  overlay.classList.toggle("active");
}

function closeMobileMenu() {
  let menu = document.getElementById("menu");
  let overlay = document.getElementById("overlay");

  menu.classList.remove("active");
  overlay.classList.remove("active");
}
