class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      video: window.exampleVideoData[0],
      videoCollection: window.exampleVideoData
    };

    this.getYouTubeVideos = this.getYouTubeVideos.bind(this);
    this.handlerSelectVideo = this.handlerSelectVideo.bind(this);
    
  }
 
  componentDidMount() {
    this.getYouTubeVideos('Cute cat video');
  }

  getYouTubeVideos(query) {
    var options = {
      key: window.YOUTUBE_API_KEY,
      query: query
    };

    this.props.searchYouTube(options, (videos) => {
      this.setState({
        videoCollection: videos,
        video: videos[0]
      });
    });
  }


  handlerSelectVideo(video) {
  //  console.log(video);
    this.setState({
      video: video
    });
  }

  render() {
 
    return (
     <div>
       <nav className="navbar">
         <div className="col-md-6 offset-md-3">
          <Search 
            search={this.getYouTubeVideos} 
          /> 
         </div>
       </nav>
       <div className="row">
         <div className="col-md-7">
           <VideoPlayer 
            video={this.state.video}
          />
         </div>
         <div className="col-md-5">
           <VideoList 
            videos={this.state.videoCollection} 
            handler={this.handlerSelectVideo}
          />
         </div>
       </div>
     </div>
    );
  }
}

window.App = App;



