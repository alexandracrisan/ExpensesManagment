var EventEmitter = require('events').EventEmitter;
var assign = require('react/lib/Object.assign');
var Dispatcher = require('../dispatchers/app.dispatcher.js');
var Constants = require('../constants/constants.js');

var CHANGE_EVENT = "change";

var users = [{
    id: 1,
    nume: 'Pop',
    prenume: 'Bogdan',
    varsta: 25       
}, {
    id: 2,
    nume: 'Popa',
    prenume: 'Maria',
    varsta: 27      
}, {
    id: 3,
    nume: 'Ardelean',
    prenume: 'Victor',
    varsta: 18      
}];
function insertUser (data){
	users.push({
		id:users.length+1,
		nume:data.nume,
		prenume:data.prenume,
		varsta:data.varsta
	});
}
function deletetUser(data){
	users.splice(data-1, 1);	
	console.log(users);
	console.log(data);
}


var Store = assign({}, EventEmitter.prototype, {
	emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    getData: function() {
        return users;
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.on(CHANGE_EVENT,callback)
    }
});

Store.dispatchToken = Dispatcher.register(function(action){
	switch(action.type){
		case Constants.ActionTypes.ADD_USER:
			insertUser(action.data);
			Store.emitChange();
	        break;
	   
	    case Constants.ActionTypes.REMOVE_USER:
			deletetUser(action.data);
			Store.emitChange();			
	        break;
	    default:
	}
});

module.exports = Store;