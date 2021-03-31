const express = require("express");
const data = require("../data.json");
const projects = data.projects;
const router = express.Router();

router.get("/:id", (req, res) => {
    res.render("../views/project", { project: projects[req.params.id] }) });


module.exports = router;