const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

exports.make = (body) => {
  MongoClient.connect(process.env.CONNECTION_URI, async (err, client) => {
    const db = client.db("HackIllinois2022");
    await db.collection("users").insertOne(body)
    // ... run functions on the collection
    client.close();
    callback(data);
  });
}