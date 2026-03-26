import { MongoClient } from "mongodb";

const uri = "";
const client = new MongoClient(uri);

let db;

export async function connectDB() {
  if (!db) {
    await client.connect();
    db = client.db("baanDB");
  }
  return db;
}
