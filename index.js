const express = require("express");
const app = express();
const cors = require("cors")
const PORT = process.env.PORT || 3000;
require('dotenv').config();

const mongoose = require("mongoose");
app.use(cors());
app.use(express.json());

// harshgoyal1331
//harshgoyal123

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@demo-tech-cluster.bbimcya.mongodb.net/?retryWrites=true&w=majority`;

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();

//     const menuCollections = client.db("demo-tech-client").collection("menus");
//     const cartCollections = client.db("demo-tech-client").collection("cartItems");

//     app.get("/menu",async(req,res)=>{
//         const result = await menuCollections.find().toArray();
//         res.send(result);
//     })

//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     // await client.close();
//   }
// }
// run().catch(console.dir);

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@demo-tech-cluster.bbimcya.mongodb.net/tech-fusion?retryWrites=true&w=majority`).then(
  console.log("MongoDB connected successfully")
).catch((error)=> console.log("Error connecting to MongoDB",error));

const menuRoutes = require("./api/routes/menuRoutes");
app.use('/menu',menuRoutes);

app.get("/",(req,res)=>{
    console.log("hello world");
})

app.listen(PORT,()=>{
    console.log(`server listening on Port:${PORT}`)
})