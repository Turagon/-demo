const express = require('express')
const session = require('express-session')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const db = require('./models')
const routes = require('./routes')

const app = express()
const PORT = 3000

app.engine('hbs', exphbs({defaultLayout: 'main', extname: 'hbs', helpers: require('./config/handlebars-helper')}))
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.use(session({
  secret: 'iamaprogramer',
  resave: false,
  saveUninitialized: true
}))

app.use(routes)

app.listen(PORT, () => {
  console.log('server is on')
})