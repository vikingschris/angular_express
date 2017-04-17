var express = require("express");
var path = require("path");
var app = express();
var url = "mongodb://localhost:27017/test";
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var bodyParser = require("body-parser");

app.use(express.static(__dirname + "/public"));
// or
/*
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});*/

app.use("/node_modules", express.static(__dirname + "/node_modules"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get("/api/test_backend", function (req, res) {
    res.send("hello backend");
});

app.get("/api/sports", function (req, res) {
    MongoClient.connect(url, function (err, db) {
        if (err) {
            console.log("error occurred");
            return;
        }
        var collection = db.collection("teams");
        collection.find().toArray(function (e, items) {
            if (e) {
                console.log("not found");
                return;
            }
            res.send(items);
            db.close();
        })
    })
});

app.post("/api/view/sport", function (req, res) {
    MongoClient.connect(url, function (err, db) {
        if (err) {
            console.log("error occurred");
            return;
        }
        var collection = db.collection("teams");
        collection.find({fav: req.body.team}).toArray(function (e, items) {
            if (e) {
                console.log("not found");
                return;
            }
            res.send(items);
            db.close();
        })
    })
});
app.get("/resource/api/:sport", function(req, res) {
    MongoClient.connect(url, function (err, db) {
        if (err) {
            console.log("error occurred");
            return;
        }
        var collection = db.collection("teams");
        collection.find({fav: req.params.sport},{_id: 0}).toArray(function (e, items) {
            if (e) {
                console.log("not found");
                return;
            }
            res.send(items[0]);
            db.close();
        })
    });
});


app.listen(3000, function () {
    console.log("app working");
});