var searchYouTube = (options, callback) => {
  console.log('found me!');
  
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      'maxResults': options.max,
      'key': window.YOUTUBE_API_KEY, 
      'part': 'snippet',
      'q': options.query,
      'type': ''
    },
    success: function(data) {
      console.log('success!', data);
      window.App.setState({videoCollection: data.items});
      callback();
    },
    error: function(data) {
      console.error('Failed', data);
    }   
  });
};


window.searchYouTube = searchYouTube;
