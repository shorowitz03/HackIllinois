/**
 * this is just a simple example of how you would connect to the database. if connecting directly to the database, the file should most likely be in the models folder
 * for the development server, make sure you have the .env file set up - instructions on discord
 * for production, environment variables cant be accessed so database cant be connected to until environment variables are configured through the hosting service (or maybe vite..?)
 */

const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

exports.matchAll = (callback) => {
  MongoClient.connect(process.env.CONNECTION_URI, async (err, client) => {
    const data = [];
    const db = client.db("INSERT DB NAME");
    await db
      .collection("INSERT COLLECTION NAME")
      // ... run functions on the collection
    client.close();
    callback(data);
  });
};