function menu() {
  var menu = document.querySelector("nav");
  var menu_button = document.querySelector("#menu");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
    menu_button.style.marginLeft = "0";
    menu_button.classList.add("fa-bars");
    menu_button.classList.remove("fa-x");
  } else {
    menu.style.display = "flex";
    menu_button.style.marginLeft = "4.7px";
    menu_button.classList.add("fa-x");
    menu_button.classList.remove("fa-bars");
  }
}
