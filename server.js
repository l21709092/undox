const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

let users = JSON.parse(fs.readFileSync('./data/users.json', 'utf-8') || '{}');
//endpoint to register a new user
app.post('/register', (req, res) => {
    //recieve public key +hashes
// save to users object and write back to users.json
});

//endpoint to get a user's public key
app.post('/verify', (req, res) => {
    //receive a new session hash
    // compare with stored hashes
    // respond verified/not verified
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));