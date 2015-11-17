var React = require('react');
	
var TableHead = React.createClass({
 
	render: function(){
		return (
			<div>
				<form action='#' method='post'>
					<thead>
						<tr>
							<th align="center">Nr. crt</th>
							<th align="center">Date</th>
							<th align="center">Desciption</th>
							<th align="center">Category</th>
							<th align="center">Debit</th>
							<th align="center">Credit</th>
							<th>
								<button className="btn btn-default btn-sm all-space">
									<i className="glyphicon glyphicon-trash"></i> <strong>Delete</strong>
								</button>
							</th>
						</tr>
					</thead>
				</form>
			</div>
		);
	}
});

module.exports = TableHead;