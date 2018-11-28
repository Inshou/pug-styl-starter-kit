const isDebug = process.env.NODE_ENV !== 'production';
const dist = '';
const paths = {
	root: './dist',
	templates: {
		src: ['./src/templates/**/*.pug', '!./src/templates/partials/**/*.pug'],
		dest: './dist/'
	},
	styles: {
		src: ['./src/styles/**/*.styl', '!./src/styles/partials/**/*.styl'],
		dest: './dist/assets/css/'
	},
	scripts: {
		src: './src/javascript/**/*.*',
		dest: './dist/assets/js/'
	}
};

export default paths;
