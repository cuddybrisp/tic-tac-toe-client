'use strict'
const store = require('../store')
const api = require('./game-api')

const createGameSuccess = function (response) {
  store.game = response.game
  store.player = 'x'
  $('#message').text(`New Game Made, ${store.player} goes first.`)
  $('.board').show()
}

const playerMoveSuccess = function (response) {
  store.game = response.game
  let over = false
  $(store.selectedCell).text(store.player)
  if (over !== true) {
    if (store.player !== 'O') {
      store.player = 'O'
    } else if (store.player === 'O') {
      store.player = 'x'
    }
    $('#message').text(`its ${store.player} time bro`)
  if (store.game.cells[0] !== '' && store.game.cells[1] === store.game.cells[0] && store.game.cells[2] === store.game.cells[0]) {
    onPlayerWin()
    $('#message').text(`${store.player} Has won!`)
    over = true
    // top row across
  } else if (store.game.cells[3] !== '' && store.game.cells[4] === store.game.cells[3] && store.game.cells[5] === store.game.cells[3]) {
    onPlayerWin()
    $('#message').text(`${store.player} Has won!`)
    over = true
    // middle row across
  } else if (store.game.cells[6] !== '' && store.game.cells[7] === store.game.cells[6] && store.game.cells[8] === store.game.cells[6]) {
    onPlayerWin()
    $('#message').text(`${store.player} Has won!`)
    // bottom row across
    over = true
  } else if (store.game.cells[0] !== '' && store.game.cells[3] === store.game.cells[0] && store.game.cells[6] === store.game.cells[0]) {
    onPlayerWin()
    $('#message').text(`${store.player} Has won!`)
    // first column down
    over = true
  } else if (store.game.cells[6] !== '' && store.game.cells[7] === store.game.cells[6] && store.game.cells[8] === store.game.cells[6]) {
    onPlayerWin()
    $('#message').text(`${store.player} Has won!`)
    // second column down
    over = true
  } else if (store.game.cells[1] !== '' && store.game.cells[4] === store.game.cells[1] && store.game.cells[7] === store.game.cells[1]) {
    onPlayerWin()
    $('#message').text(`${store.player} Has won!`)
    // third column down
    over = true
  } else if (store.game.cells[2] !== '' && store.game.cells[5] === store.game.cells[2] && store.game.cells[8] === store.game.cells[2]) {
    onPlayerWin()
    $('#message').text(`${store.player} Has won!`)
    // diagonal 1
    over = true
  } else if (store.game.cells[0] !== '' && store.game.cells[4] === store.game.cells[0] && store.game.cells[8] === store.game.cells[0]) {
    onPlayerWin()
    $('#message').text(`${store.player} Has won!`)
    // THE ONE UNDER IS LAST WIN
    over = true
  } else if (store.game.cells[2] !== '' && store.game.cells[4] === store.game.cells[2] && store.game.cells[6] === store.game.cells[2]) {
    onPlayerWin()
    $('#message').text(`${store.player} Has won!`)
    // HERE IS WHERE WE TIE
    over = true
  } else if (store.game.cells.every(function (cell) {
      return cell !== ''
    })) {
      onPlayerWin()
      $('#message').text('its a tie')
    }
  }
}
const gameOverSuccess = function (response) {
  $('#gameboard').hide()
  $('.box').text('')
  store.game = response.game
}
const gameOverFailure = function () {
  $('#message').text('Did not finish game :()')
}
const onPlayerWin = function () {
  api.gameOver()
  .then(gameOverSuccess)
  .catch(gameOverFailure)
}
const playerMoveFailure = function (event) {
  $('#message').text('Doesnt Work')
}

module.exports = {
  createGameSuccess,
  playerMoveSuccess,
  playerMoveFailure
}
