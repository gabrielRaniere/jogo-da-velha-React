/* eslint-disable no-mixed-operators */
import React from 'react';
import './main.css';
import Finish from './finish';

export default class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      blocos: ['', '', '', '', '', '', '', '', ''],
      turn: 'O',
      finish: false,
      contTurns: 0,
      draw: false
    }
  }

  componentDidMount() {
    this.setState({
      blocos: ['', '', '', '', '', '', '', '', ''],
      turn: 'O',
      finish: false,
      contTurns: 0,
      draw: false
    });
  }

  shouldComponentUpdate(nextProps, prevState) {
    if(this.state.finish) return false;

    return true;
  }

  componentDidUpdate = (prevProps, prevState) => {
    const {blocos, contTurns} = this.state;

    if(
      //horizontal
      blocos[0] === 'x' && blocos[1] === 'x' && blocos[2] === 'x' ||
      blocos[3] === 'x' && blocos[4] === 'x' && blocos[5] === 'x' ||
      blocos[6] === 'x' && blocos[7] === 'x' && blocos[8] === 'x' ||
      blocos[0] === 'O' && blocos[1] === 'O' && blocos[2] === 'O' ||
      blocos[3] === 'O' && blocos[4] === 'O' && blocos[5] === 'O' ||
      blocos[6] === 'O' && blocos[7] === 'O' && blocos[8] === 'O' ||
      //vertical
      blocos[0] === 'x' && blocos[3] === 'x' && blocos[6] === 'x' ||
      blocos[1] === 'x' && blocos[4] === 'x' && blocos[7] === 'x' ||
      blocos[2] === 'x' && blocos[5] === 'x' && blocos[8] === 'x' ||
      blocos[0] === 'O' && blocos[3] === 'O' && blocos[6] === 'O' ||
      blocos[1] === 'O' && blocos[4] === 'O' && blocos[7] === 'O' ||
      blocos[2] === 'O' && blocos[5] === 'O' && blocos[8] === 'O' ||
      //diagonal
      blocos[0] === 'x' && blocos[4] === 'x' && blocos[8] === 'x' ||
      blocos[2] === 'x' && blocos[4] === 'x' && blocos[6] === 'x' ||
      blocos[0] === 'O' && blocos[4] === 'O' && blocos[8] === 'O' ||
      blocos[2] === 'O' && blocos[4] === 'O' && blocos[6] === 'O'
    ){
      this.setState({
        finish: true,
        turn: prevState.turn
      })
      console.log('o vencedor é : '+ this.state.turn);
    }
    console.log(contTurns)
    if(contTurns === 9 ) {
      this.setState({
        finish: true,
        draw: true
      })
    }
  }

  handleClick(index) {
    const {turn, blocos, contTurns} = this.state;
    const jogadas = contTurns + 1;
    const copyBlocos = [...blocos];

    if(copyBlocos[index] === '') {
      if(turn === 'O') {
        copyBlocos[index] = 'O';

        this.setState({
          turn: 'x',
          blocos: [...copyBlocos],
          contTurns: jogadas
        })
        return;
      }

      copyBlocos[index] = 'x';

      this.setState({
        turn: 'O',
        blocos:[...copyBlocos],
        contTurns: jogadas
      })
      return;
    }
    return;
  }

  render() {

    const {blocos, finish, turn, draw} = this.state;

    if(finish){
      return <Finish
      winner={turn}
      draw={draw}
      />
    }

    return (
      <div className='container'>
        {blocos.map((bloco, index) => {
          return(
            <div className='bloco' onClick={() => {this.handleClick(index)}} key={index}>
              <span>{bloco}</span>
            </div>
          )
        })}
      </div>
    )
  }
}
