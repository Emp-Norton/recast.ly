class App extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     video: window.exampleVideoData[0]
   };
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
           <Search />
         </div>
       </nav>
       <div className="row">
         <div className="col-md-7">
           <VideoPlayer video={this.state.video}/>
         </div>
         <div className="col-md-5">
           <VideoList videos={window.exampleVideoData} handler={this.handlerSelectVideo.bind(this)}/>
         </div>
       </div>
     </div>
   );
 }
}