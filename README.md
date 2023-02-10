### Begin to start

#### install packages
- npm i bcrypt cors dotenv express express-async-errors joi jsonwebtoken mongoose morgan express-rate-limit express-validator nodemon    

----------------------------------------------------  
How to run this app:  
1. git checkout -b develop origin/develop //clone the develop branch to local  
2. npm install  
3. npm run dev // To start server  

At this stage, you can use postman to getAllPosts(hardcode without connecting to DB)  
-- localhost:3000/api/v1/posts  

-------------------------------------------------------------------------------------------
Tips:
When you happen to the situation that you cannot start server because the port is occupied,  
you need to close the port first. We use port 3000 as an example:

1. Check the PID and get it  
lsof -i tcp:3000  

2. close the Port by PID  
kill -9 PID