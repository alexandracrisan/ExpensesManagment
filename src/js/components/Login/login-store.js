var LoginConstants = require('../components/Login/login-constants.js');
var AppDisptacher = require('../dispatchers/app-dispatcher');
var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

function() {
	this.dispatchToken = AppDisptacher.register(this._registerToActions.bind(this));
	this._user = null;
	this._jwt = null;
}

var _registerToActions = function(action) {
	switch(action.actionType) {
		case USER_LOGGED_IN
	}
}