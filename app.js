const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//Routes (reqUEST, resPONSE)
app.get('/', (req, res) => {
    res.send('We are on home');
});

app.get('/posts', (req, res) => {
    res.send('We are on posts now');
});


//Connect to DB
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
mongoose.connect(process.env.DB_CONNECTION, options, () => console.log('connected to DB'));

//How do we start listening to the server
app.listen(4000);