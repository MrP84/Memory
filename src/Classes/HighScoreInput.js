import PropTypes from 'prop-types'
import React, { Component } from 'react'

import '../css/HighScoreInput.css'

import { saveHOFEntry } from '../App/HallOfFame'

class HighScoreInput extends Component {
  render() {
    return (
      <form className="highScoreInput">
        <p>
          <label>
            Bravo ! Entre ton prénom :
            <input type="text" autoComplete="given-name" />
          </label>
          <button type="submit">J’ai gagné !</button>
        </p>
      </form>
    )
  }
}

HighScoreInput.propTypes = {
  guesses: PropTypes.number.isRequired,
}

export default
