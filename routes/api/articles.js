//Dependencies
const express = require('express');
const articleController = require("../../controller/articleController");

//Get an instance of router
const articleRouter = express.Router();

articleRouter.get("/", function(req, res) {
	res.send(articleController.findAll);
});

articleRouter.post("/", function(req, res) {
	res.send(articleController.create);
})

articleRouter.delete("/", function(req, res) {
	res.send(articleController.remove);
})

module.exports = articleRouter;