## Welcome to Pet Lover

----------------------------------------------------  
### How to run this app:  
1. git checkout -b develop origin/develop //clone the develop branch to local  
2. npm install  
3. create .env file in your branch  
4. in the .env, type: CONNECTION_STRING={database host + database_name} for example: CONNECTION_STRING=mongodb://localhost:27017/pet-lover  
5. in your database, create a new database(ex. pet-lover) -> add three collections: posts, users and comments -> import data using users.json, posts.json and comments.json  
6. npm run dev // To start server  
 

-------------------------------------------------------------------------------------------
### Tips:  
When you happen to the situation that you cannot start server because the port is occupied,  
you need to close the port first. We use port 3000 as an example:  

Method 1:  
kill -9 $(lsof -ti:3000)  

Method 2:
1. Check the PID and get it  
lsof -i tcp:3000  
2. close the Port by PID  
kill -9 PID

-------------------------------------------------------------------------------------------