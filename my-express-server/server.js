const express = require("express");

const app = express();

app.get("/", function(req, res) {
	res.send("<h1>Hello, World!</h1>");
});

app.get("/contact", function(req, res) {
	res.send("Contact Me: harsh@gmail.com");
});

app.get("/about", function(req, res) {
	res.send("Hi, I am Harsh, I'm Learning Express");
});

app.get("/hobbies", function(req, res) {
	res.send("<ul><li>Coding</li><li>Web Series</li></ul>")
});

app.listen(3000, function() {
	console.log("server has started on port 3000");
});