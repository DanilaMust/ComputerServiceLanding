export function smoothScroll() {
    const menuHeaderItem = document.querySelectorAll("[data-goto]");
    if (menuHeaderItem.length) {
        menuHeaderItem.forEach((link) => {
            link.addEventListener('click', onClickLink);
        });

        function onClickLink (e) {
            const menuLink = e.currentTarget;
            const goToBlock = document.querySelector(menuLink.dataset.goto) ;
            if(goToBlock && menuLink.dataset.goto) {
                const header = document.querySelector('.header');
                const goToBlockValue = goToBlock.getBoundingClientRect().top + pageYOffset - header.offsetHeight;
                window.scrollTo({
                    top: goToBlockValue,
                    behavior: 'smooth',
                }) ;
                e.preventDefault();
                
            }
        }
    }
}
