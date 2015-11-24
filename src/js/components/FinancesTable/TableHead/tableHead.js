var React = require('react');
	
var TableHead = React.createClass({
 
	render: function(){
		return (
					<thead>
						<tr>
							<th>Id</th>
							<th>Title</th>
							<th>Description</th>
							<th>Credit</th>
							<th>Debit</th>
							<th>From</th>
							<th>To</th>
							<th>Date</th>
							<th>Typeid</th>
							<th>Tags</th>
							<th>
								<button className="btn btn-default btn-sm all-space">
									<i className="glyphicon glyphicon-trash"></i> <strong>Delete</strong>
								</button>
							</th>
						</tr>
					</thead>
		);
	}
});

module.exports = TableHead;