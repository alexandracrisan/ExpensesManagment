var React = require('react');

var ExpenseRow = require('../../components/FinancesTable/ExpenseRow/ExpenseRow.js');
var TableHead = require('../../components/FinancesTable/TableHead/tableHead.js');

var FinancesTable = React.createClass({

	render: function() {
		
		return (
			<table>
				<TableHead/>
				<tbody>
					<ExpenseRow/>
				</tbody>
			</table>
			
		);
	}
});

module.exports = FinancesTable;