const db = require("../database/dbconfig.js");
const axios = require('axios')

const api = process.env.API_URL || "http://089a9671.ngrok.io/"

function addListing(listing) {
  return db("listing")
    .insert(listing)
    .then(id => {
      return db("listing").where({id: id[0]}).first()
        .then(listing => {
          fetch('https://airbnb-api4.herokuapp.com/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
          .then(price => {
            return editListing({price: price.data.results}, id[0])
          })
          .catch(err => res.json({err: err}))
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
