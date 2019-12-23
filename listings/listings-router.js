const router = require("express").Router();

router.post("/:userId", (req, res) => {
  res.status("200").send("add listing");
});

router.put("/:userId/:id", (req, res) => {
  res.status("200").send("edit listing");
});

router.delete("/:userId/:id", (req, res) => {
  res.status("200").send("delete listing");
});

router.get("/:userId", (req, res) => {
  res.status("200").send("get listings");
});

module.exports = router;
