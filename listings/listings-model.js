const db = require("../database/dbconfig.js");

function addListing(listing) {
  
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
