var gulp            = require('gulp'),
    browserSync     = require('browser-sync'),
    sass            = require('gulp-sass'),
    concat          = require('gulp-concat'),
    uglify          = require('gulp-uglify'),
    cssnano         = require('gulp-cssnano'),
    rename          = require('gulp-rename'),
    clean           = require('gulp-clean'),
    prefix          = require('gulp-autoprefixer'),
    imagemin        = require('gulp-imagemin'),
    pngquant        = require('imagemin-pngquant'),
    cache           = require('gulp-cache'),
    htmlClean       = require('gulp-htmlclean');


gulp.task('sass', function() {
    return gulp.src("app/scss/*.scss")
        .pipe(sass())
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});

gulp.task('browserSync', function() {
      browserSync.init({
          open: 'external',
          host: 'project.dev',
          proxy: 'project.dev', // or project.dev/app/
          port: 3000
    });
});

gulp.task('scripts', function(){
   return gulp.src([
       'node_modules/jquery/dist/jquery.min.js',
       'app/libs/inputmask/index.js',
       'node_modules/bootstrap/dist/js/bootstrap.min.js',
       // 'app/js/lib/jquery.custom-select.min.js',
       // 'app/js/lib/parallax.min.js',
       // 'app/js/lib/jquery.paroller.min.js'

   ])
       .pipe(concat('libs.min.js'))
       .pipe(uglify())
       .pipe(gulp.dest('app/js'));
});

gulp.task('css-libs', function(){
    return gulp.src('app/css/libs.css')
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/css'));
});

gulp.task('compile:css', gulp.series('sass', 'css-libs'));

gulp.task('img', function() {
    return gulp.src('app/images/**/*')
        .pipe(cache(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/images'));
});

gulp.task('clear', function () {
    return cache.clearAll();
});

gulp.task('clean', function(){
    return gulp.src('dist')
        .pipe(clean());
});

gulp.task('build:css', function() {
    return gulp.src([
        'app/css/main.css',
        'app/css/libs.min.css'
    ])
        .pipe(concat('styles.min.css'))
        .pipe(cssnano())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('build:fonts', function() {
    return gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task('build:script', function() {
    return gulp.src('app/js/**/*')
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('build:html', function() {
    return gulp.src('app/*.html')
        .pipe(htmlClean())
        .pipe(gulp.dest('dist'));
});

gulp.task('build', gulp.series('clean', gulp.parallel('img', 'build:css', 'build:fonts', 'build:script', 'build:html')));

gulp.task('serve', function() {

    browserSync({
        server: {
            baseDir: './app'

        },
        notify: false
    });

    gulp.watch("app/scss/*.scss", gulp.series('sass'));
    gulp.watch("app/*.html").on('change', browserSync.reload);
    gulp.watch("app/js/**/*.js").on('change', browserSync.reload);
});

gulp.task('default', gulp.series('compile:css', 'serve'));