import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class FizzBuzz extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count: 1,
      fizzBuzz: ''
    }
  }
  render(){
    const numberStyle = {
      fontSize: '64px',
    };
    return(
      <div className='col-md-6 text-center'>
        <h2 style={numberStyle}>
        {this.state.fizzBuzz || this.state.count}</h2>
        <div className='buttonGroup'>
          <button
            onClick={this._decrement.bind(this)}
            className='btn btn-lg btn-reset'><i className='fa fa-minus'></i></button>
          <button
            onClick={this._increment.bind(this)}
            className='btn btn-lg btn-success'><i className='fa fa-plus'></i></button>
        </div>
      </div>
    )
  }
    _fizzBuzz(num){
    if(num % 15 ===0){
      this.setState({fizzBuzz: 'FizzBuzz'})
    }else if(num % 5 === 0){
      this.setState({fizzBuzz: 'Buzz'})
    }else if(num % 3 === 0){
      this.setState({fizzBuzz: 'Fizz'})
    }else{
      this.setState({fizzBuzz: ''})
    }
  }
  _decrement(){
    if(this.state.count > 1){
      this.setState({count: --this.state.count});
      this._fizzBuzz(this.state.count);
    }
  }
  _increment(){
    if(this.state.count < 100){
      this.setState({count: ++this.state.count});
      this._fizzBuzz(this.state.count);
    }
  }
}



export default FizzBuzz;
