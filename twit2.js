
var Tweet  = function(userName, text) { // 'userName' and 'text' are parameters
  this.userName = userName; // this is a property
  this.text = text; // this is a property
};

Tweet.prototype.render = function() { // this is a method
  var li = document.createElement('li');
  li.innerHTML = "<img  height=80 width=120 src=\"" + this.userName + ".jpg\"> <b>" + this.userName + "</b>: <em>" + this.text + "</em></p>";
  return li;
};

var tweets = document.getElementById('tweets');
var tweetForm = document.getElementById('tweet-form');
var tweetButton = document.getElementById('tweet-form');
var clearTweets = document.getElementById('clear-tweets');
var tweetData = [];

var renderAllTweets = function() {
  tweets.innerHTML = '';
  tweetData.forEach(function(tweet) {
    tweets.appendChild(tweet.render());
  });
};

var handleTweetSubmit = function(event) {
  event.preventDefault();

   if (!event.target.blabbering.value) {
    return alert('Tweets cannot be empty!');
   }

   var newTweet = new Tweet(event.target.tweeter.value, event.target.blabbering.value);
   event.target.tweeter.value = null;
   event.target.blabbering.value = null;
   tweetData.push(newTweet);
   renderAllTweets();
};

tweetButton.addEventListener('submit', handleTweetSubmit);

clearTweets.addEventListener('click', function() {
  tweets.innerHTML = '';
  tweetData = [];
});
