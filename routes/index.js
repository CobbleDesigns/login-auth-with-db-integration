const express = require("express");
const router = express.Router();
const {ensureAuthenticated} = require('../config/auth')
//welcome page
router.get('/', (req, res) => res.render('Welcome'));
//dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) => 
res.render('Dashboard', {
    name: req.user.name
})
);


module.exports = router;