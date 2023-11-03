import React from "react";
import './finish.css';
import Main from "./main";

export default class Finish extends React.Component{

  constructor(props) {
    super(props)

    this.state = {
      clicked: false
    }

    this.handleRestart = this.handleRestart.bind(this);
  }

  handleRestart() {

    this.setState({
      clicked: true
    })
  }

  render() {

    const {clicked} = this.state;

    if(clicked) {
      return <Main />
    }

    if(this.props.draw) {
      return (
        <div className="shadow-finish">
        <div className="container-finish">
          <h2>EMPATE</h2>
          <button onClick={this.handleRestart}>Reiniciar</button>
        </div>
      </div>
      )
    }

    return (
      <div className="shadow-finish">
        <div className="container-finish">
          <h1>O vencedor foi: </h1>
          <h2>{this.props.winner}</h2>
          <button onClick={this.handleRestart}>Reiniciar</button>
        </div>
      </div>
    )
  }
}
