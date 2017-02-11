import config from './config';
import apiRouter from './src/api';

import express from 'express';
const server = express();

server.set('view engine', 'ejs');

import serverRender from './serverRender';

server.get(['/', '/contest/:contestId'], (req, res) => {
	serverRender(req.params.contestId)
		.then(({ initialMarkup, initialData }) => {
			res.render('index', {
				initialMarkup, 
				initialData
			});
		})
		.catch(console.error);
});

server.use('/api', apiRouter);
server.use(express.static('dist'));

server.listen(config.port, config.host, () => {
	console.info('Magic is on port ', config.port);
});
