'use strict'
const api = require('./game-api')
const ui = require('./game-ui')
const store = require('../store')

const getFormFields = require('../../../lib/get-form-fields')

const boxSelected = function (event) {
  event.preventDefault()
  if ($(event.target).text() === '') {
    store.selectedCell = event.target
    const cellIndex = event.target.id
    const cellValue = store.player
    api.onPlayerMove(cellIndex, cellValue)
      .then(ui.playerMoveSuccess)
      .catch(ui.playerMoveFailure)
  }
}

const newGame = function () {
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailed)
}
module.exports = {
  boxSelected,
  newGame

}
