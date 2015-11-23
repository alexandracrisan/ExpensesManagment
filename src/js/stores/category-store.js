/**
 * Created by alinaoros on 11/16/2015.
 */

var Dispatcher = require('../dispatchers/app.dispatcher.js'),
	EventEmitter = require('events').EventEmitter,
    assign = require('react/lib/Object.assign'),
    CategoryConstants = require('../constants/category-constants.js');
    

var CHANGE_EVENT = 'change';

var mockCategoryList = [{
    nr: 1,
    category: 'Taxes',
    type: 'Expense'
}, {
    nr: 2,
    category: 'Meal',
    type: 'Expense'

}, {
    nr: 3,
    category: 'Pension',
   type:  'Income'
}, {
    nr: 4,
    category: 'Salary',
    type: 'Income'
}, {
    nr: 5,
    category: 'Gas',
    type: 'Expense'
}, {
    nr: 6,
    category: 'Meal',
    type: 'Expense'

}, {
    nr: 7,
    category: 'Pension',
   type:  'Income'
}, {
    nr: 8,
    category: 'Salary',
    type: 'Income'
}, {
    nr: 9,
    category: 'Gas',
    type: 'Income'
 }];

function _addCategory(data) {

	mockCategoryList.push({
		category: data.category,
		type: data.type
	});

	console.log('store: ' + data);
}

var CategoryStore = assign({}, EventEmitter.prototype, {

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	getCategories: function() {
       // var data = ApiCalls.getData()
		return mockCategoryList;
	},

	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}
});

CategoryStore.dispatchToken = Dispatcher.register(function(action) {

	switch(action.type) {
		case CategoryConstants.ActionTypes.ADD_CATEGORY:
			_addCategory(action.data);
			CategoryStore.emitChange();
			break;
	}
});

module.exports = CategoryStore;