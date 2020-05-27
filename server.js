const express = require('express');
const request = require('request');
const cors = require('cors');

const app = express();

app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/api/recipes', (req, res) => {
  request(
    { url: 'https://secretrecipesbuild.herokuapp.com/api/recipes' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
  )
});

app.post('/api/recipes', (req, res) => {
  request(
    { url: 'https://secretrecipesbuild.herokuapp.com/api/recipes' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
  )
});

app.get('/api/recipes', (req, res) => {
  request(
    { url: 'https://secretrecipesbuild.herokuapp.com/api/recipes' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
  )
});

app.get('/api/users', (req, res) => {
  request(
    { url: 'https://secretrecipesbuild.herokuapp.com/api/users' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
  )
});

app.post('/auth/login', (req, res) => {
  request(
    { url: 'https://secretrecipesbuild.herokuapp.com/auth/login' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
  )
});

app.post('/auth/register', (req, res) => {
  request(
    { url: 'https://secretrecipesbuild.herokuapp.com/auth/register' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
  )
});

app.get('/auth/logout', (req, res) => {
  request(
    { url: 'https://secretrecipesbuild.herokuapp.com/auth/logout' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
  )
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));

// routers
server.use('/api', usersRouter)
server.use('/api', recipesRouter)
server.use('/auth', authRouter)

server.get('/', (req, res) => {
    res.send('<h3>Welcome to our Family Secrets Recipes</h3>');
  });

 module.exports = server;
