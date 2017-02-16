var TwitterPackage = require('twitter');
var fs = require('fs');


var secret = {
  consumer_key: 'HkhJrKta9atmfOEnSap0HjYnG',
  consumer_secret: 'ib1A4fO5WTtSzDVXqR0rDYGObPaplfVzUkACbZh2XTF2JK793N',
  access_token_key: '226180324-cv9gq3qtF91rUAAqt9e7Jb3ZCpqM6Wf7jdVEAFYt',
  access_token_secret: 'uQMa5eKXSuKsxfNd0M4oIYuuEvjevh6TjQRmNtbQ4PUml'
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

var stream = Twitter.stream('statuses/filter', {track: 'summerintern, nodejs'});
stream.on('data', function(event) {
  console.log('tweet: ');

  //writableStream.write(event.text + '\n');

  fs.appendFile('tweetdump.txt', event.text + '\n', function (err) {
  if (err) {
    // append failed
  } else {
    // done
  }
});
  console.log(event && event.text);
});
 
stream.on('error', function(error) {
  throw error;
});
 