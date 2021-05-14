const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const mongojs = require('mongojs');
const util = require('util');

const PORT = process.env.PORT || 3007;

const app = express();

const databaseUrl = 'excercise';
const collections = ['workout'];

const db = mongojs(databaseUrl,collections);

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

db.on('error', error => {
    console.log("DB Error:", error);
});

app.listen(PORT, () => {
    console.log('App listening on 3007');
});