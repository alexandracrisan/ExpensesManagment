
var Dispatcher = require('flux').Dispatcher;
// var assign = require('react/lib/Object.assign');

// var AppDispatcher = assign(new Dispatcher(), {
//     //function that's taking in our action received from app-actions.js module
//     handleViewAction: function(action){
//         //console.log('action', action);
//         //the .dispatch function from the flux library
//         this.dispatch({
//             source: 'VIEW_ACTION',
//             action: action //the action has an action type and a task

//         });
//     }
// });

// module.exports = AppDispatcher;

module.exports = new Dispatcher();