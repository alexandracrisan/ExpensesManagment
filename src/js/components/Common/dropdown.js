var React = require('react');
var OptionContent = require('../../components/common/option.js');
var Dropdown = React.createClass({


	// determineType: function(){

	// 	//console.log(this.props.category.type);
	// 	if(this.props.category.type === 0){
	// 		return 'Expense';
	// 	}
	// 	else if(this.props.category.type === 1){
	// 			return 'Income';
	// 		}
	// 		else return 'Both';	
	// },

	render: function () {
		
		return(
			<select className="form-control" value={this.props.category} onChange={this.props.handle} >
				{this.props.categoryList.map(function(category){
				    return (				          			
				        <OptionContent category={category}></OptionContent>			            			
			  	    );
			    })}	            	
	        </select> 
	    );
	}
});

module.exports = Dropdown;