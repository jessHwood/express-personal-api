var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || 
                  process.env.MONGOLAB_URI || 
                  process.env.MONGOHQ_URL || 
                  "mongodb://localhost/personal-api");

// mongoose.connect( process.env.MONGODB_URI || "https://warm-castle-32625.herokuapp.com/" );

module.exports.Vacation = require("./vacations.js");
