const sideNavBtn = document.getElementById("toggle-side-menu");
const sideDrawer = document.getElementById("drawer-menu");
const closeSideDrawer = document.getElementById("close-side-menu");

/* Toggles side menu on mobile*/
const toggleSideMenu = () => {
  sideDrawer.classList.toggle("hide");
};

sideNavBtn.addEventListener("click", toggleSideMenu);
closeSideDrawer.addEventListener("click", toggleSideMenu);
