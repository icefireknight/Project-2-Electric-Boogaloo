const Photo = require('../models/photos')

module.exports = {
    create
}

function create(req, res){
    Photo.findById(req.params.id, function(err, photoFromDatabase) {
        photoFromDatabase.comments.push(req.body);

        photoFromDatabase.save(function(err){
            console.log(photoFromDatabase)
            res.redirect(`/gallery/${photoFromDatabase._id}`)
        })
    })
}