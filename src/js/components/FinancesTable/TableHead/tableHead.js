var React = require('react'),
	FinanceStore = require('../../../stores/finances-store.js');
	
var TableHead = React.createClass({

	deleteUser: function(){

		FinanceStore.deleteUser();
	},

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
								<button onClick={this.deleteUser} className="input-component btn btn-default btn-sm all-space">
									<i className="glyphicon glyphicon-trash"></i> <strong>Delete</strong>
								</button>
							</th>
						</tr>
					</thead>
		);
	}
});

module.exports = TableHead;