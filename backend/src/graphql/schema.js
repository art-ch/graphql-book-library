const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInt
} = require('graphql');

const { books, authors } = require('../data');
const { BookType, AuthorType } = require('./queryTypes');
const { addBook, addAuthor } = require('./mutationFields');

const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({
    book: {
      type: BookType,
      description: 'A Single Book',
      args: {
        id: { type: GraphQLNonNull(GraphQLInt) }
      },
      resolve: (_, args) => books.find((book) => book.id === args.id)
    },
    author: {
      type: AuthorType,
      description: 'A Single Author',
      args: {
        id: { type: GraphQLNonNull(GraphQLInt) }
      },
      resolve: (_, args) => authors.find((author) => author.id === args.id)
    },
    books: {
      type: new GraphQLList(BookType),
      description: 'List of All Books',
      resolve: () => books
    },
    authors: {
      type: new GraphQLList(AuthorType),
      description: 'List of All Authors',
      resolve: () => authors
    }
  })
});

const RootMutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root Mutation',
  fields: () => ({
    addBook,
    addAuthor
  })
});

module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType
});
