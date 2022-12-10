const router = require('express').Router()
const controller = require('../controllers/LisItem.controller')

// create a item
router.post('/create', controller.create)

// get all item
router.get('/list', controller.getListItem)



module.exports = router
