var LoginConstants = require('../constants/login-constants.js');
	AppDispatcher = require('../dispatchers/app.dispatcher');
	LoginActions = require('../actions/login-actions.js');
	LoginForm = require('../components/Login/LoginForm.js')
	assign = require('react/lib/Object.assign');
	EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';
//var _users = [];

var mockUsersList = [
    {
        username: 'Diana',
        password: '123',
    },
    {
        username: 'Alexandra',
        password: '123',
    },
    {
        username: 'Mihai',
        password: '123',
    }
];

function _addUser(user) {

	mockUsersList.push({
		id: mockUsersList.length,
		username: user.username,
		password: user.password
	});

	console.log(mockUsersList);
};

var LoginStore = assign({}, EventEmitter.prototype, {

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	// userLogin: function() {
	// 	ApiCalls.users.get(function(response){
	// 		if(response.result){
	// 			_users = response.data;
	// 			console.log(_users);
	// 			LoginStore.emitChange();
	// 		}
	// 		else {
	// 			console.log(response);
	// 			alert('Username or password incorrect!');
	// 		}
	// 	});
	// },

	// getData: function(){
	// 	return _users;
	// },

	addChangeListener: function(callback){
		this.on(CHANGE_EVENT, callback)
	},

	removeChangeListener: function(callback){
		this.removeListener(CHANGE_EVENT, callback)
	},

	getMockData: function() {
    return mockUsersList;
  }
});


LoginStore.dispatchToken = AppDispatcher.register(function(action) {
	switch(action.type) {
		case LoginConstants.ActionTypes.LOGIN_USER:
			_addUser(action.user);
			LoginStore.emitChange();
			break;
		default:
			break;
	}
});

module.exports=LoginStore;