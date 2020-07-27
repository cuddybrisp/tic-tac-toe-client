'use strict'
const store = require('../store')
const signUpSuccess = function () {
  $('#message').text('Signed up!!')
}

const signUpFailure = function () {
  $('#message').text('Sign up failed')
}

const signInSuccess = function (response) {
  $('#message').text('Signed In')
  console.log(store)
  store.user = response.user
  console.log('store: ', store)
  console.log('token: ', store.user.token)
}
const signInFailure = function () {
  $('#message').text('Sign In Failed.')
}
const changePasswordFailure = function () {
  $('#message').text('Change password failed')
}
const changePasswordSuccess = function () {
  $('#message').text('Changed Password!')
}

const signOutFailure = function () {
  $('#message').text('Signout failed')
}
const signOutSuccess = function () {
  $('#message').text('Signed Out!')
  store.user = null
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordFailure,
  changePasswordSuccess,
  signOutSuccess,
  signOutFailure
}
