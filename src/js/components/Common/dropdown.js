var React = require('react');
var OptionContent = require('../../components/common/option.js');

/*Owner of OptionContent
  iterates through a list of categories that comes from its owner component
*/
var Dropdown = React.createClass({

	render: function () {
		var categoryList = this.props.categoryArr.map(function(item){

			return (category = {
				title: item.title,
				type: item.type
			});
		});

		return(
			<select className="form-control" value={this.props.category} onChange={this.props.handle} >
				{categoryList.map(function(category){
				    return (				          			
				        <OptionContent category={category}></OptionContent>			            			
			  	    );
			    })}	            	
	        </select> 
	    );
	}
});

module.exports = Dropdown;