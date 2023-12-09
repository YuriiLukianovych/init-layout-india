// Основний модуль | Main module
import gulp from "gulp";
// Імпорт шляхів | Import paths
import { path } from "./gulp/config/path.js";
// Імпорт загальних плагінів | Import common plugins
import { plugins } from "./gulp/config/plugins.js";

// Передаємо основні змінні в глобальну змінну, щоб не імпортувати їх в кожному файлі
// Transfer the main variables to a global variable so as not to import them in each file
global.app = {
    isBuild: process.argv.includes("--build"),
    isDev: !process.argv.includes("--build"),
    path: path,
    gulp: gulp,
    plugins: plugins,
};

// Імпорт задач
// Import tasks
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { createSvgSprite } from "./gulp/tasks/svgSprite.js";
import { zip } from "./gulp/tasks/zip.js";
import { ftp } from "./gulp/tasks/ftp.js";

// Watcher - спостерігач за змінами у файлах
// Watcher - watching of changes in files
function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}

// Послідовне опрацювання шрифтів
// Sequential processing of fonts
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

// Побудова сценарію для виконання задач (тасків)
// Building a scenario for performing tasks
const mainTasks = gulp.series(
    fonts,
    gulp.parallel(copy, html, scss, js, images)
);

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);
const deployFTP = gulp.series(reset, mainTasks, ftp);

// Експорт сценаріїв
// export scenarios
export { dev };
export { build };

// експортуємо задачу створення спрайту, щоб запускати її окремо, а не при кожному запуску gulp
// export the sprite creation task to run separately instead of every gulp run
export { createSvgSprite };
export { deployZIP };
export { deployFTP };

// Виконання дефолтного (по замовчуванню) сценарію
// Execution scenario by default
gulp.task("default", dev);
