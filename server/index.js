const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(cors())
app.use(morgan('dev'))

const fileToServerPath = path.join(__dirname, '../dist')

app.use(express.static(fileToServerPath))

const port = 3000

app.listen(port, () => {
    console.log(`listening on ${port}! printing static file path => ${fileToServerPath}`)
})