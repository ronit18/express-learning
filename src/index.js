const express = require('express');
const listRouter = require('./routes/list');
const storesRouter = require('./routes/stores');
const cartRouter = require('./routes/cart');
const authRouter = require('./routes/auth');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
	session({
		secret: '4848489jfafjajfdjafk48i48fjajf',
		resave: false,
		saveUninitialized: false,
	})
);
app.use(express.urlencoded());
const PORT = 3001;
app.use('/api/auth', authRouter);

app.use((req, res, next) => {
	console.log(`Request : ${req.method} ${req.url} ${new Date()}`);
	if (req.session.user) {
		console.log(`User: ${req.session.user}`);
		next();
	} else {
		res.sendStatus(401);
	}
});

app.use('/api/list', listRouter);
app.use('/api/cart', cartRouter);
app.use('/api/stores', storesRouter);

app.listen(PORT, () => console.log(`Running server on ${PORT} 🚀 `));
