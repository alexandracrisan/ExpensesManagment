var AppDispatcher = require('../dispatchers/app.dispatcher.js'),
    EventEmitter = require('events').EventEmitter,
    assign = require('react/lib/Object.assign'),
    FinanceConstants = require('../constants/finances-constants.js'),
    ApiCalls = require('../stores/api-calls.js'),
    ApiConstants = require('../constants/api-constants.js');

var CHANGE_EVENT = 'change';
var _movements = [];
var _categories=[];
var idArray= [];

// function _addMovementItem(finance){

// 	var data = ApiCalls.movements.add(finance);

// }

// function _addCategoryItem(finance){

//   var data = ApiCalls.categories.add(finance);

// }

function addId(id){
    idArray.push(id);
    console.log(idArray);
}
function deletedId(id){
    var index = idArray.indexOf(id);
    idArray.splice(index,1);
    console.log(idArray);
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

    editMovement: function(movement){

        ApiCalls.movements.update(movement, function(response){
            if(response.result){

                FinanceStore.refreshData();
            }
            else {
                console.log(response);
            }
        });
    },

    deleteData: function(id){
        console.log(id);
        ApiCalls.movements.delete(id, function(response){
            if(response.result){
                FinanceStore.emitChange();
            }
            else {console.log(response);}
        });
    },

    deleteUser: function(){
        for(var i=0; i<idArray.length; i++){
            this.deleteData(idArray[i]);
            console.log(idArray[i] + 'fd');
        }
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
        case FinanceConstants.ActionTypes.EDIT_FINANCE:
            FinanceStore.editMovement(action.data);
            break;
        case FinanceConstants.ActionTypes.ADD_ID:
            addId(action.data);
            FinanceStore.emitChange();
            break;
        case FinanceConstants.ActionTypes.REMOVE_ID:
            deletedId(action.data);
            FinanceStore.emitChange();
            break;
        default:
    }

});

module.exports = FinanceStore;