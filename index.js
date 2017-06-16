//Create a variable for express which will help run the server
const express = require('express')

//Use express to initialize our server application
const app = express ()

//Tell node to compile .pug files to HTML
app.set('view engine', 'pug')

//Set up our Routes
app.get('/', function(req, res){
    res.render('index', {title:'Home'})
})

app.get('/about', function(req, res){
    res.render('about', {title:'About'})
})

app.get('/contact', function(req, res){
    res.render('contact', {title:'Contact'})
})

//Tell the server how to start
//Our server URL is localhost:3000
app.listen(3000, function(){
    console.log('Server is running on PORT 3000')
})

