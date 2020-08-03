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
  store.user = response.user
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
