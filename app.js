var TwitterPackage = require('twitter');
var fs = require('fs');

var secret = {
  consumer_key: '##',
  consumer_secret: '##',
  access_token_key: '##-##',
  access_token_secret: '##'
}
var Twitter = new TwitterPackage(secret);

var writableStream = fs.createWriteStream('tweetdump.txt');
var data = '';

/*

Twitter.post('statuses/update', {status: 'and it cannot be the same again!'},  function(error, tweet, response){
  if(error){
    console.log(error);
  }
  console.log(tweet);  // Tweet body.
  console.log(response);  // Raw response object.
});

*/
/* this api is freely accessible to everyone
   alternatively you can use Firehose api which is a paid version
   and returns around top 10 million of the results
*/
var stream = Twitter.stream('statuses/filter', {track: 'summerintern, nodejs'});
stream.on('data', function(event) {
  console.log('tweet: ');
  //writableStream.write(event.text + '\n');
  fs.appendFile('tweetdump.txt', event.text + '\n', function (err) {
  if (err) {
    // append failed
  }
});
  console.log(event && event.text);
});
 
stream.on('error', function(error) {
  throw error;
});
 
