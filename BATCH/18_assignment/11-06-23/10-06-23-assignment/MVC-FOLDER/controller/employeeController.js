const Employee = require("../models/employee");

module.exports = {
  createNewEmployee: async (req, res) => {
    try {
      const result = new Employee({
        firstName: req.body.firstName,
        age: req.body.age,
        salary: req.body.salary,
      }); 

      //it will return promise
      await result.save();

      res.status(201).json(result);
    } catch (err) {
      res.status(400).json({
        err: err,
      });
    }
  },

  getEmployeeList: async (req, res) => {
    try {
      const result = await Employee.find();

      res.status(200).json(result);
    } catch (err) {
      res.status(400).json({
        err: err,
      });
    }
  },

  deleteEmployee: async (req, res) => {
    try {
      await Employee.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "Data is deleted successfully" });
    } catch (err) {
      res.status(400).json({
        err: err,
      });
    }
  },

  updateName: async (req, res) => {
    try {
      let filter = { firstName: req.params.userName };
      let query = req.body;
      let result = await Employee.findOneAndUpdate(filter, query, {
        new: true,
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(400).json({
        err: err,
      });
    }
  },
};
