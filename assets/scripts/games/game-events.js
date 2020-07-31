'use strict'
const api = require('./game-api')
const ui = require('./game-ui')
const store = require('../store')

const getFormFields = require('../../../lib/get-form-fields')

const boxSelected = function (event) {
  event.preventDefault()
  store.game.cells = event.target
  const cellIndex = $(store.game.cells).data('index')
  const cellValue = store.player
  api.onPlayerMove(cellIndex, cellValue)
    .then(ui.playerMoveSuccess)
    .catch(ui.playerMoveFailure)
}

const newGame = function () {
  console.log(event)
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailed)
}
module.exports = {
  boxSelected,
  newGame

}
