const express = require('express');

const app = express();

//Routes (reqUEST, resPONSE)
app.get('/', (req, res) => {
    res.send('We are on home');
});

app.get('/posts', (req, res) => {
    res.send('We are on posts now');
});




app.listen(4000);