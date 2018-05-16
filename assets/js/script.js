function handleMenu() {
    let menuItems = document.querySelectorAll(".menu > a");
    let menuButton = document.querySelector("#hamburger-menu");
    if (menuButton.classList.contains("menu-icon")) {
        menuButton.classList.remove("menu-icon");
        menuButton.classList.add("menu-close-icon");
        for (menuItem of menuItems) {
          menuItem.style.display = "block";
        }
    } else {
      menuButton.classList.add("menu-icon");
      menuButton.classList.remove("menu-close-icon");
      for (menuItem of menuItems) {
        menuItem.style.display = "none";
      }
    }
}

window.onload = function() {
  let width = document.body.clientWidth;

  if (width > 1200) {
      let menuItems = document.querySelectorAll(".menu > a");
      for (menuItem of menuItems) {
        menuItem.style.display = "block";
      }
  }
}

window.addEventListener("resize", function() {
    let width = document.body.clientWidth;

    if (width > 1200) {
      let menuItems = document.querySelectorAll(".menu > a");
      for (menuItem of menuItems) {
        menuItem.style.display = "block";
      }
    }
    else if (width < 1200) {
      let menuItems = document.querySelectorAll(".menu > a");
      let menuButton = document.querySelector("#hamburger-menu");
      for (menuItem of menuItems) {
        menuItem.style.display = "none";
      }
        menuButton.classList.add("menu-icon");
        menuButton.classList.remove("menu-close-icon");
    }
});
