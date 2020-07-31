'use strict'
const config = require('../config')
const store = require('../store')

const onPlayerMove = function (gameData, index, value) {
  let data = {
    game: {
      cell: {
        index: index,
        value: value
      },
      over: false
    }
  }
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: index,
          value: value
        }
      }
    }
  })
}
const createGame = function () {
  // console.log('data: ', data)
  // let data = {
  //   game: {
  //     cells: ['', '', '', '', '', '', '', '', ''],
  //     over: false,
  //     player_x: {
  //       id: store.user.id,
  //       email: store.user.email
  //     },
  //     player_o: null
  //   }
  // }
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
module.exports = {
  onPlayerMove,
  createGame
}
