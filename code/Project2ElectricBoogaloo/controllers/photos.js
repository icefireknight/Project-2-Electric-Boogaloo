const Photo = require('../models/photos');

module.exports = {
    new: newPhoto,
    create,
    index
};

function index(req, res) {
    console.log(req.user, '< - req.usre')
    Photo.find({}, function (err, photos) {
        res.render("gallery/gallery", {
          // <-  this refers to the view folder, to find the page we want to send
          // back to the client
          photos,
          title: "All Photos",
        });
    });
  }


function create(req, res) {

    const photo = new Photo(req.body);
  photo.save(function (err) { // mongoose talking 
    //to mongodb and saying put this object in the movies collection in the database
    // one way to handle errors
    console.log(err, " this err");
    if (err) return res.redirect("/gallery/new");
    console.log(photo);
    // for now, redirect right back to new.ejs
    res.redirect(`/gallery`);
  });
  }


function newPhoto(req, res) {
    Photo.find({}, function (err, gallery) {
      res.render('gallery/new', {
        title: 'Add Photo',
        gallery
      });
    })
  }