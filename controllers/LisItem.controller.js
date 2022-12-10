const listModel = require('../models/ListItem.model')

// create a item
module.exports.create = async (req, res) => {
	try {
		let item = await listModel.find({name: req.body.name})
		if(item[0].name == req.body.name){
			res.status(401).json({
				status: 401,
				success: true,
				message: 'Item đã tồn tại!',
			})
		}
	} catch (err) {
		try{
			data = listModel.create({
				name: req.body.name,
				quantity: 1,
				checked: false
			})
			res.status(200).json({
				success: true,
				message: 'Item created successfully',
				data
			})
		}catch{
			res.status(500).json({
				success: false,
				message: 'Thêm Item thất bại',
			})
		}
	}
}

// get all item
module.exports.getListItem = async (req, res) => {
	try {
		let data = await listModel.find({})
		res.status(200).json({
			success: true,
			data,
		})
	} catch (error) {
		res.status(400).json({
			success: false,
			message: 'Request server failed.',
		})
	}
}

