const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');




//express app
const app = express();

//register view engine
app.set('view engine', 'ejs')

//middleware & static files 
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }))

const db = mysql.createConnection({
    multipleStatements: true,
    host: 'localhost',
    user: 'josh',
    password: 'password',
    database: 'project'
});

db.connect();

//When the index page is called in the search bar it will return the index.ejs file
app.get('/index', (req, res) => {
    res.render('index');
});

//Looks for data in the databse to print to add page
var obj = {};
app.get('/results', (req, res) => {
    const sql = 'SELECT town, postcode FROM location';

    db.query(sql, (err, result) => {
        if(err) throw err;
        obj = {locations: result}
        res.render('results', obj);
    });
});

app.get('/add', (req, res) => {
    res.render('add');
});

app.post('/add', (req, res) => {
    
    db.query(`INSERT INTO location (town, postcode, lat, lng) VALUES ('${req.body.town}', '${req.body.postcode}', ${req.body.lat}, ${req.body.lng});`, (err, result) =>  {
        if(err) throw err;
        console.log('success added to db!');
        res.render('add');
  });

});

app.listen(3000, () => console.log('Server started'));
