var gulp = require("gulp"),
	browserify = require("browserify"),
	source = require("vinyl-source-stream"),
	reactify = require("reactify"),
	watchify = require("watchify");


var paths = {
	scripts: "src/**/*.js"
};


gulp.task("browserify", function(){
	var bundler = browserify({
		entries: ['./src/main.js'],
		transform: [reactify],
		debug: true,
		cache: {}, packageCache: {}, fullPaths: true
	});
	var watcher = watchify(bundler);

	return watcher.on('update', function(){
		console.log('Updating!');
		watcher.bundle()
		.pipe(source("main.js"))
		.pipe(gulp.dest("./public/assets/js"));
		console.log('Updated!');
	})
	.bundle()
	.pipe(source("main.js"))
	.pipe(gulp.dest("./public/assets/js"));
});



gulp.task("watch", function(){

});

gulp.task("default", ["browserify", "watch"]);