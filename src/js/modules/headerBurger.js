export function headerBurger() {
  const menuHeaderBar = document.querySelector(".menu-header__bar");
  const menuHeaderBurger = document.querySelector(".menu-header__burger");
  const body = document.body;
  const menuHeaderItem = document.querySelectorAll(".menu-header__item");

  if (menuHeaderBar && menuHeaderBurger) {
    menuHeaderBurger.addEventListener("click", () => {
      menuHeaderBar.classList.toggle("active");
      menuHeaderBurger.classList.toggle("active");
      body.classList.toggle("lock");
    });

    menuHeaderItem.forEach((link) => {
      link.addEventListener("click", () => {
        menuHeaderBar.classList.remove("active");
        menuHeaderBurger.classList.remove("active");
        body.classList.remove("lock");
      });
    });
  }
}


