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
            el: ".swiper-pagination",
            clickable: true,
        },

        // Navigation arrows
        // navigation: {
        //     nextEl: ".swiper-button-next",
        //     prevEl: ".swiper-button-prev",
        // },

        // And if we need scrollbar
        // scrollbar: {
        //     el: ".swiper-scrollbar",
        // },
    });
};

export default swiperjs;
