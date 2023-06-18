const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	username: {
		type: mongoose.Schema.Types.String,
		required: true,
	},
	password: {
		type: mongoose.Schema.Types.String,
		required: true,
	},
	email: {
		type: mongoose.Schema.Types.String,
		required: true,
	},
	createdAt: {
		type: mongoose.Schema.Types.Date,
		default: new Date(),
	},
});

module.exports = mongoose.model('users', userSchema);
