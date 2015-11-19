var React = require('react');

var TableRow = React.createClass({
	getInitialState: function() {
      return {
          user: this.props.user
      }
    },
    deleteUser: function(){
		
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