//First, we need to require the Express module
var express = require("express");
//Next, we are going to invoke the function returned to the express variable. Requiring "express" returns a "CreateApplication" function that we store in the express variable before we invoke it
// invoke var express and store the resulting application in var app
var app = express();
//Now that we have created our express app, let's use it to handle requests:

// let's handle the base route "/" and respond with "Hello Express"
app.get('/', function(request, response) {
  response.send("<h1>Hello Express</h1>");
})
// notice that the function is app.get(...) why do you think the function is called get?
//We have loaded the express module into our server file, invoked it to create the server itself, and created a route for the server to handle. Now we just have to tell the server to listen!

// Tell the express app to listen on port 8000
app.listen(8000, function() {
  console.log("listening on port 8000");
})
// this line will almost always be at the end of your server.js file (we only tell the server to listen after we have set up all of our rules)

// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views');
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

//Let's say we wanted to add a route to our app that displays a list of users. We aren't going to get our list of users from the database, we're just going to hard code our data for now. Let's add a new route to our server.js file that will render an ejs view and pass it some user data.
app.get("/users", function (request, response){
    // hard-coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"},
        {name: "Jay", email: "jay@codingdojo.com"},
        {name: "Brendan", email: "brendan@codingdojo.com"},
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
})
//Notice we are passing a JavaScript object to the response.render() method
