var TwitterPackage = require('twitter');

// replace the words in caps with the keys that
// we saw before on apps.twitter.com
var secret = {
  consumer_key: 'ATlZxokRGpGD6CZ2i6mh3Uvm8',
  consumer_secret: 'lSOC99YK5JSE7YQ6Ya90EBDNpEpIq64Q9ur2Bq5mC223dCIRle',
  access_token_key: '29575406-xayvvub6J5ycnrYcDRCESmaNTzKL4ppfZKsm85jZE',
  access_token_secret: 'Fo6Ug4v9pLdNvbvHV9FHjEMuGr871DBguShR828glwcr9'
}

var Twitter = new TwitterPackage(secret);

var query = "pancakes";
Twitter.get('search/tweets', {q: query, count: 2, lang:"en"}, function(error, tweets, response) {
  if (error){
    console.error(error)
  }

   var tweet_list = tweets['statuses'];
   console.log(tweet_list.length)
   for (var i = 0; i < tweet_list.length; i++) {
        if ('retweeted_status' in tweet_list[i]) {
            continue;
        }
        var screen_name = tweet_list[i].user.screen_name;
        var message = "@" + screen_name + " I love pancakes!!";
        var tweet_id = tweet_list[i].id_str

        try {
            Twitter.post('statuses/update', {"status": message, "in_reply_to_status_id":tweet_id}, function(error, tweet, response){
                 console.log("Tweet posted successfully!")
            });
        }
        catch(err) {
            console.log(err);
        }
   }
});
