var React = require('react');


// ownee of IncomeList
var Income = React.createClass({
  
  render: function(){
   
    return (
      <div>
        <div>Suma: {this.props.sum} </div>
        <div>Data: {this.props.date}</div>
      </div>
    );
  }
});

module.exports = Income;