var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var VacationSchema = new Schema({
     country: String,
     date: String,
     image: String
});

var Vacation = mongoose.model('Vacation', VacationSchema);
module.exports = Vacation;