
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CommentBox from './script/CommentBox';
// import {CommentList, CommentBox, CommentForm} from './script/CommentList';
// import CommentList from './script/CommentList';
// import CommentForm from './script/CommentForm';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id: 1, author: "Pete Hunt", text: "This is one comment===================继续缩小试试看看======================缩小后可以换行哦 "},
                {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
            ],
        }
    }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          {/*<CommentBox url="/api/comments"  pollInterval={2000}/>*/}
          <CommentBox data={this.state.data}/>
      </div>
    );
  }
}

export default App;
