const gulp = require('gulp');
const babel = require('gulp-babel');

const paths = {
  dest: {
    lib: 'lib',
    esm: 'esm',
    dist: 'dist',
  },
  styles: 'src/**/*.less',
  scripts: ['src/**/*.{ts,tsx}', '!src/**/demo/*.{ts,tsx}'], // 脚本文件路径
};

function compileCJS() {
  const { dest, scripts } = paths;
  return gulp.src(scripts).pipe(babel()).pipe(gulp.dest(dest.lib));
}

// 并行任务
const build = gulp.parallel(compileCJS);

exports.build = build;

exports.default = build;
