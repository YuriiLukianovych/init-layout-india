import svgSprite from "gulp-svg-sprite";

export const createSvgSprite = () => {
    return app.gulp
        .src(app.path.src.svgicons)
        .pipe(
            app.plugins.plumber(
                app.plugins.notify.onError({
                    title: "SVG",
                    message: "Error: <%= error.message %>",
                })
            )
        )
        .pipe(
            svgSprite({
                mode: {
                    stack: {
                        sprite: `../svgicons/sprite/svg-sprite.svg`,
                        // Створювати сторінку зі списком іконок
                        example: false, // Create a page with a list of icons
                    },
                },
            })
        )
        .pipe(app.gulp.dest(`${app.path.srcFolder}/img/`)); // вигрузити папку з svg-спрайтом в папку src/img - вихідні файли | upload the folder with the svg-sprite to the folder src/img - source files
};
