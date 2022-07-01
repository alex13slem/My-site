export const fontAwesome = () => {
	return app.gulp.src('node_modules/@fortawesome/fontawesome-free/webfonts/*.woff2')
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "fAwesome",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(app.gulp.dest(app.path.build.fonts))
		.pipe(app.plugins.browsersync.stream());
}