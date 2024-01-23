import flatpickr from "flatpickr";

const datePicker = () => {
    const dateInputVirtual = document.querySelector("#date-input-virtual");
    const dateInputInPerson = document.querySelector("#date-input-in-person");

    const fpVirual = dateInputVirtual
        ? flatpickr(dateInputVirtual, {
              minDate: "today",
              defaultDate: "today",
              dateFormat: "d.m.Y",
          })
        : null;
    const fpInPerson = dateInputInPerson
        ? flatpickr(dateInputInPerson, {
              minDate: "today",
              defaultDate: "today",
              dateFormat: "d.m.Y",
          })
        : null;
};

export default datePicker;
