const express = require("express");
const { ObjectId } = require("mongodb");
const app = express();
const PORT = 3000;
const MongoClient = require("mongodb").MongoClient;
let db;
const connectionLink = "mongodb://localhost:27017/ecomm";

(async function () {
  try {
    // parameter as connection link
    const client = await MongoClient.connect(connectionLink);
    db = client.db("ecomm");
  } catch (err) {
    throw err;
  }
})();

// To find the record with the help of operator
app.get("/", async (req, res) => {
  try {
    const result = await db
      .collection("products")
      .findOne({ name: { $eq: "Camera" } });
    res.send(result);
  } catch (error) {
    throw error;
  }
});

// To delete record using _id
app.get("/", async (req, res) => {
  try {
    const result = await db
      .collection("products")
      .deleteOne({ _id: new ObjectId("640477be97084d9adda2bfc") });
    res.send(result);
  } catch (error) {
    throw error;
  }
});

// To show record using _id
app.get("/", async (req, res) => {
  try {
    const result = await db
      .collection("products")
      .findOne({ _id: new ObjectId("640477be97084d9adda2bfc") });
    res.send(result);
  } catch (error) {
    throw error;
  }
});

// To insert the new record
app.get("/", async (req, res) => {
  try {
    const result = await db.collection("products").insertOne({
      name: "Camera",
      price: 400,
    });
    res.send(result);
  } catch (error) {
    throw error;
  }
});

// To find all the records then it is converted into array using toArray()
app.get("/", async (req, res) => {
  try {
    const result = await db.collection("products").find().toArray();
    res.send(result);
  } catch (error) {
    throw error;
  }
});

app.listen(PORT, () => {
  console.log("Server listening on port 3000");
});
