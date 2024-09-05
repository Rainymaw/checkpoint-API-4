const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const uri = process.env.URI;
let dbConnection;

module.exports = {
  connectToDb: (cb) => {
    mongoose
      .connect(uri, { dbName: "whatchat" })
      .then(() => {
        dbConnection = mongoose.connection;
        console.log("connected to mongoDB");
        return cb();
      })
      .catch((err) => {
        console.error("Error connecting");
        return cb(err);
      });
  },
  getDb: () => dbConnection,
};
