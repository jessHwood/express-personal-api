// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var vacationList = [
	{
		country: "Thailand",
		date: "January 2012",
		image: "http://images.kuoni.co.uk/73/thailand-40155070-1482924456-ImageGalleryLightboxLarge.jpg"
	},
	{
		country: "Laos",
		date: "February 2012",
		image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2013/10/10/22/laos.jpg"
	},
	{
		country: "Cambodia",
		date: "March 2012",
		image: "http://www.redsavannah.com/media/24184/luxury-cambodia-holidays-tapromh-iS.jpg"
	}
];


db.Vacation.create(vacationList, function(err, vacations){
	if (err){
	return console.log("Error:", err);
	}
  console.log("Created new vacation", vacations.length, "vacations");
  process.exit(); // we're all done! Exit the program.
});
