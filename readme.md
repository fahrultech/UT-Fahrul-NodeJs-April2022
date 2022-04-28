# API Test

## Purpose Of Project
This is the project test for Ulven Tech Nodejs developer

## Stack
- Node.js
- SQLite
- Swagger (for API Documentation)

## Requirement
- You need to have node.js installed in your computer

## Usage
## Clone the repository
Clone this repository using comman below
```
git clone git@github.com:fahrultech/UT-Fahrul-NodeJs-April2022.git
```

### Env Variables
Create .env file in the root and add following
```
PORT = 4000
JWT_TOKEN_KEY = secret
```
### Install Dependencies
Before run the app you need to install node module depencies
```
npm install
```
### Start the app
To start the app use command below :
```
npm start
```

### How access the API
- swagger -> http://localhost:4000
- Postman

### Task
1. Create an API where the administation can sign up an account
- Method : POST
```
http://localhost:4000/api/v1/admin/register

body parameter :
{
    "name" : "admin",
    "email" : "admin@email.com",
    "password" : "password123"
}
```
2. Create an API where the administrator can sign in an account
- Method : POST
```
http://localhost:4000/api/v1/admin/login

body parameter :
{
    "email" : "admin@email.com",
    "password" : "password123"
}
```
3. Create an API where the customer can sign up an account
- Method : POST
```
http://localhost:4000/api/v1/customer/register

Body parameter :
{
    "name" : "customer"
    "email" : "customer@email.com",
    "password" : "password123"
}
```
4. Create an API where the customer can sign in an account
- Method : POST
```
http://localhost:4000/api/v1/customer/login

Body parameter :
{
    "email" : "customer@email.com",
    "password" : "password123"
}
```

5. Create an API where it returns hello world using authorization header with JWT Token and this API can only be access by admin
```
http://localhost:4000/api/v1/message/admin

Header Parameter :
Authorization : Bearer {tokenKeyFromLogin}
```

6. Create an API where it returns hello world using authorization header with JWT Token and this API can only be access by customer
```
http://localhost:4000/api/v1/message/customer

Header Parameter :
Authorization : Bearer {tokenKeyFromLogin}
```