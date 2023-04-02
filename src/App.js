import React from "react";

import "./App.css";

import Display from "./components/display";
import NumberPad from "./components/numberPad";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      query: "",
    };
  }

  buildQuery = (event) => {
    this.setState((prevState) => {
      return {
        query: prevState.query + event.target.textContent,
      };
    });
  };

  backSpace = () => {
    this.setState((prevState) => {
      let strLength = prevState.query.length;
      let newQuery = prevState.query.substring(0, strLength - 1);
      return {
        query: newQuery,
      };
    });
  };

  plusMinus = () => {
    if (!isNaN(this.state.query)) {
      if (this.state.query.charAt(0) === "-") {
        this.setState((prevState) => {
          return {
            query: prevState.query.substring(1)
          };
        });
      } else {
        this.setState((prevState) => {
          return {
            query: "-" + prevState.query
          };
        });
      }
    }
    else{
      if(this.state.query.charAt(0) === "-"){
        this.setState((prevState) => {
          return {
            query: prevState.query.substring(1)
          };
        });
        return;
      }
      alert("Not a number");
    }
  };

  clearScreen = () => {
    this.setState({
      query: "",
    });
  };

  equalPress = () => {
    let evalStr = this.state.query;

    try {
      let result = eval(evalStr);

      this.setState({
        query: result+""
      });
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return (
      <div className="App">
        <Display query={this.state.query} />
        <NumberPad
          buildQuery={this.buildQuery}
          backSpace={this.backSpace}
          plusMinus={this.plusMinus}
          clearScreen={this.clearScreen}
          equalPress={this.equalPress}
        />
      </div>
    );
  }
}

export default App;
