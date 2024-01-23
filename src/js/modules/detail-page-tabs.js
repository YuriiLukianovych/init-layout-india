const detailPageTabs = () => {
    const facilitiesTabs = document.querySelectorAll(".facilities__btn");
    const facilitiesContentsList = document.querySelectorAll(
        ".facilities__tabs-body-item"
    );

    const priceFormTabs = document.querySelectorAll(
        ".price-form__tabs-list-item"
    );
    const priceFormContentsList = document.querySelectorAll(
        ".price-form__tabs-body-item"
    );

    if (
        !facilitiesTabs ||
        !facilitiesContentsList ||
        !priceFormTabs ||
        !priceFormContentsList
    ) {
        return;
    }

    facilitiesTabs.forEach((tab) => {
        tab.addEventListener("click", (e) => {
            const id = e.target.dataset.id;

            facilitiesTabs.forEach((tab) => {
                tab.classList.remove("active");
            });
            tab.classList.add("active");

            facilitiesContentsList.forEach((el) => {
                el.classList.add("dn");
            });

            [...facilitiesContentsList]
                .find((el) => el.dataset.id === id)
                .classList.remove("dn");
        });
    });

    priceFormTabs.forEach((tab) => {
        tab.addEventListener("click", (e) => {
            const id = e.currentTarget.dataset.id;

            priceFormTabs.forEach((tab) => {
                tab.classList.remove("active");
            });
            tab.classList.add("active");

            priceFormContentsList.forEach((el) => {
                el.classList.add("dn");
            });

            [...priceFormContentsList]
                .find((el) => el.dataset.id === id)
                .classList.remove("dn");
        });
    });
};
export default detailPageTabs;
