var gulp = require('gulp'),
		gutil = require('gulp-util'),
		runSequence = require('run-sequence'),
		sass = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer'),
		cleanCSS = require('gulp-clean-css'),
		sourcemaps = require('gulp-sourcemaps'),
		imagemin = require('gulp-imagemin'),
		concat = require('gulp-concat');

		
gulp.task('move-images', function () {
	return gulp.src('assets/dev/images/front/**/*')
			.pipe(gulp.dest('assets/dist/images/front/'));
});

gulp.task('build-css', function () {
	return gulp.src('assets/dev/css/front/sass/**/*.scss')
			.pipe(sass())
			.pipe(autoprefixer('> 1%', 'last 3 versions', 'Firefox ESR', 'last 5 iOS versions', 'last 5 Safari versions'))
			.pipe(sourcemaps.init())
			.pipe(cleanCSS({debug: true}, function (details) {
				console.log(details.name + ': ' + details.stats.originalSize);
				console.log(details.name + ': ' + details.stats.minifiedSize);
			}))
			.pipe(sourcemaps.write())
			.pipe(gulp.dest('assets/dist/css/front/css/'));
});

gulp.task('move-css-images', function () {
	return gulp.src('assets/dev/css/front/images/**/*')
			.pipe(gulp.dest('assets/dist/css/front/images/'));
});

gulp.task('move-css-fonts', function () {
	return gulp.src('assets/dev/css/front/font/**/*')
			.pipe(gulp.dest('assets/dist/css/front/font/'));
});

gulp.task('build-controller-js', function () {
	return gulp.src('assets/dev/js/controller/**/*')
			.pipe(concat('controller.min.js'))
			.pipe(gulp.dest('assets/dist/js/controller'));
});

gulp.task('move-view-js', function () {
	return gulp.src('assets/dev/js/view/**/*')
			.pipe(gulp.dest('assets/dist/js/view/'));
});

gulp.task('build-vendor-css', function () {
	return gulp.src(['assets/dev/vendor/bootstrap-3.3.6-dist/css/bootstrap.min.css'])
			.pipe(sourcemaps.init())
			.pipe(concat('vendor.min.css'))
			.pipe(sourcemaps.write())
			.pipe(gulp.dest('assets/dist/vendor/css'));
});

gulp.task('build-vendor-js', function () {
	return gulp.src(['assets/dev/vendor/jquery/jquery-3.1.1.min.js', 'assets/dev/vendor/autosize/autosize.min.js'])
			.pipe(sourcemaps.init())
			.pipe(concat('vendor.min.js'))
			.pipe(sourcemaps.write())
			.pipe(gulp.dest('assets/dist/vendor/js'));
})

gulp.task('watch', function () {
	gulp.watch('assets/dev/images/front/**/*', ['move-images']);
	gulp.watch('assets/dev/css/front/images/**/*', ['move-css-images']);
	gulp.watch('assets/dev/css/front/font/**/*', ['move-css-fonts']);
	gulp.watch('assets/dev/css/front/sass/**/*.scss', ['build-css']);
	gulp.watch('assets/dev/js/view/**/*', ['move-view-js']);
	gulp.watch('assets/dev/js/controller/**/*', ['build-controller-js']);
	gulp.watch('assets/dev/vendor/**/*', ['build-vendor-css']);
	gulp.watch('assets/dev/vendor/**/*', ['build-vendor-js']);
});

gulp.task('default', function () {
	runSequence(
			'move-css-images',
			'move-css-fonts',
			'build-css',
			'move-images',
			'move-view-js',
			'build-controller-js',
			'build-vendor-css',
			'build-vendor-js',
			'watch'
	);

	return gutil.log('Gulp is running!')
});