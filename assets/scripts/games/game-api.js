'use strict'
const config = require('../config')
const store = require('../store')


const onClick = function (index, player) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.user._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: index,
          value: player
        }
      }
    }
  })
}
const createGame = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: '{}'
  })
}
module.exports = {
  onClick,
  createGame
}
