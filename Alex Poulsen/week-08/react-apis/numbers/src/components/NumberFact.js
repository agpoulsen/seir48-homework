import React, { Component } from 'react';
import axios from 'axios';

import Fact from './Fact';

class NumberFact extends Component {
  constructor() {
    super();
    this.state = {
      fact: ''
    };
    this._getNumberFact = this._getNumberFact.bind(this);
  }

  _getNumberFact () {
    const url = 'http://numbersapi.com/random/trivia'

    axios(url).then(result => {
      this.setState({fact: result.data });
    })
  }

  render() {
    return (
      <div>
        <button onClick={ this._getNumberFact }>
          Get Number Fact
        </button>
        <Fact fact={ this.state.fact }/>
      </div>

    );
  }
}

export default NumberFact;
