const { GraphQLNonNull, GraphQLInt, GraphQLString } = require('graphql');

const { books, authors } = require('../data');
const { BookType, AuthorType } = require('./queryTypes');

const addBook = {
  type: BookType,
  description: 'Add a new book',
  args: {
    name: { type: GraphQLNonNull(GraphQLString) },
    authorID: { type: GraphQLNonNull(GraphQLInt) }
  },
  resolve: (_, args) => {
    const { name, authorID } = args;
    const book = {
      id: books.length + 1,
      name,
      authorID
    };
    books.push(book);
    return book;
  }
};

const addAuthor = {
  type: AuthorType,
  description: 'Add a new author',
  args: {
    name: { type: GraphQLNonNull(GraphQLString) }
  },
  resolve: (_, args) => {
    const { name } = args;
    const author = {
      id: authors.length + 1,
      name
    };
    authors.push(author);
    return author;
  }
};

module.exports = { addBook, addAuthor };
