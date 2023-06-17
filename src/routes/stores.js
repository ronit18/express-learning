const { Router } = require('express');

const router = Router();

let id = 1;
const queries = [
	{ id: id++, store: 'Target 1', miles: 3.1 },
	{ id: id++, store: 'Walmart', miles: 1.2 },
	{ id: id++, store: 'Target', miles: 3 },
	{ id: id++, store: "Trader Joe's", miles: 9.2 },
	{ id: id++, store: 'Costco', miles: 0.2 },
	{ id: id++, store: 'Safeway', miles: 4.5 },
	{ id: id++, store: 'Whole Foods', miles: 10 },
	{ id: id++, store: 'Walmart', miles: 10.2 },
	{ id: id++, store: "Trader Joe's", miles: 3.2 },
	{ id: id++, store: 'Trader ', miles: 3.2 },
];

router.get('/', (req, res) => {
	const { miles } = req.query;
	const parsedMiles = parseInt(miles);
	if (miles && !isNaN(parsedMiles)) {
		const filteredQueries = queries.filter((s) => s.miles <= parsedMiles);
		res.json(filteredQueries);
	} else {
		res.json(queries);
	}
});

module.exports = router;
