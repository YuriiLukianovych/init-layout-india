const scrollToTop = () => {
    window.onload = () => {
        const Y_COORD = 500; //number of pixels vertically when scrollToTop button needs to be displayed
        const scrollBtn = document.querySelector(".scrollToTop");
        window.onscroll = () => {
            if (window.scrollY > Y_COORD) {
                scrollBtn.classList.remove("scrollToTop__hidden");
            } else if (window.scrollY < Y_COORD) {
                scrollBtn.classList.add("scrollToTop__hidden");
            }
        };

        scrollBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth", // smooth scroll
            });
        });
    };
};
export default scrollToTop;
