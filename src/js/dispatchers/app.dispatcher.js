// dummy comment
var  Dispatcher = require('flux').Dispatcher;

//allows you to pass additional properties into an existing objects
var assign = require('react/lib/Object.assign');

/* we use the assign method to assign new properties to a new Dispatcher
 and that's going to be an object that we pass in
 */
var AppDispatcher = assign(new Dispatcher(), {
    //function that's taking in our action received from app-actions.js module
    handleViewAction: function(action){
        console.log('action', action);
        //the .dispatch function from the flux library
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action //the action has an action type and a task
        })
    }
})

module.exports = AppDispatcher;