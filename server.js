const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const apiWrapper = require('./api-wrapper');

const apiRouter = express.Router();

if (app.get('env') == 'development') {
	var browserSync = require('browser-sync');
	var config = {
		files: [
			'server.js',
			'api-wrapper.js',
			'public/**/*.{js,css}',
			'src/**/*.js',
			'src/**/*.scss'
		],
		logLevel: 'debug',
		logSnippet: false,
		reloadDelay: 1000,
		reloadOnRestart: true
	};
	var bs = browserSync(config);
	app.use(require('connect-browser-sync')(bs));
}

apiRouter.use('/search', (req, res) => {
	apiWrapper
		.searchFoodItems(req.query.q)
		.then(data => {
			res.json(data);
		})
		.catch(err => {
			res.json(`${err.message}\n${err.stack}`);
		});
});

apiRouter.use('/report/:id', (req, res) => {
	apiWrapper
		.getFoodReport(req.params.id)
		.then(data => {
			res.json(data);
		})
		.catch(err => {
			res.json(`${err.message}\n${err.stack}`);
		});
});

apiRouter.use('/', (req, res) => {
	apiWrapper
		.getFoodDataList()
		.then(data => {
			res.json(data);
		})
		.catch(err => {
			res.json(`${err.message}\n${err.stack}`);
		});
});

app.use('/api', apiRouter);

app.use('/', express.static('public'));

app.listen(port, () => console.log(`Server started on port ${port}`));
