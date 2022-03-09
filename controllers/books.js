import { Book } from '../models/book.js'

function index(req, res) {
  Book.find({})
  .then(books => {
    res.render('books/index', 
    {books})
  })
}

function newBook(req, res) {
  res.render('books/new')
}

function create(req, res) {
  req.body.isRead = false
  Book.create(req.body)
  .then(()=> {
    res.redirect('/books')
  })
}

function deleteBook(req, res) {
  Book.findByIdAndDelete(req.params.id)
  .then(() =>{
    res.redirect('/books')
  })
}

export {
index,
create,
newBook as new,
deleteBook as delete,
}