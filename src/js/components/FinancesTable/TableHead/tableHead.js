var React = require('react');
	
var TableHead = React.createClass({
 
	render: function(){
		return (

			<form action='#' method='post'>
				<thead>
					<tr>
						<th>Nr. crt</th>
						<th>Date</th>
						<th>Description</th>
						<th>Category</th>
						<th>Debit</th>
						<th>Credit</th>
						<th>
							<a className="btn btn-default btn-sm" href="#">
								<i className="glyphicon glyphicon-trash"></i>Delete
							</a>
						</th>
					</tr>
				</thead>
			</form>

		);
	}
});

module.exports = TableHead;