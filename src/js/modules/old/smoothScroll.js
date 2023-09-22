export function smoothScroll() {
  const menuLinks = document.querySelectorAll("[data-goto]");
  if (menuLinks.length) {
    menuLinks.forEach((menuLink) => {
      menuLink.addEventListener("click", onClickMenuLink);
    });
    function onClickMenuLink(e) {
      const menuLink = e.currentTarget;
      const goToBlock = document.querySelector(menuLink.dataset.goto);
      if (menuLink.dataset.goto && goToBlock) {
        const header = document.querySelector(".header");
        const goToBlockValue =
          goToBlock.getBoundingClientRect().top +
          pageYOffset -
          header.offsetHeight;
        window.scrollTo({
          top: goToBlockValue,
          behavior: "smooth",
        });
        e.preventDefault();
      }
    }
  }
}
