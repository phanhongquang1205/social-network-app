const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.set('view engine', 'pug')
app.set('views', './views')


app.use('/', (req, res, next) =>{
  console.log("The request received at: ", new Date());
  next()
})
app.use(express.urlencoded({
    extended: true
  }))
app.get('/', (req, res) => {
    res.send(`<h3 style="color: red;">Home</h3>`)
  })
app.get('/css/indexboot.css', (req, res) => {
    res.sendFile(path.dirname(path.dirname(__dirname)) +'/clients/src/SignupPage/indexboot.css')
})
app.get('/js/index.js', (req, res) => {
  res.sendFile(path.dirname(path.dirname(__dirname)) +'/clients/src/SignupPage/index.js')
})
app.get('/jslogin/index.js', (req, res) => {
  res.sendFile(path.dirname(path.dirname(__dirname)) +'/clients/src/LoginPage/index.js')
})
app.get('/csslogin/indexboot.css', (req, res) => {
  res.sendFile(path.dirname(path.dirname(__dirname)) +'/clients/src/LoginPage/index.css')
})
app.get('/csshome/indexboot.css', (req, res) => {
  res.sendFile(path.dirname(path.dirname(__dirname)) +'/clients/src/HomePage/index.css')
})
app.get('/img', (req, res) => {
  res.sendFile(path.dirname(path.dirname(__dirname)) +'/clients/src/img/Free_Sample_By_Wix.png')
})
app.get('/home', (req, res) =>{
  const fs = require('fs');
  fs.readFile(path.dirname(path.dirname(__dirname)) +'/clients/src/HomePage/index.html', (err,html)=>{
      if(err) throw err;
      res.writeHeader(200, {'Content-Type': 'text/html'});
      res.write(html);
      res.end();
  })
})
app.get('/login', (req, res) =>{
  const fs = require('fs');
  fs.readFile(path.dirname(path.dirname(__dirname)) +'/clients/src/LoginPage/indexboot.html', (err,html)=>{
      if(err) throw err;
      res.writeHeader(200, {'Content-Type': 'text/html'});
      res.write(html);
      res.end();
  })
})
app.get('/signup', (req, res) =>{
    const fs = require('fs');
    fs.readFile(path.dirname(path.dirname(__dirname)) +'/clients/src/SignupPage/indexboot.html', (err,html)=>{
        if(err) throw err;
        res.writeHeader(200, {'Content-Type': 'text/html'});
        res.write(html);
        res.end();
    })
})

app.get('*', (req, res) => {
    res.send(`<h3 style="color: red;">404 Not found</h3>`)
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
