const Photo = require('../models/photos');

module.exports = {
    new: newPhoto,
    create,
    index,
    // deleteOne,
    delete: deletePhoto,
    update: updatePhoto,
    viewPhoto
};

function index(req, res) {
    console.log(req.user, '< - req.user')
    Photo.find({}, function (err, photos) {
        res.render("gallery/gallery", {
          photos,
          title: "All Photos",
        });
    });
  }


function create(req, res) {

    const photo = new Photo(req.body);
    photo.save(function (err) { 
    console.log(err, " this err");
    if (err) return res.redirect("/gallery/new");
    console.log(photo);
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

  // function deleteOne(id) {
  //   // Find the index based on the id of the todo object
  //   const idx = Photo.findIndex(Photo => Photo.id === parseInt(id));
  //   Photo.splice(idx, 1);
  // }

  function deletePhoto(req, res) {
    console.log(req.params.id);
    // Photo.deleteMany(req.params.id);
    // res.redirect('/gallery');
    Photo.findByIdAndDelete(req.params.id, function(err) {
      res.redirect('/gallery')
    })
    // Photo.findOne({'photos._id': req.params.id}, function(err, photo) {
    //   const photoSubdoc = book.comments.id(req.params.id);
    //   // Remove the comment using the remove method of the subdoc
    //   photoSubdoc.remove();
    //   // Save the updated book
      // Photo.save(function(err) {
      //   // Redirect back to the book's show view
      //   res.redirect(`/gallery`);
      // });
    }
  

  function updatePhoto(req, res) {

    const photoId = req.params.id;
    Photo.findByIdAndUpdate({_id: photoId},{description: req.body.text}, function(err, result){
      if(err){
        res.send(err);
      }
      else{
        res.redirect('/gallery');
      }
    });
  }


  function viewPhoto(req, res) {
    Photo.findById(req.params.id, function (err, photo) {
      res.render('gallery/show' , {
        title: 'Photo Details', photo: photo
      });

    })
    
  }
