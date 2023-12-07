import fileinclude from "gulp-file-include";
import webpHtmlNosvg from "gulp-webp-html-nosvg"; // автоматично в html загортає img (якщо там не svg) в тег picture>source:srcset й пыдключає .webp | automatically wraps the img in html (if not svg) in the picture>source:srcset tag and adds .webp
import versionNumber from "gulp-version-number";

export const html = () => {
    return (
        app.gulp
            .src(app.path.src.html)
            .pipe(
                app.plugins.plumber(
                    app.plugins.notify.onError({
                        title: "HTML",
                        message: "Error: <%= error.message %>",
                    })
                )
            )
            .pipe(fileinclude()) // імпорт html-фрагментів(файлів) один в одний директивою @@include() | importing html-fragments (files) into each other with the directive @@include()
            .pipe(app.plugins.replace(/@img\//g, "img/")) // заміна псевдоніму @img на вірний шлях | replacing the @img alias with the correct path
            // .pipe( // відключив цей плагін, підключати .webp буду ручками з допомогою сніппета | I disabled this plugin, I will connect .webp manually with the help of a snippet
            //   app.plugins.if(
            //     app.isBuild,
            //     webpHtmlNosvg()
            //     )
            //   )
            .pipe(
                app.plugins.if(
                    app.isBuild,
                    versionNumber({
                        value: "%DT%",
                        append: {
                            key: "_v",
                            cover: 0,
                            to: ["css", "js", "image"],
                        },
                        output: {
                            file: "gulp/version.json",
                        },
                    })
                )
            )
            .pipe(app.gulp.dest(app.path.build.html))
            .pipe(app.plugins.browsersync.stream())
    );
};
