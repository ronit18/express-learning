const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded());
const PORT = 3001;

app.use((req, res, next) => {
	console.log(`Request ${req.method} ${req.url} ${new Date()}`);
	next();
});

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

app.get('/list', (req, res) => {
	res.send(items);
});

app.post('/post', (req, res) => {
	console.log(req.body);
	items.push(req.body);
	res.sendStatus(200);
});

app.listen(PORT, () => console.log(`Running server on ${PORT} 🚀 `));
