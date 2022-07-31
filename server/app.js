require('dotenv').config();
const db = require('./db');
const cors = require('cors');


// Express initialization
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const carriers = require('./routes/carriers');

app.use('/carriers', carriers);



app.listen(port, () => {
    console.log(`API server started on port ${port}`);
});