export function headerLink() {
  window.addEventListener("scroll", () => {
    const sectionAll = document.querySelectorAll(".section");

    if (!sectionAll.length) return;

    sectionAll.forEach((section, i) => {
      const scrollDistance = window.scrollY;
      const header = document.querySelector(".header");
      const gapBetweenSectionAndHeader =
        section.offsetTop - header.clientHeight;

      if (gapBetweenSectionAndHeader <= scrollDistance) {
        const headerLinks = document.querySelectorAll(".header__item");

        if (!headerLinks.length) return;

        headerLinks.forEach((link) => {
          if (link.classList.contains("current")) {
            link.classList.remove("current");
            headerLinks[i].classList.add("current");
          }
        });
      }
    });
  });
}
