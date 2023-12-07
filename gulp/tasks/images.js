import webp from "gulp-webp"; // create webp-images
import imagemin from "gulp-imagemin"; // compress images, optimization

export const images = () => {
    return app.gulp
        .src(app.path.src.images)
        .pipe(
            app.plugins.plumber(
                app.plugins.notify.onError({
                    title: "IMAGES",
                    message: "Error: <%= error.message %>",
                })
            )
        )
        .pipe(app.plugins.newer(app.path.build.images)) // Checking for updates to avoid processing already processed images twice
        .pipe(webp()) // create webp-images
        .pipe(app.gulp.dest(app.path.build.images)) // uploading created pictures  to the folder with the result
        .pipe(app.gulp.src(app.path.src.images)) // we get access to the sources again
        .pipe(
            app.plugins.if(
                app.isBuild,
                app.plugins.newer(app.path.build.images)
            )
        ) // Checking for updates again
        .pipe(
            app.plugins.if(
                app.isBuild,
                imagemin({
                    progressive: true,
                    svgoPlugins: [{ removeViewBox: false }],
                    interlaced: true,
                    optimizationLevel: 3, // 0 to 7
                })
            )
        )
        .pipe(app.gulp.dest(app.path.build.images)) // upload the processed images to the folder with the result
        .pipe(app.gulp.src(app.path.src.svg)) // select svg
        .pipe(app.gulp.dest(app.path.build.images)) // upload svg to the folder with the result
        .pipe(app.plugins.browsersync.stream());
};
