MERN Video Chat Application (Chatify)
===========================
 *เป็น Application ที่สร้างขึ้นโดยใช้ MERN Stack (MongoDB, Express, React, NodeJS) เป็นแอปพลิเคชันไว้สำหรับแชท วิดีโอคอล โดยผู้ใช้จะต้องเข้าสู่ระบบก่อนการใช้งานแอปพลิเคชัน ซึ่งในระบบจะมี 2 roles อยู่ด้วยกันคือ admin และ user. Admin สามารถดู User List ทั้งหมดที่มีอยู่ในระบบได้*
  
Link
-------

* [React](https://github.com/HaDiizz/react-chat-application)

* [Node](https://github.com/HaDiizz/node-chat-application)

Members
--------
นายฉฏาธร  พิถยพิโลน   6310110078
- *Duty: Backend, Socket Server, Peer Server, Express Server Configuration, REST API*

นายธนภัทร  รอดภาษา   6310110188
- *Duty: Frontend, UI Design, Socket Client, Chat and Video Call with PeerJS*

นายนัฐพล   สิงหาด     6310110240
- *Duty: Frontend, State Management using Redux, Login/Sign-In/Logout System including Admin Middleware*

Demo
--------
* [Video Demo](https://www.youtube.com/watch?v=C1GjtSzoS_c)

* Login

![image](https://user-images.githubusercontent.com/114381896/224270477-e124079c-8d04-4f08-8202-f224d7637dd2.png)

* Signup

![image](https://user-images.githubusercontent.com/114381896/224270613-6557e368-2188-49cf-b87c-d4248ea172aa.png)

* Home [User]

![image](https://user-images.githubusercontent.com/114381896/224270119-aacc52bd-8c1a-46f7-95a4-8ef0ace561bc.png)
![image](https://user-images.githubusercontent.com/114381896/224270206-9ac1242e-f58f-4751-995c-d2d42a195b66.png)

* Home [Admin]

![image](https://user-images.githubusercontent.com/114381896/224270037-13c7a586-e3fa-4817-8299-305240699663.png)
![image](https://user-images.githubusercontent.com/114381896/224270267-64c66b1a-b6d5-4acf-a598-16b219d35af4.png)


* User Management [Admin]

![image](https://user-images.githubusercontent.com/114381896/224270362-04fb7a46-76b2-4ba6-8605-fc147e6d733c.png)

Tech Stacks and Libraries
--------
-   ReactJS 
-   Tailwind CSS 
-   PeerJS
-   React-Router-DOM V6
-   React-Redux, Redux-Thunk, Redux 
-   React-icons 
-   Socket.io-client
-   Axios 
-   Moment
-   NodeJS
-   Express
-   Peer
-   Bcrypt
-   Compression 
-   Cookie-Parser
-   Cors  
-   Socket.io
-   Dotenv
-   Mongoose
-   Jsonwebtoken
-   PM2


-------

This app was built by HaDiizz. The React app is available at <https://github.com/HaDiizz/react-chat-application>, and the Node.js app is available at <https://github.com/HaDiizz/node-chat-application>.
This is a simple chat application built with React, Node.js, PeerJS, Socket.IO, PM2, Compression, and MongoDB. The app allows users to sign up, log in, and log out, and then communicate with each other through text chat and video calls. The app has two roles: user and admin. Users can chat and call each other, while admins have access to all user information in the MongoDB database.

Requirements
------------

To run this app, you'll need to have the following installed on your machine:

-   Node.js 
-   MongoDB 

Installation
------------

1.  Clone the repository to your local machine:

    ```
    git clone https://github.com/HaDiizz/react-chat-application.git
    ```
    
    ```
    git clone https://github.com/HaDiizz/node-chat-application.git
    ```

2.  Install the dependencies for the React app:

    ```
    cd client
    npm install
    ```

3.  Install the dependencies for the Node.js app:

    ```
    cd node-chat-application
    npm install
    ```
4. Create a .env file in the root directory with the following variables

    ```
    MONGODB_URL = 
    DEFAULT_AVATAR = 
    ACCESS_TOKEN_SECRET = 
    REFRESH_TOKEN_SECRET = 
    PRODUCTION = 
    DEVELOPMENT = 
    ```

5.  Start the Node.js app:

    ```
    npm start
    ```

6.  Start the React app:

    ```
    cd react-chat-application
    npm start
    ```

    The app should now be running at `http://localhost:3000`.

Usage
-----

### Sign Up

To sign up for an account, click on the "Sign Up" button on the login page and enter your details in the form. Once you submit the form, you will be logged in automatically.

### Log In

To log in to your account, enter your email and password on the login page and click the "Log In" button.

### Log Out

To log out of your account, click on the "Log Out" button in the top right corner of the app.

### Chatting

To start a chat with another user, enter their PeerJS ID in the input field at the bottom of the screen and click the "Connect" button. Once the other user accepts the connection, you can start chatting with them.

### Video Calling

To start a video call with another user, enter their PeerJS ID in the input field at the bottom of the screen and click the "Connect" button. Once the other user accepts the connection, you can start a video call with them.

### User Status

To see which users are currently online, check the list of users in the sidebar. Users who are currently online will have a green dot next to their name.

### Admin Access

To access the admin panel, log in with an admin account. Once you are logged in, you can view all user information in the MongoDB database.

Clustering and Monitoring
------------

This is a simple example showing how to use [PM2](https://pm2.keymetrics.io/) to create a cluster of three Node.js instances and monitor them using the [PM2 web interface](https://app.pm2.io/).

Prerequisites
-------------

Before you begin, you'll need to have the following installed on your machine:

-   [Node.js](https://nodejs.org/)
-   [PM2](https://pm2.keymetrics.io/)

Getting Started
---------------

1.  Start the Node.js cluster with PM2:

    ```pm2 start index.js -i 3```

    This will start three instances of the app.js file in cluster mode.
    
    ![image](https://user-images.githubusercontent.com/114381896/223626477-7f2f8f1c-7377-4176-b45a-65584d774661.png)

5.  Open the PM2 web interface:


    ```pm2 link your-pm2-account```

    This command will link your PM2 account with the current instance of PM2 running on your machine. Follow the instructions to complete the linking process.

6.  Navigate to the [PM2 web interface](https://app.pm2.io/) and log in with your PM2 account credentials.

    You should see a dashboard showing the status of your PM2 instances.

That's it! You've now created a PM2 cluster with three instances and monitored them using the PM2 web interface.

![image](https://user-images.githubusercontent.com/114381896/223625805-71083e06-7f53-4f70-b806-1647f06098df.png)
![image](https://user-images.githubusercontent.com/114381896/223626579-7eb4b378-0c9c-4c80-b662-a000b43a39b9.png)

