const { Router } = require('express');
const User = require('../database/schema/User');

const { hashPassword } = require('../utils/helpers');

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

router.post('/register', async (request, response) => {
	const { username, email } = request.body;
	const userDB = await User.findOne({ $or: [{ username }, { email }] });
	if (userDB) {
		response.status(400).send({ msg: 'User already exists!' });
	} else {
		const password = hashPassword(request.body.password);
		const newUser = await User.create({ username, password, email });
		response.sendStatus(201);
	}
});
module.exports = router;
