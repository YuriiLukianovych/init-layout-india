import replace from "gulp-replace"; // Пошук та заміна | Search and replace
import plumber from "gulp-plumber"; // Опрацювання помилок | Error handling
import notify from "gulp-notify"; // Сповіщення про помилки | Error notification
import browsersync from "browser-sync"; // локальний сервер | local live server
import newer from "gulp-newer"; // Перевірка оновлень, щоб двічі не обробляти одну і ту ж картинку | Checking for updates to avoid processing the same image twice
import ifPlugin from "gulp-if"; // Умовне розгалуження | Conditional branching

export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer,
    if: ifPlugin,
};
