const express = require('express')
const routes = require('./routes')
const db = require('./db')
const auth = require('./routes/auth')
const cors = require('cors')

const PORT = process.env.PORT || 3001

const app = express()

app.use(express.json())
app.use(cors())

app.use('/', routes)
app.use('/auth', auth)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`👑 listening on port: ${PORT} 👑`))
