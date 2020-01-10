module.exports = (req, res, next) => {
  const body = req.body;
  const userId = req.session.name
  const errors = []
  const rooms = ["Private room", "Entire home/apt", "Shared room"]
  const beds = ["Real Bed", "Pull-out Sofa", "Futon", "Couch", "Airbed",]
  const bookable = ["f", "t",]
  const cancellations = ["flexible", "moderate", "strict_14_with_grace_period", "super_strict_30", "super_strict_60"]
  if (
    body.accommodates &&
    body.bathrooms &&
    body.bedrooms &&
    body.size &&
    body.room_type &&
    body.user_id
  ) {
    if (userId != body.user_id) {
      res.status(401).json({msg: "user not authorized (probably the given userId does not match the userId stored in the session)"})
    }
    if (!Number.isInteger(body.accommodates) || body.accommodates < 1) {
      errors.push('accommodates field must be a positive integer')
    }
    if (!Number.isInteger(body.bathrooms) || body.bathrooms < 1) {
      errors.push('bathrooms field must be a positive integer')
    }
    if (!Number.isInteger(body.bedrooms) || body.bedrooms < 1) {
      errors.push('bedrooms field must be a positive integer')
    }
    if (!Number.isInteger(body.size) || body.size < 1) {
      errors.push('size field must be a positive integer')
    }
    if (body.minimum_nights && (!Number.isInteger(body.minimum_nights) || body.minimum_nights < 1)) {
      errors.push('minimum_nights field must be a positive integer')
    }
    if (!rooms.includes(body.room_type)) {
      errors.push(`room_type field must be one of ${rooms.join(", ")}`)
    }
    if (body.beds && !beds.includes(body.bed_type)) {
      errors.push(`bed_type field must be one of ${beds}`)
    }
    if (body.instant_bookable && !bookable.includes(body.instant_bookable)) {
      errors.push(`instant_bookable field must be one of ${bookable}`)
    }
    if (body.cancellation_policy && !cancellations.includes(body.cancellation_policy)) {
      errors.push(`bed_type field must be one of ${cancellations}`)
    }
    if(body.title && typeof body.title != "string") {
      errors.push('title field must be a string')
    }
    if(body.address && typeof body.address != "string") {
      errors.push('address field must be a string')
    }
    if(body.image && typeof body.image != "string") {
      errors.push('image field must be a string')
    }
    if(body.bag_of_words && typeof body.bag_of_words != "string") {
      errors.push('bag_of_words field must be a string')
    }
    if (errors.length) {
      res.status(404).json(errors)
    } else {
      next()
    } 
  } else {
    res
    .status(400)
    .json({
      errMsg:
        "accommodates, bathrooms, bedrooms, size, room_type, and user_id are required fields"
    });
  }
};
