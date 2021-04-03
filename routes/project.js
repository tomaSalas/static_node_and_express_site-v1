const express = require("express");
const data = require("../data.json");
const projects = data.projects;
const router = express.Router();

router.get("/:id", (req, res, next) => {
    //res.render("../views/project", { project: projects[req.params.id] }) });
    if (projects[req.params.id]) {
        res.render("../views/project", { project: projects[req.params.id] });
    } else {
        const err = new Error('Oops! this page does not exist');
        err.status = 404;
        next(err);
    }
});

module.exports = router;