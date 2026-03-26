import { MongoClient } from "mongodb";

const uri = "mongodb+srv://RoXy:Jakhar#9014@cluster0.gnnfkcm.mongodb.net/?appName=Cluster0";
const client = new MongoClient(uri);

let db;

export async function connectDB() {
  if (!db) {
    await client.connect();
    db = client.db("baanDB");
  }
  return db;
}
