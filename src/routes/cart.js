const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
	const { cart } = req.session;
	if (!cart) {
		res.send('No cart');
		return;
	} else {
		res.send(cart);
	}
});

router.post('/item', (req, res) => {
	const { item, quantity } = req.body;
	const cartItem = { item, quantity };
	const { cart } = req.session;
	if (cart) {
		req.session.cart.items.push(cartItem);
	} else {
		req.session.cart = {
			items: [cartItem],
		};
	}
	res.sendStatus(201);
});
module.exports = router;
