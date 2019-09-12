const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({expected:false}));

const Users = require('./routes/Users');
app.use('/users', Users);

app.listen(port, ()=>{
   console.log('Сервер стартанул на порту: ' + port);
});