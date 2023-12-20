// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

const swiperjs = () => {
    let init = false;
    let swiper;

    function swiperCard() {
        if (window.innerWidth >= 576) {
            if (!init) {
                init = true;
                swiper = new Swiper(".swiper", {
                    loop: true,
                    speed: 800,
                    spaceBetween: 100,
                    autoplay: {
                        delay: 3000,
                    },

                    pagination: {
                        el: ".hero__slider-pagination",
                        clickable: true,
                    },
                });
            } else {
                return;
            }
        } else {
            if (init) {
                swiper.destroy();
                init = false;
            } else {
                return;
            }
        }
    }
    swiperCard();
    window.addEventListener("resize", swiperCard);
};

export default swiperjs;
