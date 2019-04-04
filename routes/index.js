const express = require('express'),
    router = express.Router({
        mergeParams: true
    });

// Home Page
router.get("/", (req, res, next) => {
    res.render('index');
});