import './loadEnv.js';
import {conn} from './db/conn.js';
conn();
import express from 'express';
import morgan from 'morgan'

import grades from './routes/grades.js'

console.log(process.env.ATLAS_URI)

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.json());

app.use('/grades', grades);

app.get("/", (req, res) => {
  res.send("Welcome to the API.");
});

// Global error handling
app.use((err, req, res, next) => {
  res.status(500).send("Seems like we messed up somewhere...");
});


app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})