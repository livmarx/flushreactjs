const express = require('express');
const app = express(); // object with methods; One method is router; express creates a server; app allows us to access the server; app.listen hooks up our server;
const morgan = require('morgan'); //app.use(...) morgan says console.log(wht app.use does);
const { db, Review, Toilet, User } = require('./server/db/index');
const apiRoutes = require('./server/api/index');

// Logger:
app.use(morgan('dev')); // implies '/' ('/', morgan('dev'));

//Body parser:
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// public:
app.use(express.static(__dirname + '/public'));

// Backend Routing:
app.use('/api', apiRoutes);

// Setting up server
const PORT = process.env.PORT || 8880;

const syncDb = () => db.sync();

const startListening = () => {
  app.listen(PORT, function() {
    console.log(
      ` ***** I'm leisurely listening on pleasant port of ${PORT} *****`
    );
  });
};

async function bootApp() {
  await syncDb();
  await startListening();
}

bootApp();
