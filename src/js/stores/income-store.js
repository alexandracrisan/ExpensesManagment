var IncomeConstants = require('../../constants/income-constants.js');
var IncomeActions = require('../../actions/income-actions.js');
var Dispatcher = require('../../dispatchers/app.dispatcher.js');

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _incomes = [];

function _addIncome(income){
	_incomes.push({
		id: _incomes.length,
		sum: income.suma,
		date: income.dataTime
	});
};

var IncomeStore = assign({}, EventEmitter.prototype, {
	
	emitChange: function(){
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function(callback) {
    	this.on(CHANGE_EVENT, callback);
  	},

  	removeChangeListener: function(callback) {
    	this.removeListener(CHANGE_EVENT, callback);
  	},

  	getAll: function(){
  		return _incomes;
  	}, 	
});

IncomeStore.dispatchToken = Dispatcher.register(function(action){
	switch(action.type){
		case IncomeConstants.ActionTypes.ADD_INCOME:
			_addIncome(action.data);
			IncomeStore.emitChange();
			break;
		default: //nothing
	}
});

module.exports = IncomeStore;