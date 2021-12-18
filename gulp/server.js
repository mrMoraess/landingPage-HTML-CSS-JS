const gulp = require('gulp')
const server = require('gulp-webserver')

function startServer () {
    return gulp.src('./public')
        .pipe(server({
            livereload: true,
            port: 1080,
            open: true,
        }))
}

gulp.task('startServer', startServer)

module.exports = {
    startServer
}