const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const compression = require('compression')
const bodyParser = require('body-parser')

const app = express()
app.use(express.json())
app.use(cors())
app.use(compression())
app.use('/api/public', express.static('public'))

// connect to database
mongoose.connect('mongodb://localhost:27017/todo',{
	
});

mongoose.set('strictQuery', true);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())

// listItem
app.use('/api', require('./routes/ListItem.route'))

const PORT = process.env.PORT || 3005
app.listen(PORT)
