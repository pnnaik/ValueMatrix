# Project Name: ValueMatrix

## Project Run Steps frontend


   - step1: opne Terminal select CMD and write "cd client"  
   -  step2: Write npm start  
 
## Project Run Steps Backend

   -  step1:  opne Terminal select and write "cd server" 
   -   step2: Write node server.js

  
  
## MongoDB Connection Steps

1. **Create a MongoDB Atlas Account**
   - Visit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)  
   - Sign up and create a **Free Cluster**  

2. **Create Database & User**
   - In the cluster, click **Database → Create Database**  
   - Add a database user (username & password)  

3. **Get Connection URI**
   - Click **Connect → Connect your application**  
   - Copy the connection string (URI), it looks like:
   - Add your MongoDB URI in .env file:  Add a database user (username & password)   and database name :
   - MONGO_URI=mongodb+srv://<Your username >:<Password>@cluster0.mongodb.net/<databaseName>?retryWrites=true&w=majority 

