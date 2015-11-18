/**
 * Created by alinaoros on 11/16/2015.
 */

var Dispatcher = require('../dispatchers/app.dispatcher.js'),
	EventEmitter = require('events').EventEmitter,
    assign = require('react/lib/Object.assign'),
    CategoryConstants = require('../constants/category-constants.js');

var CHANGE_EVENT = 'change';

var CategoryStore = assign({}, EventEmitter.prototype, {

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	}
})