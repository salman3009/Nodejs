module.exports = (req, res, next) => {
  if (req.body.email) {
    next();
  }

  res.status(400).json({
    message: "email is not found",
  });
};
