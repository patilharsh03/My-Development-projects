const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName,
                },
            },
        ],
    };

    const jsonData = JSON.stringify(data);

    const url = "https://us14.api.mailchimp.com/3.0/lists/e13be557d4";

    const options = {
        method: "POST",
        auth: "harsh03:9cbab456752becd28dcf8a8b096e64bb-us14",
    }

    const request = https.request(url, options, function(response) {

        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }

        response.on("data", function(data) {
            console.log(JSON.parse(data));
        });
    });

    request.write(jsonData);
    request.end();

});

app.post("/failure", function(req, res) {
    res.redirect("/");
});


//app.listen(process.env.PORT <- for when deploying on the web (Heroku))
app.listen(process.env.PORT || 3000, function () {
    console.log("server is running on port 3000");
});

// API KEY
// 9cbab456752becd28dcf8a8b096e64bb-us14

// LIST ID
// e13be557d4
