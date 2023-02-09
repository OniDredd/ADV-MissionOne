const express = require('express')
const port = process.env.PORT || 3050;
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.get('/df/server', (req,res) => {
    res.send('hello server')
})

require('./Routes/df-routes')(app)

app.listen(port, () => {
    console.log('Server is now running')
})