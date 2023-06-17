const express = require('express');
const listRouter = require('./routes/list');

const app = express();
app.use(express.json());
app.use(express.urlencoded());
const PORT = 3001;

app.use((req, res, next) => {
	console.log(`Request ${req.method} ${req.url} ${new Date()}`);
	next();
});

app.use('/api/list', listRouter);

app.listen(PORT, () => console.log(`Running server on ${PORT} 🚀 `));
