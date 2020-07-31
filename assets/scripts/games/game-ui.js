'use strict'
const store = require('../store')

const createGameSuccess = function (response) {
  $('#message').text('New Game Made!')

  store.game = response.game
  store.player = 'x'
  console.log('store: ', store)
}
const playerMoveSuccess = function (response) {
//   $('#message').text('Signed In')
//   console.log(store)
//   store.user = response.game._id
//   console.log('store: ', store)
//   console.log('token: ', store.user.token)
  if ($(store.game.cells).text() === '') {
    $(store.game.cells).text(store.player)
    if (store.player !== 'O') {
      store.player = 'O'
    } else if (store.player === 'O') {
      $(store.game.cells).text(store.player)
      store.player = 'x'
    }
  }
  console.log(store)
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
