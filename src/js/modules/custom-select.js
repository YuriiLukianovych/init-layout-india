import Choices from "choices.js";

const customSelect = () => {
    const selectElements = document.querySelectorAll(".js-choice") || null;

    if (!selectElements) {
        return;
    }

    selectElements.forEach((element) => {
        const choices = new Choices(element, {
            searchEnabled: false,
            itemSelectText: "",
        });
    });
};

export default customSelect;
