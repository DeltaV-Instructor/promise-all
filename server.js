'use stict';
console.log('server running!');

//1. use express for our server
const express = require('express');
//2. add dotenv for port
require('dotenv').config();
//3. require cors
const cors = require('cors');
