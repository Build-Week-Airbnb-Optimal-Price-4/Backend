const db = require("../database/dbconfig.js");
const axios = require('axios')

function addListing(listing) {
  return db("listing")
    .insert(listing)
    .then(id => {
      return db("listing").where({id: id[0]}).first()
        .then(listing => {
          axios.post("https://7137f976.ngrok.io/", listing)
          .then(price => {
            return editListing({price: price.data.results}, id[0])
          })
        })
    })
}

function editListing(listing, id) {
  return db("listing")
    .where({ id: id })
    .update(listing);
}

function removeListing(id) {
  return db("listing")
    .where({ id: id })
    .del();
}

function getListings(id) {
  return db("listing").where({user_id: id})
}

module.exports = {
  addListing,
  editListing,
  removeListing,
  getListings
};
