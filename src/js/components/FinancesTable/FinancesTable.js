var React = require('react');

var ExpenseRow = require('../../components/FinancesTable/ExpenseRow/ExpenseRow.js');

var FinancesTable = React.createClass({

	render: function() {
		
		return (
			<ExpenseRow/>
		);
	}
});

module.exports = FinancesTable;