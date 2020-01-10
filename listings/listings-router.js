const Listings = require("./listings-model.js");
const validatePost = require('./validatePost-middleware')

const router = require("express").Router();


router.get("/", (req, res) => {
  axios.get('https://swapi.co/api/people/1')
    .then(ppl => res.status(200).json(ppl))
    .catch(err => res.send("something wrong"))
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
