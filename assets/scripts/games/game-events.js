'use strict'
const api = require('./game-api')
const ui = require('./game-ui')
const store = require('../store')

const getFormFields = require('../../../lib/get-form-fields')


store.player = 'X'

const onSelect = function (event) {
  event.preventDefault()
  store.currentBox = event.target
  const cellIndex = $(store.currentBox).data('index')
  if ($(store.currentBox).text() === '') {
    $(store.currentBox).text(store.player)
    if (store.player !== 'O') {
      store.player = 'O'
    } else if (store.player === 'O') {
      $(store.currentBox).text(store.player)
      store.player = 'X'
    }
  } else {
    $('#message').text('Try another spot')
  }
  const cellValue = store.player
  api.onClick(cellIndex, cellValue)
    .then(ui.clickSuccess)
    .catch(ui.clickFailure)
}
const newGame = function () {
  console.log(event)
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailed)
}
module.exports = {
  onSelect,
  newGame

}
