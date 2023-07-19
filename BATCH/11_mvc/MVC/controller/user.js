const UserModel = require('../models/user');


module.exports = {

    getUserDetails: async (req, res) => {
        try {
            let user = await UserModel.find();
            res.status(200).json({
                message: "successfully fetched",
                data: user
            })
        } catch (err) {
            res.status(500).json({
                message: "internal server error",
                data: err
            })
        }
    },

    postUserDetails: async (req, res) => {
        try {

            let user = new UserModel({
                userName: req.body.userName,
                email: req.body.email,
                password: req.body.password
            })
            let result = await user.save();

            res.status(201).json({
                message: "successfully created",
                data: result
            })
        } catch (err) {
            res.status(500).json({
                message: "internal server error",
                data: err
            })
        }
    }



}