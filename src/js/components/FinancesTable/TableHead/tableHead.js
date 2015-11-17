var React = require('react');
	
var TableHead = React.createClass({
 
	render: function(){
		return (

			<thead>
				<tr>
					<th>Nr. crt</th>
					<th>Date</th>
					<th>Description</th>
					<th>Category</th>
					<th>Debit</th>
					<th>Credit</th>
				</tr>
			</thead>

		);
	}
});

module.exports = TableHead;