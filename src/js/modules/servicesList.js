export function servicesList() {
    const servicesSmallScreenLink = document.querySelector(".services-smallScreen__link");
    const listSmallScreenSecond = document.querySelector(".list-smallScreen__second");

    servicesSmallScreenLink.addEventListener('click', () => {
        servicesSmallScreenLink.classList.toggle("active");
        listSmallScreenSecond.classList.toggle("active");
    });
}

