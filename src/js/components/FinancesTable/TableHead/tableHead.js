var React = require('react');
	
var TableHead = React.createClass({
 
	render: function(){
		return (
				<form action='#' method='post'>
					<thead>
						<tr>
							<th>Id</th>
							<th>Title</th>
							<th>Description</th>
							<th>Amount</th>
							<th>From</th>
							<th>To</th>
							<th>Created</th>
							<th>Updated</th>
							<th>Typeid</th>
							<th>Tags</th>
							<th>
								<button className="btn btn-default btn-sm all-space">
									<i className="glyphicon glyphicon-trash"></i> <strong>Delete</strong>
								</button>
							</th>
						</tr>
					</thead>
				</form>
		);
	}
});

module.exports = TableHead;