//importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

// Connect to mongo db
mongoose.connect('mongodb://localhost:27017/contactlist', { useNewUrlParser: true });

//On DB connection
mongoose.connection.on('connected', () => {
    console.log("Conneected to DB");
});

// IF DB Error
mongoose.connection.on('error', (err) => {
    if (err) {
        console.log("DB Connection Error" + err);
    }
});

//Port No
const port = 3000;

//adding middleware
app.use(cors({origin: 'http://localhost:4200'}));
// body parser
app.use(bodyparser.json());

app.use('/api', route);




app.use(express.static(path.join(__dirname, 'public')));

//testing server
app.get('/', (req, res) => {
    res.send('Hello Lithin');
});
app.listen(port, () => {
    console.log("Server Started:" + port);
})