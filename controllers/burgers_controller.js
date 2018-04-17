// import the following:

// Express
// burger.js
// Create the router for the app, and export the router at the end of your file.

var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        var burgObject = {
            burger: data
        };
        console.log(burgObject);
        res.render("index", burgObject);
    });
});

router.post("/api/food", function(req, res) {
    burger.create(["name", "devour"], [req.body.name, req.body.devour], function(result) {
        res.json({ id: result.insertID});
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update(
        {
            devour: req.body.sleepy
        },
        condition,
        function(result) {
            if (result.changeRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

module.exports = router;