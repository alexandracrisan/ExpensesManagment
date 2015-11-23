var AppDispatcher = require('../dispatchers/app.dispatcher.js'),
    EventEmitter = require('events').EventEmitter,
    assign = require('react/lib/Object.assign'),
    FinanceConstants = require('../constants/finances-constants.js'),
    ApiCalls = require('../stores/api-calls.js'),
    ApiConstants = require('../constants/api-constants.js');

var CHANGE_EVENT = 'change';
var _movements = [];

function _addItem(finance){

	var data = ApiCalls.movements.add(finance);

}

var FinanceStore = assign({}, EventEmitter.prototype, {

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    refreshData: function() {
       
       ApiCalls.movements.get(function(response){
        		if(response.result){
        			_movements = response.data;
        			console.log(_movements);
        			FinanceStore.emitChange();
        		}
        		else {console.log(response);}
        	});        
    },

    getData: function(){

    	return _movements;
    },

    addMovement: function(movement){

    	ApiCalls.movements.add(movement, function(response){
        		if(response.result){
        			
        			FinanceStore.refreshData();
        		}
        		else {
        			console.log(response);
        		}
        	});
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT,callback);
    }
});


FinanceStore.dispatchToken = AppDispatcher.register(function(action){

    switch(action.type){
       case FinanceConstants.ActionTypes.ADD_FINANCE:
           FinanceStore.addMovement(action.data);
           
           break;
       default:
    }

});

module.exports = FinanceStore;