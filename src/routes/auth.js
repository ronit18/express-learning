const { Router } = require('express');
const User = require('../database/schema/User');

const router = Router();

router.post('/login', (req, res) => {
	const { username, password } = req.body;
	if (username && password) {
		if (req.session.user) {
			res.send(req.session.user);
			return;
		} else {
			req.session.user = {
				username,
			};
			res.send(req.session);
		}
	} else res.sendStatus(401);
});

router.post('/register', async (req, res) => {
	const { username, password, email } = req.body;
	const userDB = await User.findOne({ $or: [{ username }, { email }] });
	if (userDB) {
		res.send('User already exists').sendStatus(409);
		return;
	} else {
		const newUser = await User.create({
			username,
			password,
			email,
		});
		res.send(200);
	}
});

module.exports = router;
