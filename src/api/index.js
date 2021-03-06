import express from 'express';
import data from '../testData';

const router = express.Router();
const contests = data.contests.reduce((obj, contest) => {
	obj[contest.id] = contest;
	return obj;
}, {});

router.get('/contests', (req, res) => {
	res.send({ 
		contests: contests
	});
});

router.get('/contests/:contestId', (req, res) => {
	let contest = contests[req.params.contestId];
	contest.description = 'Lorem ipsum dolar sit amet.'
	res.send(contest);
});

export default router;