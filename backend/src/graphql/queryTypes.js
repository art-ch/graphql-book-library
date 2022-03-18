const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString
} = require('graphql');

const { authors, books } = require('../data');

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  description: 'This represents an author of the book',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    books: {
      type: new GraphQLList(BookType),
      resolve: (author) => books.filter((book) => book.authorID === author.id)
    }
  })
});

const BookType = new GraphQLObjectType({
  name: 'Book',
  description: 'This represents a single book written by an author',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    authorID: { type: GraphQLNonNull(GraphQLInt) },
    author: {
      type: AuthorType,
      resolve: (book) => authors.find((author) => author.id === book.authorID)
    }
  })
});

module.exports = {
  AuthorType,
  BookType
};
