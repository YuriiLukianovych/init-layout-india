// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

const swiper2js = () => {
    const slider2 = document.querySelector(".swiper2");
    const container = document.querySelector(".awards").firstElementChild;

    //second slider in Awards Section
    const swiper2 = new Swiper(".swiper2", {
        loop: true,
        speed: 800,
        spaceBetween: 100,
        autoplay: {
            delay: 3000,
        },

        pagination: {
            el: ".awards__slider-pagination",
            clickable: false,
        },

        // Navigation arrows
        navigation: {
            nextEl: ".swiper2-button-next",
            prevEl: ".swiper2-button-prev",
        },

        breakpoints: {
            // when window width is >= 768px
            768: {
                pagination: {
                    el: ".awards__slider-pagination",
                    clickable: true,
                },
            },
        },
    });

    // slider2 width:
    swiperCard2();
    window.addEventListener("resize", swiperCard2);

    function swiperCard2() {
        if (container.offsetWidth >= 1316) {
            slider2.style.width = container.offsetWidth * 0.44 - 120 + "px";
        } else if (container.offsetWidth >= 1200) {
            slider2.style.width = container.offsetWidth * 0.485 - 120 + "px";
        } else if (container.offsetWidth >= 992) {
            slider2.style.width = container.offsetWidth * 0.44 - 60 + "px";
        } else if (container.offsetWidth >= 768) {
            slider2.style.width = container.offsetWidth * 0.66 - 60 + "px";
        } else if (container.offsetWidth >= 576) {
            slider2.style.width = container.offsetWidth * 0.8 - 12 + "px";
        } else {
            slider2.style.width = container.offsetWidth * 0.83 - 60 + "px";
        }
    }
};
export default swiper2js;
