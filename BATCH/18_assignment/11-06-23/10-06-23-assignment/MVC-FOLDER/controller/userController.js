const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  registerNewuser: async (req, res) => {
    let hashPassword = await bcrypt.hash(req.body.password, 10);
    try {
      const post = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: hashPassword,
      });
      await post.save();

      res.status(201).json(post);
    } catch (err) {
      res.status(400).json({
        err: err,
      });
    }
  },

  loginNewUser: async (req, res) => {
    try {
      const result = await User.findOne({ email: req.body.email });
      if (!result) {
        return res.status(400).json({ message: "email is not found" });
      }
      let comparePassword = await bcrypt.compare(
        req.body.password,
        result.password
      );

      if (!comparePassword) {
        return res.status(400).json({ message: "password is not found" });
      }

      const token = jwt.sign(
        { email: result.email, roles: result.roles },
        "credo_secret",
        { expiresIn: "1h" }
      );

      return res.status(200).json({
        message: "successfully login",
        token: token,
      });
    } catch (err) {
      res.status(400).json({
        err: err,
      });
    }
  },
};
