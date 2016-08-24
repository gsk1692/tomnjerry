# tomnjerry
A simple site with a chat room implemented using socket.io (which uses WebRTC).

Please note that you must have Node.js installed in your system.

#Server
Server is written in Node.js

#About Site
Just a sample website. Click on the link "Chat Room" in navbar to experience the chat

#How to run (For those not familiar to Node.js)
Put all the files in a project directory of your choice
<br />
Open Terminal
<br />
Navigate (cd) to your project directory
<br />
Give the command "npm start"
<br />
You will see that the server is running on port 4443 (or 3000 - see comments in server.js)
<br />
Head on to your browser and type https://localhost:4443" ("http://localhost:3000" - see comments in server.js)
<br />
Click on the Chat Room link in navbar

#For HTTPS
To get the cert.pem and key.pem, you must run the openssl command
<br />
openssl req -nodes -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365


#Voila! That's it!
