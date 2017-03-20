# Url_Shortener
  Designed in order to shorten long urls.

# Unit Tests
For this step you will need to npm install (chai, mocha, and supertest.)

In your terminal type: mocha in order to run the tests.

# Installation Process
 Click the green button that says, "clone or Download" above on the right.
 After you have cloned or downloaded the application you will then need to open up your terminal and download a few things!<br/>

 First: Install npm by typing "npm install"
 Second: Install nodemon by typing "npm install nodemon"
 Third: Start the server by typing "node src/server.js"
 Your server should be running on port 3000!

# Style Guide
Your IDE must support the latest ESLint plugin. Atom (https://atom.io) is recommended for your IDE.
<img src="views/images/atom.png" alt="atom"> <br/>
First you want to install all of the following eslint packages:
npm i --save-dev --save eslint eslint-conig-airbnb eslint-plugin-import eslint-plugin-jsx-ally eslint-plugin-react. (You might have to install the jsx-ally seperate.)
You also want to go to the settings section in Atom and install the linter-eslint package, this will allow each file to lint.
Here is a link to the npm website that also has a great walk thorugh of how to install and use it as well.
<br/>

# Workflow
First create a new feature branch, merge the feature branch into the master branch, create a new tag, and merge the master branch into the release branch.

# My Endpoints
POST /api/v1/urls
  Create a shortened URL
GET /api/v1/urls
  Display all URLS
GET /api/v1/urls/:id
  Display URL based upon id
POST /api/v1/urls/:id
  Update URL based upon id
DELETE  /api/v1/urls/:id
  Delete url based upon id
>>>>>>> style_guide

# Deployment
In order to deploy the server, you will need to be in terminal and type in "ssh root@45.55.76.33" this will open up the server and then type node src/server.js and the server should then be running.
Now go into your browser and type "http://45.55.76.33/" This should be where the server is running. I am not sure where else to go from here. 
