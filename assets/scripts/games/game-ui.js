'use strict'
const store = require('../store')

const createGameSuccess = function (response) {
  $('#message').text('New Game Made!')
  console.log(store)
  store.user = response.user
  console.log('store: ', store)
  console.log('token: ', store.user.token)
}
const playerMoveSuccess = function (response) {
  $('#message').text('Signed In')
  console.log(store)
  store.user = response.user._id
  console.log('store: ', store)
  console.log('token: ', store.user.token)
}
module.exports = {
  createGameSuccess,
  playerMoveSuccess
}
