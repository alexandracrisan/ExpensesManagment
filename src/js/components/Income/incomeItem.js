var React = require('react');


/*  ownee of TodosList
    creates a input of type checkbox that will be updated according to the 
    .checked field of a task from todos list
    updates said field when it is checked by the user
 */
var Income = React.createClass({
  
  render: function(){
   
    return (
      <div>
        {this.props.sum}
        {this.props.date}
      </div>
    );
  }
});

module.exports = Income;