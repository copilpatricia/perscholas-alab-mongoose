// import {MongoClient} from 'mongodb';
// const connectionString = process.env.ATLAS_URI || "";

// const client = new MongoClient(connectionString);

// let conn;

// try {
//     conn = await client.connect();
//     console.log("Connected to mongodb")
// } catch(e) {
//     console.error(e);
// }

// const db = conn.db("sample_training");
// export default db;

import mongoose from 'mongoose';

export async function conn() {
    try {
        await mongoose.connect(process.env.ATLAS_URI);
        console.log('Connected to MongoDB')
    } catch(error) {
        console.log(error.message);
    }
}