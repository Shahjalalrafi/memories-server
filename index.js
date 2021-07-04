const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const post = require('./Routes/Posts')


const app = express()

app.use(express.json())
app.use(cors())

const port = 5000


const url = `mongodb+srv://myTodos:rafi1234@cluster0.fltsf.mongodb.net/memories?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('connect'))
.catch(err => console.log(err))

app.use('/posts', post)


app.get('/', (req, res) => {
    res.send('Hello World!')
  })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})