const toggleModeBtn = document.getElementById("toggle-mode");
const toggleMenuBtn = document.getElementById("toggle-menu");
const dotsMenu = document.getElementById("nav-dots-menu");
const lastUsedTheme = localStorage.getItem("theme");

/**Applies saved theme from storage */
if (lastUsedTheme) {
  document.documentElement.setAttribute("data-theme", lastUsedTheme);

  if (lastUsedTheme === "dark") {
    toggleModeBtn.innerHTML = `<i class="fa fa-sun-o " aria-hidden="true"></i>
        `;
  }
}

/**Changes the theme of the site */

const switchTheme = () => {
  const currentTheme =
    document.documentElement.getAttribute("data-theme") ?? null;
  if (currentTheme) {
    if (currentTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      toggleModeBtn.innerHTML = `<i class="fa fa-moon-o" aria-hidden="true"></i>`;
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      toggleModeBtn.innerHTML = `<i class="fa fa-sun-o " aria-hidden="true"></i>
      `;
    }
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    toggleModeBtn.innerHTML = `<i class="fa fa-sun-o " aria-hidden="true"></i>
    `;
  }
};

/**Toggles header menu on mobile */
const toggleMenu = () => {
  dotsMenu.classList.toggle("hide");
  dotsMenu.scrollIntoView({behavior:"smooth"});
  if (!dotsMenu.classList.contains("hide")) {
    toggleMenuBtn.innerHTML = `<i class="fa fa-close"></i>`;
  } else {
    toggleMenuBtn.innerHTML = `<i class="fa fa-ellipsis-v" aria-hidden="true"></i>
    `;
  }
};

toggleModeBtn.addEventListener("click", switchTheme);
toggleMenuBtn.addEventListener("click", toggleMenu);
