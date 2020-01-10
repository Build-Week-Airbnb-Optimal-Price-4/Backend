const Listings = require("./listings-model.js");
const validatePost = require('./validatePost-middleware')

const router = require("express").Router();


router.post("/", validatePost, (req, res) => {
    Listings.addListing(req.body)
      .then(yes => res.status(201).json({msg:"listing successfully posted"}))
      .catch(err => res.status(500).json({ errMsg: "error posting listing", err:err}));
});

router.post("/test", (req, res) => {
  axios.post("http://089a9671.ngrok.io/", {
    "title": "budfvfddvg",
      "accommodates": 2,
      "bathrooms": 1,
      "bedrooms":2,
      "size": 150,
      "room_type": "Entire home/apt",
      "bed_type": "Real Bed",
      "minimum_nights": 4,
      "instant_bookable": "f",
      "cancellation_policy": "strict_14_with_grace_period",
      "bag_of_words": "great place",
      "user_id": 1
  }).then(yes => console.log(yes))
  .catch(err => console.log(err))
});

router.put("/:id", (req, res) => {
  const userId = req.session.name
  Listings.editListing(req.body, req.params.id)
    .then(resp => {
      console.log(resp)
      if (resp) {
        res.status(200).json({msg: "listing successfully updated"})
      } else {
        res.status(404).json({errMsg: "listing not found"})
      }
    })
    .catch(err => res.status(500).json({ errMsg: "error editing listing", err: err}))
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
    .catch(err => res.status(500).json({ errMsg: "error deleting listing" }))
});

router.get("/:userId", (req, res) => {
  const userId = req.session.name
  if (userId != req.params.userId) {
    res.status(401).json({msg: "user not authorized (probably the given userId does not match the userId stored in the session)"})
  }
  Listings.getListings(req.params.userId)
    .then(listings => {
      if (listings.length) {
        res.status(200).json(listings)
      } else {
        res.status(200).json(listings)
      }
    })
    .catch(err => {
      res.status(500).json({ errMsg: err })
    })
});

module.exports = router;
