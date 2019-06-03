"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

_mongoose["default"].connect(process.env.MONGO_URL_PROD, // process.env.PRODUCTION ? process.env.MONGO_URL_PROD : process.env.MONGO_URL,
{
  useNewUrlParser: true,
  useFindAndModify: false,
  useMongoClient: true
});

var db = _mongoose["default"].connection;

var handleOpen = function handleOpen() {
  return console.log("✅  Connected to DB");
};

var handleError = function handleError(error) {
  return console.log("\u274C Error on DB Connection:".concat(error));
};

db.once("open", handleOpen);
db.on("error", handleError); // const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});
// const Cat = mongoose.model('Cat', { name: String });
// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));
// pid=26012 port=27017 dbpath=/data/db 64-bit host=SUNGui-MacBookPro.local