import axios from "./axios";
import React from "react";
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      photourl: 'https://kfc-img-bucket.s3-ap-southeast-1.amazonaws.com/family/first.JPG'
    }
  }

  GET = async () => {
    try {
      const Data = await axios.get("/img");
      console.log(Data.data);
    }
    catch (error) {
      alert("GET Error!!");
    }
  };



  FIRST = async () => {
    fetch(`https://xgd0u8m7w3.execute-api.us-east-1.amazonaws.com/pro/img?son=0`)
      .then(response => response.json())
      .then(data => this.setState({ photourl: data.photo }))
      .catch(console.log)
  };

  SECOND = async () => {
    fetch(`https://xgd0u8m7w3.execute-api.us-east-1.amazonaws.com/pro/img?son=1`)
      .then(response => response.json())
      .then(data => this.setState({ photourl: data.photo }))
      .catch(console.log)
  };
  THIRD = async () => {
    fetch(`https://xgd0u8m7w3.execute-api.us-east-1.amazonaws.com/pro/img?son=2`)
      .then(response => response.json())
      .then(data => this.setState({ photourl: data.photo }))
      .catch(console.log)
  };
  render() {
    return (
      <div className="button">
        <div>My lovely Sons</div>
        <div>
          <button onClick={this.FIRST}>First</button>
          <button onClick={this.SECOND}>Second</button>
          <button onClick={this.THIRD}>Third</button>
        </div>
        <div className="App">
          <img src={this.state.photourl} alt="Background" style={{ height: '600px' }} />;
        </div>
        <div>
          {this.state.photourl}
        </div>
      </div>
    );
  }
}

export default App;
