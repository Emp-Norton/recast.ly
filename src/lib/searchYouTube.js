var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      'maxResults': options.max || 5,
      'key': options.key, 
      'part': 'snippet',
      'q': options.query,
      'type': ''
    },
    success: function(data) {
      console.log('success!', data);
      if (callback) {
        callback(data.items);     
      }
    },
    error: function(data) {
      console.error('Failed', data);
    }
  });
};

window.searchYouTube = searchYouTube;
