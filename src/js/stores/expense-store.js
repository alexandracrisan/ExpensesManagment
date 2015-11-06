/**
 * Created by crisanalexandra on 11/5/2015.
 */
var AppDispatcher = require('../dispatchers/app.dispatcher.js'),
    EventEmitter = require('events').EventEmitter,
    ExpenseConstants = require("../constants/expense-constants.js"),
    ExpenseActions = require('../actions/expenses-actions.js'),
    assign = require('react/lib/Object.assign');

var CHANGE_EVENT = 'change';

var mockExpensesList = [
    {
        suma: 300,
        date: '2015-02-01',
        description: 'lalalal'
    },
    {
        suma: 340,
        date: '2014-12-02',
        description: 'AnaBanana'
    },
    {
        suma: 1009,
        date: '2015-02-01',
        description: 'mINIONS'
    }
];

function _addItem(item){
    //$.post(url, {
    //    suma: item.suma,
    //    date: item.data,
    //    description: item.description
    //},function(status){
    //    alert(status);
    //});

    mockExpensesList.push({
        id: mockExpensesList.length,
        suma: item.suma,
        date: item.data,
        description: item.description
    });
    console.log(mockExpensesList);
}

var ExpenseStore = assign({}, EventEmitter.prototype, {

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    getMockData: function() {
        return mockExpensesList;
    },

    addChangeListener: function(callback) {
       this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.on(CHANGE_EVENT,callback)
    }
});


ExpenseStore.dispatchToken = AppDispatcher.register(function(action){

    //var action = payload.action;

    switch(action.type){
        case ExpenseConstants.ActionTypes.ADD_EXPENSE:
            _addItem(action.item);
            ExpenseStore.emitChange();
            //console.log(action.item + 'aaaaaaaStore');
            break;
        default:
    }

});


module.exports = ExpenseStore;