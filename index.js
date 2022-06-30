const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();
const port = process.env.PORT || 5001;
// Connection URL
const url =
  "mongodb+srv://meiAyuning:Iksadafur16.@mydatabase.ydhjmyb.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

// Database Name
const dbName = "my_db";
app.get("/", async (req, res) => {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("hasil");
  const database = await collection.find({}).toArray();
  res.json({ database });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
