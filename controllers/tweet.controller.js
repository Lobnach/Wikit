const tweetService = require('../services/tweet.service');

const createTweet = async (req, res) => {
    const tweet = await tweetService.createTweet(req.body);
    res.status(200).send(tweet);

}

const getAllTweets = async (req, res) =>  {
    const name = req.query.authorName;
    const offset = req.query.skip;
    const limit = req.query.limit;
    const tweets = await tweetService.getAllTweets(name, offset, limit);
    console.log(req.query);
    res.status(200).json(tweets);

}

const getTweetById = async (req, res) => {
    const id = req.params.id;
    const tweet = await tweetService.getTweetById(id);
    res.status(200).json(tweet);
}

module.exports = {
    createTweet,
    getAllTweets,
    getTweetById
}