const heroTabs = () => {
    const tabs = document.querySelectorAll(".hero__tabs-item");
    const tabsBody = document.querySelector(".hero__tabs-body");

    tabs.forEach((tab) => {
        tab.addEventListener("click", (e) => {
            const id = e.target.dataset.id;

            id === "rent"
                ? (tabsBody.style.borderTopLeftRadius = "6px")
                : (tabsBody.style.borderTopLeftRadius = "0px");

            tabs.forEach((tab) => {
                tab.classList.remove("active");
            });
            tab.classList.add("active");
        });
    });
};
export default heroTabs;
