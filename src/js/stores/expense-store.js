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
        suma: item.suma,
        date: item.data,
        description: item.description
    });
    console.log(mockExpensesList);
}

var ExpenseStore = assign(EventEmitter.prototype, {

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    getMockData: function() {
        return mockExpensesList;
    }
});
    //this is a way to reference our store if we have multiple stores
AppDispatcher.register(function(payload){

    var action = payload.action; //this is our action from handleViewAction

    //depending on what value is in payload.action.actionType the corresponding function will be called

    switch(action.actionType){
        case ExpenseConstants.ADD_EXPENSE:
            _addItem(action.item);
            ExpenseStore.emitChange();
            console.log(action.item + 'aaaaaaaStore');
            break;
        //default:
        //    return true;
    }

    ExpenseStore.emitChange();
    return true; //return true so it can actually resolve to the dispatcher so it can move onto the next action
});


module.exports = ExpenseStore;