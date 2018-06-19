import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";


const port = process.env.port || 3000;

const app = express();
app.use(cors());

app.get('/', (req, res) =>
 	res.send('Hello World!')
);

app.get('/api/exercises', (req, res) => {

});

app.get('/api/custom-exercises', (req, res) => {

});

app.listen(3000, () => {
	console.log(`Listening on port ${port}`);
});