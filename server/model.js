const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
  name: String,
})

const favoriteModel = mongoose.model('Favorite', favoriteSchema);

const insertFavorite = (favorite) => {
  favoriteModel.findOne({name: favorite.name}, (err, fav) => {
    if(!fav){
      let newFavorite = new favoriteModel(favorite);
      newFavorite.save((err) => {
        if(err){
          console.error(err)
        } else {
          console.log('Favorite added');
        }
      })
    } else {
      removeFavorite(favorite);
    }
  })
}

const removeFavorite = (favorite) => {
  favoriteModel.findOne({name: favorite.name},(err) => {if(err) console.error(err)})
  .remove((err) => {
    if(err){
      console.error(err)
    } else {
      console.log('Favorite removed');
    }
  })
}

const getFavorites = (cb) => {
  favoriteModel.find((err, results) => {
    if(err){
      console.error(err)
    } else {
      cb(results);
    }
  })
}

const favoriteManager = {
  insertFavorite: insertFavorite,
  getFavorites: getFavorites
}

module.exports = favoriteManager;
