const mongoose = require('mongoose')

const ListItemSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		quantity: {
			type: Number,
			default: '',
		},
		checked: {
			type: Boolean,
			default: ''
		},
	},
	{ timestamps: true }
)


module.exports = mongoose.model('ListItem', ListItemSchema)