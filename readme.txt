Rest API convention

|---------------------------------------------------------|
|   CRUD actions     |  HTTP Method |   Endpoints         |
|--------------------|--------------|---------------------|
|   Get all contacts |      GET     |   /api/contacts     |
|--------------------|--------------|---------------------|
|   Get contact      |      GET     |   /api/contacts/:id |  
|--------------------|--------------|---------------------|
|   Create contact   |      POST    |   /api/contacts     |  
|--------------------|--------------|---------------------|
|   Update contact   |      PUT     |   /api/contacts/:id | 
|--------------------|--------------|---------------------|   
|   Delete contact   |      DELETE  |   /api/contacts/:id | 
|--------------------|--------------|---------------------|



1. Express Project Setup
2. Create Express Server
3. Thunder Client Setup
4. Express Router Setup
5. Error Handling
   Async Handler
6. Express Middleware
7. MongoDB Setup
8. Mongoose Schema
9. CRUD API
10. User Authentication
11. Registration & Login API
12. Controllers & DB Operations
13. Password Hashing & Comparing
14. Sign/verify JWT Token
15. Handle Relationships
16. Protect Routes
17. User Authorization
18. API Testing


npm i express, mongoose, express-async-handler, dotenv, bcrypt, jsonwebtoken



{
   "name": "Dipesh",
   "email": "dipesh@gmail.com",
   "phone": "098765423"
}
{
   "username": "dmailvia",
   "email": "dipesh.dmailvia@gmail.com",
   "password": "123456"
}