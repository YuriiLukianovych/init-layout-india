const modalWindows = () => {
    const openModalBtnList = document.querySelectorAll("[data-modal-open]");
    const closeModalBtnList = document.querySelectorAll("[data-modal-close]");
    const modalList = document.querySelectorAll("[data-modal]");
    const bodyh = document.body;

    let modalWindow;

    openModalBtnList.forEach((btn) => {
        btn.addEventListener("click", openModal);
    });
    closeModalBtnList.forEach((btn) => {
        btn.addEventListener("click", closeModal);
    });

    function openModal(e) {
        const id = e.target.dataset.id;

        modalWindow = [...modalList].find((el) => el.dataset.id === id);

        modalWindow.classList.toggle("is-hidden");
        bodyh.classList.toggle("is-blocked");
    }

    function closeModal() {
        modalWindow.classList.toggle("is-hidden");
        bodyh.classList.toggle("is-blocked");
    }
};

export default modalWindows;
