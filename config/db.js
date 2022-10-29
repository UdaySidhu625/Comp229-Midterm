/*
Name: Uday Sidhu
Student Id: 301237202
Project : Midterm
*/

// Do not expose your credentials in your code.
let atlasDB = "mongodb+srv://UdaySidhu:1BuWGG6n4954hJ1i@cluster0.gp8wx4z.mongodb.net/test";

// Database setup
let mongoose = require('mongoose');

module.exports = function(){

    mongoose.connect(atlasDB);
    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error:'));
    mongodb.once('open', ()=>{
        console.log('===> Connected to MongoDB.');
    })

    return mongodb;
}