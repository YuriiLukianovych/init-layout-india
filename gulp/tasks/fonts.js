import fs, { appendFile } from "fs"; //плагін для роботи з файловою системою, є з коробки в node | a plugin for working with the file system is available out of the box in node
import fonter from "gulp-fonter"; // конвертує шрифт .otf в .ttf i .woff | converts .otf font to .ttf and .woff
import ttf2woff2 from "gulp-ttf2woff2"; // конвертує шрифт .ttf в .woff2 | converts .ttf font to .woff2

export const otfToTtf = () => {
    // Шукаємо файли шрифтів .otf | Searching font files .otf
    return (
        app.gulp
            .src(`${app.path.srcFolder}/fonts/*.otf`, {})
            .pipe(
                app.plugins.plumber(
                    app.plugins.notify.onError({
                        title: "FONTS",
                        message: "Error: <%= error.messsage %>",
                    })
                )
            )
            // конвертуємо в .ttf | converts to .ttf
            .pipe(
                fonter({
                    formats: ["ttf"],
                })
            )
            // вигружаємо в папку ісходніків | upload to the sources folder
            .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts`))
    );
};

export const ttfToWoff = () => {
    // Шукаємо файли шрифтів .ttf | Searching font files .ttf
    return (
        app.gulp
            .src(`${app.path.srcFolder}/fonts/*.ttf`, {})
            .pipe(
                app.plugins.plumber(
                    app.plugins.notify.onError({
                        title: "FONTS",
                        message: "Error: <%= error.messsage %>",
                    })
                )
            )
            // конвертуємо в .woff | converts to .woff
            .pipe(
                fonter({
                    formats: ["woff"],
                })
            )
            // вигружаємо в папку з результатом | upload to the results folder
            .pipe(app.gulp.dest(app.path.build.fonts))
            // Шукаємо файли шрифтів .ttf | searching font files .ttf
            .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
            // конвертуємо в .woff2 | converts to .woff2
            .pipe(ttf2woff2())
            // вигружаємо в папку з результатом | upload to the results folder
            .pipe(app.gulp.dest(app.path.build.fonts))
    );
};

// записує підключенння файлів шрифтів у файл стилів
// writes font file connections to a styles file
export const fontsStyle = () => {
    // Файл стилів підключенння шрифтів | Font connection styles file
    let fontsFile = `${app.path.srcFolder}/scss/fonts.scss`;
    // Провіряємо, чи існують файли шрифтів | Check if the font files exist
    fs.readdir(app.path.build.fonts, function (err, fontsFiles) {
        if (fontsFiles) {
            // перевіряємо чи існує файл стилів для підключення шрифтів
            // check if there is a style file for connecting fonts
            if (!fs.existsSync(fontsFile)) {
                //якщо файла не існує, то створюємо його
                //if the file does not exist, then create it
                fs.writeFile(fontsFile, "", cb);
                let newFileOnly;
                for (let i = 0; i < fontsFiles.length; i++) {
                    // записуємо підключення шрифтів у файл стилів
                    // we record the connection of fonts in the style file
                    let fontFileName = fontsFiles[i].split(".")[0];
                    if (newFileOnly !== fontFileName) {
                        let fontName = fontFileName.split("-")[0]
                            ? fontFileName.split("-")[0]
                            : fontFileName;
                        let fontWeight = fontFileName.split("-")[1]
                            ? fontFileName.split("-")[1]
                            : fontFileName;
                        if (fontWeight.toLowerCase() === "thin") {
                            fontWeight = 100;
                        } else if (fontWeight.toLowerCase() === "extralight") {
                            fontWeight = 200;
                        } else if (fontWeight.toLowerCase() === "light") {
                            fontWeight = 300;
                        } else if (fontWeight.toLowerCase() === "medium") {
                            fontWeight = 500;
                        } else if (fontWeight.toLowerCase() === "semibold") {
                            fontWeight = 600;
                        } else if (fontWeight.toLowerCase() === "bold") {
                            fontWeight = 700;
                        } else if (
                            fontWeight.toLowerCase() === "extrabold" ||
                            fontWeight.toLowerCase() === "heavy"
                        ) {
                            fontWeight = 800;
                        } else if (fontWeight.toLowerCase() === "black") {
                            fontWeight = 900;
                        } else {
                            fontWeight = 400;
                        }
                        fs.appendFile(
                            fontsFile,
                            `@font-face {\n\tfont-family: ${fontName};\n\tfont-display: swap;\n\tsrc: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff");\n\tfont-weight: ${fontWeight};\n\tfont-style: normal;\n}\r\n`,
                            cb
                        );
                        newFileOnly = fontFileName;
                    }
                }
            } else {
                // якщо файл існує, виводити повідомлення
                // if the file exists, console.log a message
                console.log(
                    "Файл scss/fonts.scss уже існує. Для оновлення файлу видаліть його.  The file scss/fonts.scss already exists. To update the file, delete it"
                );
            }
        }
    });

    return app.gulp.src(app.path.srcFolder);
    function cb() {}
};
