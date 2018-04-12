const request = require('request');

request.get('https://api.twitter.com/1.1/trends/place.json?id=23424848', {
  oauth:{
    consumer_key:'',
    consumer_secret:'',
    token:'',
    token_secret:''
  }
}, function (err, res, body) {
  if(err){
    console.log(err);
  } else {
    let trends = JSON.parse(body);
    trends[0].trends.forEach(trend => {
      console.log(trend.name);
    });
  }
});