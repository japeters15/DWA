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

# Debug Tool Usage
In order to start the debug tool you must add "DEBUG=true" in the front of "nodemon lib/test.js"

## Example Usage
const util = require('utility_debug_tool');

//bump versions (patch, minor, major)
const patch = util.bump('3.3.3', 'patch');
const minor = util.bump('3.3.3', 'minor');
const major = util.bump('3.3.3', 'major');

// Success messages
util.debug('patch', patch, true);
util.debug('minor', minor, true);

// Error Messages
util.debug('major', major, false);


# Workflow
In order to add a new feature you would start by creating a new branch "git checkout name_of_new_branch" then "git push origin release". Now that your new branch is created you need to merge it into the master branch by going back into your master branch "git checkout master" and "git merge name_of_new_branch".

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
I am not really sure how to explain the deployment of this assignment. I will try: Open up the browser and pull up Heroku. You will need to create an account and create a new app. You will link the account with your github repo and then choose which branch you will use. If you have a database, you will need to install ClearDB app so go to the resources tab and search for it. Once you have connected it go into settings and click Config Vars and enter all of your database information. Now you need to create a pipeline to connect a deploy branch and a release one. So create a new app and add it into the pipeline as the production app and your first one will become the staging app which all information will deploy to.
