var React = require('react');

var ExpenseRow = require('../FinancesTable/ExpenseRow/financeRow.js'),
	TableHead = require('../FinancesTable/TableHead/tableHead.js'),
	FinanceStore = require('../../stores/finances-store.js');

var FinancesTable = React.createClass({

	getInitialState: function() {

		return {
			finances: []
		}
	},

	componentWillMount: function(){
		FinanceStore.addChangeListener(this._onChange)
	},

	componentDidMount: function() {
		FinanceStore.refreshData();
	},

	componentWillUnmount: function(){
		FinanceStore.removeChangeListener(this._onChange);
	},

	_onChange: function(){
		this.setState({finances: FinanceStore.getData()});
	},

	render: function() {
		return (
			<table className="table table-bordered">
				<TableHead/>
				<tbody>
					{
						this.state.finances.map(function(finance) {
							return(<ExpenseRow expense={finance} key={finance.id}/>)
						})
					}

				</tbody>
				<tfoot>
				<tr>
					<td><b>Sold</b></td>
					<td colSpan="11"><b>$100</b></td>
				</tr>
				</tfoot>
			</table>

		);
	}
});

module.exports = FinancesTable;