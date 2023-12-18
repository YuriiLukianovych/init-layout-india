const resourcesTabs = () => {
    const tabs = document.querySelectorAll(".resources__tabs-item");
    const contantsList = document.querySelectorAll(
        ".resources__tabs-body-item"
    );

    tabs.forEach((tab) => {
        tab.addEventListener("click", (e) => {
            const id = e.target.dataset.id;

            tabs.forEach((tab) => {
                tab.classList.remove("active");
            });
            tab.classList.add("active");

            contantsList.forEach((el) => {
                el.classList.add("dn");
            });

            [...contantsList]
                .find((el) => el.dataset.id === id)
                .classList.remove("dn");
        });
    });
};
export default resourcesTabs;
