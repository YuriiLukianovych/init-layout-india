const mobileMenu = () => {
    const openBtn = document.querySelector("[data-mobile-menu-open]");
    const closeBtn = document.querySelector("[data-mobile-menu-close]");
    const mobileMenu = document.querySelector(".mobile-menu");
    const mobileMenuLinks = document.querySelectorAll(".mobile-menu__link");
    const bodyh = document.body;

    openBtn.addEventListener("click", openMenu);

    closeBtn.addEventListener("click", closeMenu);

    mobileMenuLinks.forEach((btn) => {
        btn.addEventListener("click", closeMenu);
    });

    function openMenu() {
        openBtn.classList.add("btn-hidden");
        closeBtn.classList.remove("btn-hidden");
        mobileMenu.classList.add("visible");
        bodyh.classList.toggle("is-blocked");
    }
    function closeMenu() {
        closeBtn.classList.add("btn-hidden");
        openBtn.classList.remove("btn-hidden");
        mobileMenu.classList.remove("visible");
        bodyh.classList.toggle("is-blocked");
    }
};

export default mobileMenu;
