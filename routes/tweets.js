const express = require('express');
const {createTweet,getAllTweets,getTweetById} = require('../controllers/tweet.controller');
const router = express.Router();
const {validatePagination} = require('../middlewares/validation');

router.post('/', createTweet)

router.route('/').get( validatePagination, getAllTweets )

router.get('/:id', getTweetById )

module.exports = router;

