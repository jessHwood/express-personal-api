// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    name: "Jess Wood", 
    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/jessHwood/express-personal-api", 
    base_url: "https://warm-castle-32625.herokuapp.com/", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"}, 
      {method: "GET", path: "/api/vacations", description: "Show some of my vacations"}, 
      {method: "GET", path: "/api/vacations/:id", description: "Show a vacation by Id"}
    ]
  });
});

app.get('/api/profile', function api_index(req, res) {

  res.json({
    name: "Jess Wood", 
    github_link: "https://github.com/jessHwood", 
    base_url: "https://warm-castle-32625.herokuapp.com/", 
    current_city: "Sweet Ridge",
    pets: [
      {name: "Froh", type: "AwesomeCat", breed: "Orange Tabby"},
      {name: "Xela", type: "Doggie", breed: "Border Collie Chocolate Lab Mutt"}
    ]
  });
});
//get all vacations
app.get('/api/vacations', function (req, res){
  db.Vacation.find(function(err, vacations){
    if(err) {return console.log("index error:" + err); }
    res.json(vacations);
  });
});

//get one vacation
app.get('/api/vacations/:id', function (req, res) {
  db.Vacation.findOne({_id: req.params.id }, function(err, data) {
    res.json(data);
  });
});

app.post('/api/vacations', function(req, res){
  var newVacation = new db.Vacation ({
    country: req.body.country,
    date: req.body.date,
    image: req.body.image,
  });

  newVacation.save(function (err,vacation){
    if(err) {
      return console.log("save error" + err);
    }
      console.log("saved" + vacation.country);
      res.json(vacation);
  });
});
/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
