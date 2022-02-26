const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

exports.make = (body) => {
  MongoClient.connect(process.env.CONNECTION_URI, async (err, client) => {
    const db = client.db("userDB");
    await db.collection("users").insertOne(body);
    client.close();
    callback(data);
  });
};

exports.match = (query) => {
  MongoClient.connect(process.env.CONNECTION_URI, async (err, client) => {
    const db = client.db("userDB");
    await db.collection("users").find({
      // DEPENDS ON HOW DATA IS SENT + STORED
    });
    client.close();
    callback(data);
  });
};
