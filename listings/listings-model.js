const db = require("../database/dbconfig.js");
const axios = require("axios");

const api = process.env.API_URL || "http://089a9671.ngrok.io/";

async function addListing(listing) {
  const pred = await axios.post('https://airbnb-test-ds8.herokuapp.com/', listing)
  return db('listing').insert({...listing, price: pred.data})
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
  return db("listing").where({ user_id: id });
}

module.exports = {
  addListing,
  editListing,
  removeListing,
  getListings
};
