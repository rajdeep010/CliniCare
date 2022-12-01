require('./src/db/conn')
const express = require('express')
const userRouter = require('./src/routers/user')

const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.json())
app.use(userRouter)

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/signup', (req, res) => {
    res.render('signup')
})

app.listen(port, () => {
    console.log(`Server is up & running on port ${port}`)
})