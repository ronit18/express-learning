const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded());
const PORT = 3001;

const items = [
	{
		item: 'new',
		total: 43,
	},

	{
		item: 'new',
		total: 43,
	},
];

app.get('/', (req, res) => {
	res.send(items);
});
app.post('/post', (req, res) => {
	console.log(req.body);
	items.push(req.body);
	res.sendStatus(200);
});

app.listen(PORT, () => console.log(`Running server on ${PORT} 🚀 `));
