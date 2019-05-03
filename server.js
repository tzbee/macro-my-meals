const express = require('express');

const app = express();
const port = 8080;

const apiWrapper = require('./api-wrapper');

const apiRouter = express.Router();

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

app.listen(port, () => `Server started on port ${port}`);
