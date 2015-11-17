var React = require('react');

var ExpenseRow = require('../../components/FinancesTable/ExpenseRow/ExpenseRow.js');

var FinancesTable = React.createClass({

	render: function() {
		
		return (
			<table>
				<tableHead/>
				<tbody>
					<ExpenseRow/>
				</tbody>
			</table>
			
		);
	}
});

module.exports = FinancesTable;