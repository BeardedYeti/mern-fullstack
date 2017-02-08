import config from './config';
import express from 'express';
const server = express();

server.get('/', (req, res) => {
	res.send('Hello World');
});

server.listen(config.port, () => {
	console.info('Magic is on port ', config.port);
});
