// TODO: Render the `App` component to the DOM
ReactDOM.render(<App />, document.getElementById('app'));

ReactDOM.render(<Search />, document.getElementById('search'));

ReactDOM.render(<VideoPlayer />, document.getElementById('video-player'));

ReactDOM.render(<VideoList videos={window.exampleVideoData} />, document.getElementById('video-list'));

