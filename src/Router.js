import express from "express";

const Router = express.Router();

Router.get("/", async (req, res) => {
  return res.status(200).send({ message: "Hello World" });
});

export default Router;
