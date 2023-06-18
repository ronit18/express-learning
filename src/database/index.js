const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI;

mongoose
	.connect(MONGODB_URI)
	.then(() => {
		console.log('Connected to MongoDB 🚀');
	})
	.catch((err) => {
		console.log('Error connecting to MongoDB 😢');
		console.log(err);
	});
