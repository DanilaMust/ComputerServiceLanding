import Swiper, { Navigation, Pagination } from "swiper";

export function slider() {
    new Swiper('.authentication__swiper', {
        modules: [Navigation, Pagination],
        pagination: {
            el:'.authentication__dots',
            clickable: true,
        }
    });
}
