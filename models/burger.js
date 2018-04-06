// import orm.js into burger.js
// create the code that will call the ORM functions using burger specific input for the ORM.
// Export at the end of the burger.js file.

var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    create: function(cols, cb) {
        orm.create("burgers", ["burger_name", "devoured"], [cols, false], cb);
    },
    update: function(burgerID, cb) {
        orm.update("burgers", {devoured: true}, burgerID, cb);
    }    
};

module.exports = burger;