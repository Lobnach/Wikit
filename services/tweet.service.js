
const Tweet = require('../models/tweet');

const createTweet = async (tweet) => {
    return await Tweet.create(tweet)
}

const getAllTweets = async (name, offset = 0 , limit = 10) => {
   const options = {};
   if (name) {
       options.authorName = name;
   }
   return await Tweet.find(options).skip(offset).limit(limit);


}
const getTweetById = async (id) => {
    
    return await Tweet.findOne({
        _id: id
    });
 
 
 }

 module.exports = {
     createTweet,
     getAllTweets,
     getTweetById
 }