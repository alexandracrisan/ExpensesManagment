var React = require('react');


// ownee of IncomeList
var Income = React.createClass({
  
  render: function(){
   
    return (
      <div>
		<table className="table table-hover">
		    <thead>
		        <tr>
		          <th>Suma</th>
		          <th>Data</th>
		        </tr>
		    </thead>
		    <tbody>
		        <tr>
		          <td>{this.props.sum}</td>
		          <td>{this.props.sum}</td>
		        </tr>
		    </tbody>
		</table>
      </div>
    );
  }
});

module.exports = Income;


