var searchYouTube = (options, callback) => {
 // console.log('found me!');
  var self = this;
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      'maxResults': options.max,
      'key': options.key, 
 //     'key': window.YOUTUBE_API_KEY, 
      'part': 'snippet',
      'q': options.query,
      'type': ''
    },
    success: function(data) {
 //     console.log(`This: ${JSON.stringify(this)} \nSelf: ${self}`)
      console.log('success!', data);
 //     console.log(data);
 //     this.setState({videoCollection: data.items});
      callback({videoCollection: data.items, video: data.items[0]});
 //     callback({video: data.items[0]});
    },
    error: function(data) {
      console.error('Failed', data);
    }   
  });
};

window.searchYouTube = searchYouTube;
