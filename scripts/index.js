const mysql  = require('mysql');
const express = require('express');
const _ = require('lodash');


const db = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: 'password'
});

db.connect((err) => {
    if(!err){
        console.log('databse connected successfully')
    }
    else{
        console.log('error');
    }
});

// let sql = `INSERT INTO location()
//            VALUES('Learn how to insert a new row',true)`;


// connection.query(sql);

// connection.end();
