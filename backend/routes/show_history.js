const router = require('express').Router();
let History = require(`../models/history`);

router.route('/').get((req,res) => {
    History.find()
    .then(histories => res.json(histories))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
