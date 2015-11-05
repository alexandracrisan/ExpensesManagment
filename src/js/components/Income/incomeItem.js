var React = require('react');
var AppActions = require('../../actions/app-actions');

/*  ownee of TodosList
    creates a input of type checkbox that will be updated according to the 
    .checked field of a task from todos list
    updates said field when it is checked by the user
 */
var Income = React.createClass({
  
  render: function(){
   
    return (
      <span>
        {this.props.sum}
        {this.props.date}
      </span>
    );
  }
});

module.exports = Income;