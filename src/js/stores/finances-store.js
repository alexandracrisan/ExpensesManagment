var AppDispatcher = require('../dispatchers/app.dispatcher.js'),
    EventEmitter = require('events').EventEmitter,
    assign = require('react/lib/Object.assign');

var CHANGE_EVENT = 'change';

var mockFinancesList = [{
    nr: 1,
    date: '12/12/1010',
    description: 'fooood',
    category: 'food',
    debit: '-',
    credit: 100
}, {
    nr: 2,
    date: '12/12/1010',
    description: 'cd',
    category: 'meal',
    debit: '-',
    credit: 100
}, {
    nr: 3,
    date: '12/12/1010',
    description: 'ceds',
    category: 'food',
    debit: 200,
    credit: '-'
}, {
    nr: 4,
    date: '12/12/1010',
    description: 'ceds',
    category: 'food',
    debit: 1020,
    credit: '-'
}, {
    nr: 5,
    date: '12/12/1010',
    description: 'ceds',
    category: 'food',
    debit: '-',
    credit: 560
}];


var FinanceStore = assign({}, EventEmitter.prototype, {

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    getData: function() {
        return mockFinancesList;
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.on(CHANGE_EVENT,callback)
    }
});


FinanceStore.dispatchToken = AppDispatcher.register(function(action){

    //var action = payload.action;

    //switch(action.type){
    //    case ExpenseConstants.ActionTypes.ADD_EXPENSE:
    //        _addItem(action.item);
    //        ExpenseStore.emitChange();
    //        break;
    //    default:
    //}

});


module.exports = FinanceStore;