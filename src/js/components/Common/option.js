var React = require('react');

var Option = React.createClass({


	determineType: function(){

		//console.log(this.props.category.type);
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