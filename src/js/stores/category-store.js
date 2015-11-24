/**
 * Created by alinaoros on 11/16/2015.
 */

var Dispatcher = require('../dispatchers/app.dispatcher.js'),
	EventEmitter = require('events').EventEmitter,
    assign = require('react/lib/Object.assign'),
    CategoryConstants = require('../constants/category-constants.js');
    ApiCalls = require('../stores/api-calls.js');
    

var CHANGE_EVENT = 'change';

var _categories = [];

var mockCategoryList = [{
    id: 1,
    title: 'Taxes',
    type: 0
}, {
    id: 2,
    title: 'Meal',
    type: 0

}, {
    id: 3,
    title: 'Pension',
    type:  1
}, {
    id: 4,
    title: 'Salary',
    type: 1
}, {
    id: 5,
    title: 'Gas',
    type: 2
}, {
    id: 6,
    title: 'Meal',
    type: 2

}, {
    id: 7,
    title: 'Pension',
   type:  1
}, {
    id: 8,
    title: 'Salary',
    type: 1
}, {
    id: 9,
    title: 'Gas',
    type: 0
 }];

function _addCategory(data) {

	mockCategoryList.push({
		title: data.title,
		type: data.type
	});

	console.log('store: ' + data);
}

var CategoryStore = assign({}, EventEmitter.prototype, {

	emitChange: function() {

		this.emit(CHANGE_EVENT);

	},

	getData: function() {
       // var data = ApiCalls.getData()
		return mockCategoryList;
	},

	addChangeListener: function(callback) {

		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {

		this.removeListener(CHANGE_EVENT, callback);
	},

    refreshData: function() {

      ApiCalls.categories.get(function(response) {

        if(response.result) {
            _categories = response.data;
            console.log(_categories);
            CategoryStore.emitChange();
        }
        else {
            console.log(response);
          }
      });

    },

    getCategories: function() {

        return _categories;
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