var EventEmitter = require('events').EventEmitter;
var assign = require('react/lib/Object.assign');
var Dispatcher = require('../dispatchers/app.dispatcher.js');
var Constants = require('../constants/constants.js');

var CHANGE_EVENT = "change";
var idArray= [];

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
function deletetUser(){
    for (var i=0 ; i<idArray.length; i++){
   
    	users.splice(idArray[i]-1, 1);
        idArray.splice(idArray[i]-1, 1);	
    	console.log(users);
    	
    }
}
function addId(id){
        idArray.push(id);
        console.log(idArray);
}
function deletedId(id){
        var index = idArray.indexOf(id);
        idArray.splice(index,1);
        console.log(idArray);
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
    },
    deleteData: function(id){
        ApiCalls.movements.delete(function(response){
            if(response.result){               
                FinanceStore.emitChange();
            }
            else {console.log(response);}
        });
    },
    deleteUser: function(){
        for(var i=0; i<idArray.length; i++){
            deleteData(idArray[i]);
        }
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
        case Constants.ActionTypes.ADD_ID:
            addId(action.data);
            Store.emitChange();         
            break;
        case Constants.ActionTypes.REMOVE_ID:
            deletedId(action.data);
            Store.emitChange();         
            break;
	    default:
	}
});

module.exports = Store;