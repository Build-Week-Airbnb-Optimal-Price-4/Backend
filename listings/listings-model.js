const db = require("../database/dbconfig.js");
const axios = require("axios");

const api = process.env.API_URL || "https://airbnb-test-ds8.herokuapp.com/";

async function addListing(listing) {
  const pred = await axios.post(`${api}`, listing)
  return db('listing').insert({...listing, price: pred.data})
}

async function editListing(listing, id) {
  const pred = await axios.post(`${api}`, listing)
  return db("listing")
    .where({ id: id })
    .update({price: pred.data});
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
