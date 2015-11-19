var React = require('react');
var TableRow = require('../Table/tableRow.js');
var Store = require('../store/store.js');
var Formular = require ('../Table/form.js');

var Tabel = React.createClass({
	getInitialState: function(){
		return{
			users: Store.getData()
		}
	},
	getUsers: function() {
		return {
			users: Store.getData()
		}
	},
	componentWillMount: function(){
		Store.addChangeListener(this._onChange)
	},

	componentWillUnmount: function(){
		Store.removeChangeListener(this._onChange);
	},

	_onChange: function(){
		this.setState(this.getUsers());
	},


	render: function(){
		return(
			<div className="container">
				<Formular/>
				<table className="table table-bordered">
					<thead>
						<th>Id</th>
						<th>Name</th>
						<th>Prenume</th>
						<th>Varsta</th>
					</thead>
					<tbody>						
						{this.getUsers().users.map(function(user){
							return(<TableRow key={user.id} user={user}/>)
						})
						
					}
					</tbody>
				</table>
			</div>
		);
	}
});
module.exports = Tabel;