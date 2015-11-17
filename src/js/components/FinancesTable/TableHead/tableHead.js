var React = require('react'),
	
var TableHead = React.createClass({
 
	render: function(){
		return (
			<table>
				<thead>
					<tr>
						<th>Nr. crt</th>
						<th>Date</th>
						<th>Desciption</th>
						<th>Category</th>
						<th>Debit</th>
						<th>Credit</th>
						</tr>
				</thead>
				<tfoot>
					<tr>
						<td>Sold</td>
						<td>$100</td>
					</tr>
				</tfoot>
			</table>
		);
	}
});

module.exports = TableHead;