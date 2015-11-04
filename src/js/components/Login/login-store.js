var LoginConstants = require('../components/Login/login-constants.js');
var AppDisptacher = require('../dispatchers/app-dispatcher');
var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;
var jwt_decode = require('jwt_decode');

var CHANGE_EVENT = 'change';

function() {
	this.dispatchToken = AppDisptacher.register(this._registerToActions.bind(this));
	this._user = null;
	this._jwt = null;
}

var LoginStore = objectAssign({}, EventEmitter.prototype, {
	emitChange: function () {
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback){
		this.on(CHANGE_EVENT, callback)
	},
	removeChangeListener: function(callback){
		this.removeListener(CHANGE_EVENT, callback)
	},
	getUser: function(){
		return this._user;
	},
	getJwt: function(){
		return this._jwt;
	},
	isLoggedIn() {
		return !!this._user;
	}
})

var _registerToActions = function(action) {
	switch(action.actionType) {
		case LoginConstants.LOGIN_USER:
			//we get the jwt from the action and save it locally
			this._jwt = action.jwt;
			//we decode it to get the user information
			this._user = jwt_decode(this._jwt); 
			//we emit a change to all components that are listening
			this.emitChange();
			break;

	}
}