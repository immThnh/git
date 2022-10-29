const path = require('path');
const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const port = 3000

// để xem sever có gửi require hay không để dễ làm việc
const morgan = require('morgan')

// HTTP logger
app.use(morgan('combined'))

// template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs' 
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))

app.use(express.static(path.join(__dirname, 'public')));

// Render ra trang home
app.get('/', (req, res) => {
  res.render('home')
})
// Render ra trang news (category)
app.get('/news', (req, res) => {
  res.render('news')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})