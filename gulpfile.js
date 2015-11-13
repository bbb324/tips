var gulp = require('gulp');
var gulputil = require('gulp-util');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssMin = require('gulp-css');
var imagemin = require('gulp-imagemin');
var sprite = require('gulp-sprite-generator')

var path = 'E:/MyDocument/WebStormProject/';
var project = 'tips';





gulp.task('scripts', function(){
	gulp.src(path+project+'/js/tips_script.js') //压缩所有文件
		.pipe(concat('tips_script.min.js'))  //输出文件
		.pipe(uglify())
		.pipe(gulp.dest(path+project+'/js/min'))  //输出文件目录
});

gulp.task('cssMinfy', function(){
	return gulp.src(path+project+'/css/tips_decoration.css')
			   .pipe(cssMin())
			   .pipe(gulp.dest(path+project+'/css/min'))
});

gulp.task('compress-images',function(){
	return gulp.src(path+project+'/image/index/*.png')
			   .pipe(imagemin({progressive: true}))
			   .pipe(gulp.dest(path+project+'/index/ind'));
})

gulp.task('gulp-sprite-generator', function(){
	 var spriteOutput;
 
    spriteOutput = gulp.src(path+project+"/css/index.min.css")
        .pipe(sprite({
            baseUrl:         path+project+"./image/index/*.png",
            spriteSheetName: "sprite.png",
            spriteSheetPath: path+project+"/dist/image"
        }));
 
    spriteOutput.css.pipe(gulp.dest(path+project+"/dist/css"));
    spriteOutput.img.pipe(gulp.dest(path+project+"/dist/image"));
}) //这个有问题


//默认函数，直接console 执行 gulp 就行了
gulp.task('default', function(){
		
		var js_path = gulp.src(path+project+'/js/tips_script.js') //压缩所有文件
			.pipe(concat('tips_script.min.js'))  //输出文件名
			.pipe(uglify())
			.pipe(gulp.dest(path+project+'/js/min'))  //输出文件目录
		
		
		var css_path = gulp.src(path+project+'/css/tips_decoration.css')
			.pipe(concat('tips_decoration.min.css'))
			.pipe(cssMin())
			.pipe(gulp.dest(path+project+'/css/min'))
});