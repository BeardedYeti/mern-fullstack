import config from './config';
import apiRouter from './src/api'

import express from 'express';
const server = express();

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
	res.render('index', {
		content: 'Loading...'
	});
});

server.use('/api', apiRouter);
server.use(express.static('dist'));

server.listen(config.port, () => {
	console.info('Magic is on port ', config.port);
});
