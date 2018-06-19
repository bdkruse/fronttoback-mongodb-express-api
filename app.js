var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');

app.use(bodyParser.json());
app.use(cors());


Book = require('./models/book');

//Connect to mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.get('/', function(req, res) {
	res.send('please use /api/books');
});

//BOOK CALLS

//get all
app.get('/api/books', function(req, res){
	Book.getBooks(function(err, books){
		if(err) {
			throw err;
		}
		res.json(books);
	});
});

//get one
app.get('/api/books/:_id', function(req, res){
	Book.getBookById(req.params._id, function(err, book){
		if(err) {
			throw err;
		}
		res.json(book);
	});
});

//add book
app.post('/api/books', function(req, res){
	var book = req.body;
	Book.addBook(book, function(err, book){
		if(err) {
			throw err;
		}
		res.json(book);
	});
});

//update book
app.put('/api/books/:_id', function(req, res){
	var id = req.params._id;
	var book = req.body;
	Book.updateBook(id, book, {}, function(err, book){
		if(err) {
			throw err;
		}
		res.json(book);
	});
});

//delete book
app.delete('/api/books/:_id', function(req, res){
	var id = req.params._id;
	Book.deleteBook(id, function(err, book){
		if(err) {
			throw err;
		}
		res.json(book);
	});
});

app.listen(3000);
console.log('Running on port 3000');