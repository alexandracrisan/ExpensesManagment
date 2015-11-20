var React = require('react');
var Action = require('../action/action.js');

var TableRow = React.createClass({
	getInitialState: function() {
      return {
          user: this.props.user
      }
    },
    deleteUser: function(){
		var data = this.state.user.id;
		console.log(data);
		Action.deleteData(data);
	},
	render: function(){
		var currentUser = this.state.user
		return(
			<tr>
				<td>{currentUser.id}</td>
				<td>{currentUser.nume}</td>
				<td>{currentUser.prenume}</td>
				<td>{currentUser.varsta}</td>	
				<td><button onClick={this.deleteUser}>Delete</button></td>						
			</tr>
		);
	}
});
module.exports = TableRow;