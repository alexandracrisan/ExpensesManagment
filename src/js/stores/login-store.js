var LoginConstants = require('../constants/login-constants.js');
var AppDisptacher = require('../dispatchers/app-dispatcher');
var LoginActions = require('../actions/login-actions.js')
var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;
var jwt_decode = require('jwt_decode');

var CHANGE_EVENT = 'change';

var _users = [];

function _addUser(user) {
	_users.push({
		id: _users.length,
		username: user.username,
		password: user.password
	});
	console.log(_users[0]);
};

var LoginStore = assign({}, EventEmitter.prototype, {
	emitChange: function () {
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback){
		this.on(CHANGE_EVENT, callback)
	},
	removeChangeListener: function(callback){
		this.removeListener(CHANGE_EVENT, callback)
	},
	getUsername: function(){
		return this._username;
	},
	getJwt: function(){
		return this._jwt;
	},
	getAll: function(){
		return _users;
	}
	isLoggedIn() {
		return !!this._username;
	},
});


LoginStore.dispatchToken = AppDispather.register(function(action) {
	switch(action.type) {
		case LoginConstants.ActionTypes.LOGIN_USER:
			_addUser(action.data);
			LoginStore.emitChange();
			break;
		default:
			break;
	}
});

// AppDispather.register(function(payload) {
// 	var action = payload.action;
// 	switch(action.actionType) {
// 		case LoginConstants.LOGIN_USER:
// 			we get the jwt from the action and save it locally
// 			this._jwt = action.jwt;
// 			we decode it to get the user information
// 			this._username = jwt_decode(this._jwt); 
// 			we emit a change to all components that are listening
// 			this.emitChange();
// 			break;
// 		default:
// 			break;
// 	};
// }

module.exports=LoginStore;