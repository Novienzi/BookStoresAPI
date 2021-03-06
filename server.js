const express = require('express')
const bodyParser = require('body-parser')
const rootRoute = require('./routes/rootRoute')
const addBookStores = require('./routes/bookStores/addBookStores')
const getBookStores = require('./routes/bookStores/getBookStores')
const editBookStores = require('./routes/bookStores/editBookStores')
const deleteBookStores = require('./routes/bookStores/deleteBookStore')
const addLibrary = require('./routes/library/addLibrary')
const getLibrary = require('./routes/library/getLibrary')
const editLibrary = require('./routes/library/editLibrary')
const deleteLibrary = require('./routes/library/deleteLibrary')
const addBooks = require('./routes/books/addBooks')
const getBooks = require('./routes/books/getBooks')
const editBooks = require('./routes/books/editBooks')
const deleteBooks = require('./routes/books/deleteBooks')

const app = express()
app.use(rootRoute)

app.use(bodyParser.json())
app.use(getBookStores)
app.use(addBookStores)
app.use(editBookStores)
app.use(deleteBookStores)
app.use(addLibrary)
app.use(getLibrary)
app.use(editLibrary)
app.use(deleteLibrary)
app.use(addBooks)
app.use(getBooks)
app.use(editBooks)
app.use(deleteBooks)

const port = 3000
app.listen(port, () => {
  console.log(`Backend app is running in http://localhost:${port}`);
})
