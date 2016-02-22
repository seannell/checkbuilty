/**
 * Created by zhanghao on 2016/2/22.
 */
'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');

// 默认sass和watch方法
gulp.task("default",["sass","watch"]);

gulp.task("sass",function(){
   return gulp.src("./sass/**/*.scss")
       .pipe(sass().on("error",sass.logError))
       .pipe(gulp.dest("./css"));
});

gulp.task("watch",function(){
   gulp.watch("./sass/**/*.scss",["sass"]);
});