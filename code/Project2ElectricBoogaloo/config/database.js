const mongoose = require('mongoose');

// replace your database connection string here
mongoose.connect('mongodb+srv://icefireknight:Sprall2320@cluster0.2vnrt.mongodb.net/pictures?retryWrites=true&w=majority',{ 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const db = mongoose.connection;

// database connection event
db.on('connected', function () {
  console.log(`Mongoose connected to: ${db.host}:${db.port}`);
});
