const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Query  {
        me: User
    }

    type Book {
        _id: ID
        authors: [String]
        description: String
        title: String
        bookId: String
        image: String
        link: String
    }
    type User {
        _id: ID
        ussername: String
        email: String
        password: String
        savedBooks: [Book]
        bookCount: Int
    }
    type Auth {
        token: ID!
        user: User
    }
    
    input saveBookInput {
        description: String
        title: String
        bookID: String
        image: String
        link: String
        authors: [String]
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, password: String!, email: String!): Auth
        saveBook(body: saveBookInput): User
        removeBook(bookID: String!): User
    }

`;
modules.export= typeDefs