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

function compileScripts(babelEnv, destDir) {
  const { scripts } = paths;
  process.env.BABEL_ENV = babelEnv;

  return gulp.src(scripts).pipe(babel()).pipe(gulp.dest(destDir));
}

function compileCJS() {
  const { dest } = paths;
  return compileScripts('cjs', dest.lib);
}

function compileESM() {
  const { dest } = paths;
  return compileScripts('esm', dest.esm);
}

function copyless() {
  return gulp.src(paths.styles).pipe(gulp.dest(paths.dest.lib)).pipe(gulp.dest(paths.dest.esm));
}

const buildScripts = gulp.series(compileCJS, compileESM);

const build = gulp.parallel(buildScripts, copyless);

exports.build = build;

exports.default = build;
