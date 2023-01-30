'use stict';
console.log('server running!');

//1. use express for our server
const express = require('express');
//2. add dotenv for port
require('dotenv').config();
//3. require cors
const cors = require('cors');


//4. use express
const app = express();
//5. use cors
app.use(cors());
const PORT = process.env.PORT || 5005;










app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));