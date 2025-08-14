import { src, dest, watch, series} from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'

const sass = gulpSass(dartSass);

export function css(done) {
    src('src/scss/app.scss', { sourcemaps: true })
    .pipe(sass({ style: 'compressed'
    }).on('error', sass.logError))
    .pipe(dest('build/css', { sourcemaps: '.' }));
    
    done();
}

export function dev(done) {
    watch('src/scss/**/*.scss', css);
    done();
}

export default series(css, dev);