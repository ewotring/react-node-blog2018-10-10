const router = require('express').Router();

router.use('/articles', require('./api'));

module.exports = router;