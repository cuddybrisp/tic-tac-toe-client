'use strict'
const store = require('../store')

const createGameSuccess = function (response) {
  $('#message').text('New Game Made!')
  console.log(store)
  store.game = response.game
  store.player = 'x'
  console.log('store: ', store)
  console.log('token: ', store.user.token)
}
const playerMoveSuccess = function (response) {
//   $('#message').text('Signed In')
//   console.log(store)
//   store.user = response.game._id
//   console.log('store: ', store)
//   console.log('token: ', store.user.token)
  if ($(store.selectedCell).text() === '') {
    $(store.selectedCell).text(store.player)
    if (store.player !== 'O') {
      store.player = 'O'
    } else if (store.player === 'O') {
      $(store.selectedCell).text(store.player)
      store.player = 'x'
    }
  }
}

const playerMoveFailure = function (response) {
  const moveFailure = function (event) {
    $('#message').text('Doesnt Work')
  }
}
module.exports = {
  createGameSuccess,
  playerMoveSuccess,
  playerMoveFailure,
}
