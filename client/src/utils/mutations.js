import gql from 'graphql-tag';

export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $password: String!, $email: String!) {
        addUser(username: $username, password: $password, email: $email) {
            user {
                _id
                username
                email
                bookCount
                savedBooks {
                    title
                    description
                    bookId
                    image
                    link
                }
            }
            token
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($input: savedBook!) {
        saveBook (input: $input) {
            _id
            username
            email
            bookCount
            savedBooks {
                # _id
                bookId
                title
                authors
                description
                image
                link
            }
        }
    }
`;



export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: ID!) {
        removeBook(bookId:$bookId) {
            _id
            username
            email
            bookCount
            savedBooks {
                # _id
                bookId
                title
                authors
                description
                image
                link
            }
        }
}
`;