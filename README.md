This project is a Node.js API built with Express, enabling users to create and manage business cards. It supports various user roles, including business users, admin users, and regular users. You can read the documentation here:
  [Link Text](https://documenter.getpostman.com/view/29937654/2sA3XSBgyh)
- ## Features
### Users:
- **Get Users**: Retrieve a list of all users.
- **Register User**: Register a new user in the system.
- **Login**: Authenticate a user and provide a token.
- **Get User By ID**: Retrieve a user's details using their ID.
- **Edit User**: Update user information.
- **Delete User**: Remove a user from the system.
- **Patch User's Business Status**: Update the business status of a user.
- **Login with Google**: Authenticate a user using their Google account.

### Cards:
- **Get Cards**: Retrieve a list of all cards.
- **Get User's Cards**: Retrieve a list of cards associated with a specific user.
- **Get Card By ID**: Retrieve details of a card using its ID.
- **Create Card**: Add a new card to the system.
- **Edit Card**: Update card information.
- **Like Card**: Like a specific card.
- **Patch Card Business Number**: Update the business number of a card.
- **Delete Card**: Remove a card from the system.


- ## Authentication
- The API uses JWT for authentication. Tokens include properties for user roles (isBusiness, isAdmin) and user ID. Authorization middleware ensures appropriate permissions for protected endpoints.
In addition there's a cors policy that will allow only approved IPs to send requests, and a rate limiter that won't allow more than 100 requests per second
There is also an option for logging in with google with google's auth library with oauth2. It requires the frontend to have a login with google button that sends a get request to /users/auth/google and redirects to the url provided from that endpoint. it then continues with google's authentication and confirmation, then it will redirect to an endpoint in the front end called /google-login with a token in the url params, take that token and login with it in the front end.
 
### Installation
1.Clone the repo:
```
git clone <repository-url>
```
2.Install dependencies:
```
npm install
```
3.Run the server locally:
```
npm run dev
```
4.Run the server on mongodb atlas:
```
npm run start
```


#### I am adding here the list of users and their passwords to make it easier to use
#### If you don't want to, you can sign up and build your user:
```
admin@gmail.com       Aa1234!
bussiness@gmail.com   Aa1234!
regular@gmail.com     Aa1234!

```
