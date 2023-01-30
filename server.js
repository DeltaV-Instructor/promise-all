'use stict';
console.log('server running!');

//1. use express for our server
const express = require('express');
//2. add dotenv for port
require('dotenv').config();
//3. require cors
const cors = require('cors');
const { response } = require('express');


//4. use express
const app = express();
//5. use cors
app.use(cors());
const PORT = process.env.PORT || 5005;

//8. Add a home route
app.get('/', (req,res) => {
  res.status(200).send('Hello from server file!');
})



let longTask = (status) => new Promise( (resolve,reject) => {
  let timer = Math.floor(Math.random() * 1000);
  setTimeout( () => {
    if( status ) { resolve(`Good (${status} / ${timer})`); }
    else { reject('Bad'); }
  },timer);
});

longTask('First One')
  .then(task => console.log('Task', task))
  .catch(console.error);





















//7. add 404 route handleing
app.get('*', (req, res) => {
  res.status(404).send('This route is lost in space!');
});



//6. add listen() to keep server up and running
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));