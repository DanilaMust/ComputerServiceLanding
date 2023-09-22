export function headerLink () {
    window.addEventListener('scroll', () => {
        const sectionAll = document.querySelectorAll(".section");
        if(!sectionAll.length) return;
        sectionAll.forEach((section, i) => {
            const scrollDistance = window.scrollY;
            const header = document.querySelector('.header');
            const gapBetweenSectionAndHeader = section.offsetTop - header.clientHeight;
            if (gapBetweenSectionAndHeader <= scrollDistance) {
                const headerItem = document.querySelectorAll('.menu-header__item');

                if(!headerItem.length) return;

                headerItem.forEach((link) => {
                    if(link.classList.contains('current')) {
                        link.classList.remove('current');
                        headerItem[i].classList.add('current');
                    }
                })

            }
        })


    })
}



