const express = require('express');
const helmet = require('helmet');
const cors = require('cors')
const session = require('express-session')
const restricted = require("./auth/restricted-middleware.js")
const knexSessionStore = require("connect-session-knex")(session);
const server = express();

const usersRouter =  require('./router/usersRouter');
const recipesRouter = require('./router/recipesRouter.js');
const authRouter = require('./auth/auth-router.js')

const sessionConfig = {
  name: 'cookie',
  secret: "starwars",
  cookie: {
    maxAge: 3600 * 1000,
    secure: false, // should be true in production
    httpOnly: true
  },
  resave: false,
  saveUninitialized:false,
  // store session information into database
  store: new knexSessionStore(
    {
      knex: require("./data/db-config"),
      tablename: "sessions",
      sidfieldname: "sid",
      createtable: true,
      clearInterval: 3600 * 1000
    }
  )
}

// global middleware
server.use(helmet());
var allowedOrigins = ['http://localhost:3000',
                      'https://secretfamilyrecipes1.netlify.app/'];
app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));
server.use(session(sessionConfig));
server.use(express.json());

// routers
server.use('/api', restricted, usersRouter)
server.use('/api', restricted, recipesRouter)
server.use('/auth', authRouter)

server.get('/', (req, res) => {
    res.send('<h3>Welcome to our Family Secrets Recipes</h3>');
  });

 module.exports = server;
