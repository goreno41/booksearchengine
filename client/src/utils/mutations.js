import gql from "graphql-tag";


const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                usernam
            }
        }
    }
`;

const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

const REMOVE_BOOK = gql`
    mutation removeBook($bookId: String!) {
        removeBook(bookId: $bookId) {
            username
            email
            bookCount
            savedBooks {
                authors
                description
                bookId
                image
                link
                title
            }
        }
    }
`;

const SAVE_BOOK = gql`
    mutation saveBook($book: SavedBookInput!) {
        saveBook(book: $book) {
            username
            email
            bookCount
            savedBooks {
                authors
                description
                bookId
                image
                link
                title
            }
        }
    }
`;



export default ADD_USER;
export default LOGIN_USER;
export default REMOVE_BOOK;
export default SAVE_BOOK;