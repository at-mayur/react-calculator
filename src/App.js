import React from "react";

import "./App.css";

// importing components
import Display from "./components/display";
import NumberPad from "./components/numberPad";

// Using class component to build App component
class App extends React.Component {

  // initiating state in constructor
  constructor() {
    super();
    this.state = {
      query: "",
    };
  }

  // Action for all btns except equal, backspace, plus-minus & Clear
  buildQuery = (event) => {
    this.setState((prevState) => {
      return {
        // appending that character to evaluate expression
        query: prevState.query + event.target.textContent,
      };
    });
  };

  // Action for backspace btn
  backSpace = () => {
    this.setState((prevState) => {
      // Getting expression length
      let strLength = prevState.query.length;

      // drop last character
      let newQuery = prevState.query.substring(0, strLength - 1);
      return {
        // set state
        query: newQuery,
      };
    });
  };

  // Action for plus-minus btn
  plusMinus = () => {
    // if current expression is number i.e. number without any other character
    if (!isNaN(this.state.query)) {

      // if start character is -
      if (this.state.query.charAt(0) === "-") {
        this.setState((prevState) => {
          return {
            // drop that - character
            query: prevState.query.substring(1)
          };
        });
      } 
      // if character is not - i.e. positive number
      else {
        this.setState((prevState) => {
          return {
            // add - character to start to make that number negative
            query: "-" + prevState.query
          };
        });
      }
    }
    // if current expression on screen is not number
    else{
      // if start character is -
      if(this.state.query.charAt(0) === "-" && this.state.query.substring(1).length===0){
        this.setState((prevState) => {
          return {
            // drop that - character to make that number positive
            query: prevState.query.substring(1)
          };
        });
        return;
      }

      // if above condition does not execute alert user about not a number
      alert("Not a number");
    }
  };

  // clear screen action
  clearScreen = () => {
    // set state with empty string
    this.setState({
      query: "",
    });
  };

  // Action on pressing equal btn
  equalPress = () => {
    let evalStr = this.state.query;

    try {
      // evaluate expression
      let result = eval(evalStr);

      this.setState({
        // update state with result
        query: result+""
      });
    } catch (error) {
      // if any error occured while executing alert user about the same
      alert(error);
    }
  };

  // render method
  render() {
    return (
      <div className="App">
        {/* Screen component. passing expression as props */}
        <Display query={this.state.query} />

        {/* Number Pad Component. Passing btn actions as props */}
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
