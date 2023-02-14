### Begin to start

----------------------------------------------------  
How to run this app:  
1. git checkout -b develop origin/develop //clone the develop branch to local  
2. npm install  
3. create .env file in your branch  
4. in the .env, type: CONNECTION_STRING={database host + database_name} for example: CONNECTION_STRING=mongodb://localhost:27017/pet-lover  
5. in your database, create a new database(ex. pet-lover) -> add two collections: posts and users -> import data using users.json and posts.json  
6. npm run dev // To start server  
 

At this stage, you can successfully connect to the database and use postman to getAllPosts, getAllUsers and getAComment  
-- Get: localhost:3000/api/v1/posts  
-- Get: localhost:3000/api/v1/users  
-- Get: localhost:3000/api/v1/comments/63eb18d4d7f5418c19c17b84  
-------------------------------------------------------------------------------------------
Tips:
When you happen to the situation that you cannot start server because the port is occupied,  
you need to close the port first. We use port 3000 as an example:  

1. Check the PID and get it  
lsof -i tcp:3000  

2. close the Port by PID  
kill -9 PID

-------------------------------------------------------------------------------------------
### Packages we use:  
- bcrypt cors dotenv express express-async-errors joi jsonwebtoken mongoose morgan express-rate-limit express-validator nodemon  