# backend_authentication_nat


This is a simple backend server that validates a user's email address and password. It uses the bcrypt library to hash the password before storing it in the database.

# backend-server-bcrypt

This is a simple backend server that validates a user's email address and password. It uses the bcrypt library to hash the password before storing it in the database.


## Getting Started  

1. Install dependencies: `npm install`
2. Start the server: `node server.js`
3. Open the browser to `http://localhost:5000`

## Endpoints

### POST /login

This endpoint validates a user's email address and password.

#### Request

```json
{
  "email": "
    "password": "
}
```

#### Response

```json
{
  "success": true,
  "message": "Login successful"
}
```

### POST /register

This endpoint registers a new user.


#### Request

```json
{
  "email": "
    "password": "
}
```

#### Response

```json
{
  "success": true,
  "message": "Registration successful"
}
```



