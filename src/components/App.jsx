class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: window.exampleVideoData[0],
      videoCollection: window.exampleVideoData
    };
  }

  getVideos (query) {
    var self = this;
    $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: {
        'maxResults': '5',
        'key': window.YOUTUBE_API_KEY, 
        'part': 'snippet',
        'q': query,
        'type': ''
      },
      success: function(data) {
        console.log('success!', data);
        self.setState({videoCollection: data.items});
      },
      error: function(data) {
        console.error('Failed', data);
      }   
    });
  }  
 

  handlerSelectVideo(video) {
    console.log(video);
    this.setState({
      video: video
    });
  }

  render() {
 
    return (
     <div>
       <nav className="navbar">
         <div className="col-md-6 offset-md-3">
           <Search search={this.getVideos.bind(this)} />
         </div>
       </nav>
       <div className="row">
         <div className="col-md-7">
           <VideoPlayer video={this.state.video}/>
         </div>
         <div className="col-md-5">
           <VideoList videos={this.state.videoCollection} handler={this.handlerSelectVideo.bind(this)}/>
         </div>
       </div>
     </div>
    );
  }
}



