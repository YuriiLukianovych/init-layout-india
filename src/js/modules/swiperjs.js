// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

const swiperjs = () => {
    // init Swiper:
    const swiper = new Swiper(".swiper", {
        // Optional parameters
        loop: true,
        speed: 800,
        spaceBetween: 100,
        autoplay: {
            delay: 3000,
        },

        // If we need pagination
        pagination: {
            el: ".hero__slider-pagination",
            clickable: true,
        },
    });
};

export default swiperjs;
