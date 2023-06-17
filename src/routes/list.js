const { Router } = require('express');
const router = Router();

const items = [
	{
		item: 'milk',
		total: 3,
	},
	{
		item: 'bread',
		total: 53,
	},
	{
		item: 'cheese',
		total: 23,
	},
	{
		item: 'eggs',
		total: 13,
	},
	{
		item: 'butter',
		total: 43,
	},
];

router.get('/', (req, res) => {
	res.send(items);
});

router.get('/:item', (req, res) => {
	const { item } = req.params;
	const itemsFind = items.find((i) => i.item === item);
	if (!itemsFind) {
		res.send('Not found');
		res.sendStatus(404);
		return;
	}
	res.send(itemsFind.total.toString());
});

router.post('/', (req, res) => {
	console.log(req.body);
	items.push(req.body);
	res.sendStatus(201);
});

module.exports = router;
