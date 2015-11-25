var React = require('react');

/*ownee of Dropdown component
  renders an option with a category title and type
*/
var Option = React.createClass({

	determineType: function(){

		if(this.props.category.type === 0){
			return 'Expense';
		}
		else if(this.props.category.type === 1){
				return 'Income';
			}
			else return 'Both';	
	},

	render: function () {
		
		return(<option>{this.props.category.title} - {this.determineType()}</option>);
	}
});

module.exports = Option;