const drawer = document.getElementById("drawer");
const sideNavBtn = document.getElementById("toggle-side-menu");
const sideDrawer = document.getElementById("drawer-menu");
const closeSideDrawer = document.getElementById("close-side-menu");

/* Toggles side menu on mobile*/
const toggleSideMenu = () => {
  sideDrawer.classList.toggle("hide");
};

/**Close menu drawer */
const closeDrawer = () => {
  sideDrawer.classList.remove("hide");
};
sideNavBtn.addEventListener("click", toggleSideMenu);
closeSideDrawer.addEventListener("click", closeDrawer);
drawer.addEventListener("click", toggleSideMenu);
