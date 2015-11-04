var LoginConstants = require('../components/Login/login-constants.js');
var AppDisptacher = require('../dispatchers/app-dispatcher');
var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;
var CHANGE_EVENT = 'change';

var _