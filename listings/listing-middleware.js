module.exports = (req, res, next) => {
  const body = req.body;

  if (
    body.accommodates &&
    body.bathrooms &&
    body.bedrooms &&
    body.size &&
    body.room_type &&
    body.user_id
  ) {

  } else {
    res
      .status(400)
      .json({
        errMsg:
          "accommodates, bathrooms, bedrooms, size, room_type, and user_id are required fields"
      });
  }
};
