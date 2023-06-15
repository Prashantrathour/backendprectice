
const express = require("express");
const router = express.Router();

const { UserModel } = require("../model/user.model");
const auth = require("../middlelware/auth.middleware");
// const { UserModel } = require("./model/user.model");



  router.get("/", async (req, res) => {
    try {
      const get = await UserModel.find();
      res.status(200).json(get);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  });
  router.post("/add",auth, async (req, res) => {
    try {
      const user = new UserModel(req.body);
      await user.save();
      const data = await UserModel.find();
      console.log(data);
  
      res.status(200).json({ massage: "added successfully" });
    } catch (error) {
      res.status(404).json({ massage: error.massage });
    }
  });
  
  router.put("/replace/:id",auth, async (req, res) => {
    console.log(req.body, req.params);
    try {
      let a = await UserModel.find({ _id: req.params.id });
      if (a.length <= 0) {
        res.status(404).json({ massage: "user not found" });
        return;
      }
      const user = await UserModel.findOneAndReplace(
        { _id: req.params.id },
        req.body
      );
  
      const data = await UserModel.find({ _id: req.params.id });
      console.log(data);
  
      res.status(200).json({ massage: "replace successfully" });
    } catch (error) {
      res.status(404).json({ massage: error.massage });
    }
  });
  router.patch("/update/:id",auth, async (req, res) => {
    try {
      let a = await UserModel.find({ _id: req.params.id });
      if (a.length <= 0) {
        res.status(404).json({ massage: "user not found" });
        return;
      }
      const user = await UserModel.findByIdAndUpdate(req.params.id, req.body);
  
      const data = await UserModel.find({ _id: req.params.id });
      console.log(data);
  
      res.status(200).json({ massage: "update successfully" });
    } catch (error) {
      res.status(404).json({ massage: error.massage });
    }
  });
  router.delete("/delete/:id",auth, async (req, res) => {
    console.log(req.body, req.params);
    try {
      let a = await UserModel.find({ _id: req.params.id });
      if (a.length <= 0) {
        res.status(404).json({ massage: "user not found" });
        return;
      }
      const user = await UserModel.findByIdAndDelete(req.params.id);
  
      const data = await UserModel.find({});
      console.log(data);
  
      res.status(200).json({ massage: "delete successfully" });
    } catch (error) {
      res.status(404).json({ massage: error.massage });
    }
  });
  module.exports={router}