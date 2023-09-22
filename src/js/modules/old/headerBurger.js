export function headerBurger() { 
  const menu = document.querySelector(".header__bar");
  const menuBtn = document.querySelector(".header__burger");
  const body = document.body;
  const headerItem = document.querySelectorAll(".header__item");

  if (menu && menuBtn) {
    menuBtn.addEventListener("click", () => {
      menu.classList.toggle("active");
      menuBtn.classList.toggle("active");
      body.classList.toggle("lock");
    });

    headerItem.forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("active");
        menuBtn.classList.remove("active");
        body.classList.remove("lock");
      });
    });
  }
}