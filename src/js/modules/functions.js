// перевірка підтримки webp для фонових зображень
// працює разом з плагіном gulp-webpcss для scss
// check webp support for background images
// works together with the gulp-webpcss plugin for scss
export function isWebp() {
    // перевірка підтримки webp | check webp support
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    // додавання класу .webp або .no-webp для html елемента
    // adding a .webp or .no-webp class for the html element
    testWebP(function (support) {
        let className = support === true ? "webp" : "no-webp";
        document.body.classList.add(className);
    });
}
