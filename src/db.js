import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(
  process.env.MONGO_URL_PROD,
  // process.env.PRODUCTION ? process.env.MONGO_URL_PROD : process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useMongoClient: true
  }
);

const db = mongoose.connection;

const handleOpen = () => console.log("✅  Connected to DB");
const handleError = error => console.log(`❌ Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));

// pid=26012 port=27017 dbpath=/data/db 64-bit host=SUNGui-MacBookPro.local
