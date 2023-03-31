import React from "react";

// 1)
// class Info extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       information: "this is ancient text",
//     };
//   }
//   componentWillMount() {
//     this.setState({ information: "this is modified text" });
//   }
//   render() {
//     return <div>{this.state.information}</div>;
//   }
// }
// export default Info


// 2)
class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "turquoise",
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: "pink" });
    }, 2500);
  }
  render() {
    return (
      <div className="mainContainer">
        <div className="textContainer">
          <p
            style={{
              color: this.state.color,
            }}
            className="mainText">
            giraffe
          </p>
        </div>
      </div>
    );
  }
}

export default Color;
