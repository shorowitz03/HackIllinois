const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

exports.make = (body) => {
  MongoClient.connect(process.env.CONNECTION_URI, async (err, client) => {
    const db = client.db("userDB");
    await db.collection("users").insertOne(body);
    client.close();
  });
};

exports.match = (body, callback) => {
  MongoClient.connect(process.env.CONNECTION_URI, async (err, client) => {
    const data = [];
    const db = client.db("userDB");
    const user = await db
      .collection("users")
      .findOne({ $and: [{ username: body.username }, { password: hash(body.password) }] }); // TODO: check over exact body property name
    const { createHash } = require("crypto");

    
    client.close();
    callback(data);
  });
};

function hash(string) {
  return createHash("sha256").update(string).digest("hex");
}
