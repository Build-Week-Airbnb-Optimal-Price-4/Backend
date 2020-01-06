const Listings = require("./listings-model.js");

const router = require("express").Router();

router.post("/", (req, res) => {
  if (
    req.body.listing_url &&
    req.body.city &&
    req.body.room_type &&
    req.body.minimum_nights &&
    req.body.user_id
  ) {
    Listings.addListing(req.body)
      .then(yes => res.status(201).json({msg: "listing successfully posted"}))
      .catch(err => res.status(500).json({ errMsg: err }));
  } else {
    res
      .status(400)
      .json({
        errMsg:
          "listing_url, city, room_type, minimum_nights, and user_id are required fields"
      });
    }
});

router.put("/:id", (req, res) => {
  Listings.editListing(req.body)
    .then(res => {
      if (res) {
        res.status(200).json({msg: "listing successfully updated"})
      } else {
        res.status(404).json({errMsg: "listing not found"})
      }
    })
    .catch(err => res.status(500).json({ errMsg: err }))
});

router.delete("/:id", (req, res) => {
  Listings.removeListing(req.params.id)
    .then(yes => {
      if (yes) {
        res.status(200).json({msg: "listing successfully deleted"})
      } else {
        res.status(404).json({errMsg: "listing not found"})
      }
    })
    .catch(err => res.status(500).json({ errMsg: err }))
});

router.get("/:userId", (req, res) => {
  Listings.getListings(req.params.userId)
    .then(listings => {
      if (listings.length) {
        res.status(200).json(listings)
      } else {
        res.status(404).json({errMsg: "user not found"})
      }
    })
    .catch(err => res.status(500).json({ errMsg: err }))
});

module.exports = router;
