const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const bodyParser = require('body-parser');
const loginRouter = require('./routes/login.router')
const userRouter = require('./routes/user.route')

app.set('view engine', 'pug')
app.set('views', './views')

app.use(bodyParser.json());
app.use(cors());

app.use('/users', userRouter);
app.use('/login', loginRouter);
app.get('*', (req, res) => {
    res.send(`<h3 style="color: red;">404 Not found</h3>`)
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
