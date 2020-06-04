require('dotenv').config();
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;
const app = express();

//Controllers
const auth = require('./controllers/authController')
const postCtrl = require('./controllers/post')

//Top level Middleware
app.use(express.json());
app.use(
    session({
      resave: false,
      saveUninitialized: true,
      cookie: { maxAge: 1000 * 60 * 60 * 24 },
      secret: SESSION_SECRET
    })
  )

//Auth Endpoints
app.post('/auth/login', auth.login)
app.post('/auth/register', auth.register)
app.delete('/auth/logout', auth.logout)
app.get('/auth/user', auth.getUser)

//Database Connection
massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false },
  })
    .then((db) => {
      app.set("db", db)
      console.log("Database connected")
      app.listen(SERVER_PORT, () =>
        console.log(`Server listening on ${SERVER_PORT}`)
      )
    })
    .catch((err) => console.log(err))

//Endpoints
app.get('/api/posts', postCtrl.getPost)
app.post('/api/post', postCtrl.addPost)
app.put('/api/posts/:post_id', postCtrl.editPost)
app.delete('/api/posts/:post_id', postCtrl.deletePost)