var React = require('react');
var FinanceAction = require('../../actions/finances-actions.js');
var CategoriesStore = require('../../stores/category-store.js');

function getCategories(){

	return {categoryArr: CategoriesStore.getCategories()};
}

var AddItem = React.createClass({

	getInitialState: function(){

		return {
			categoryArr: CategoriesStore.getCategories(),
			//getCategories();
			category: 'bla'
		};
	},

	handleData: function(){

		var data = {
			sum: this.refs.sum.getDOMNode().value,
			date: this.refs.date.getDOMNode().value,
			description:this.refs.description.getDOMNode().value,
			category: this.state.category,
			type: this.refs.type.getDOMNode().value
		}

		FinanceAction.dataLoaded(data);
	},

	handleCategory: function(event){

		this.setState({category: event.target.value});
	},

	componentWillMount: function(){

		CategoriesStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function(){

		CategoriesStore.removeChangeListener(this._onChange);
	},

	_onChange: function(){

		this.setState(getCategories());
	},

	render: function() {
		
		var categoryList = this.state.categoryArr.map(function(item){

			return (category = {
				name: item.category,
				type: item.type
			});
		});

		return (
			<div id="page-content-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 centered form-inline">
            	<div className="form-group">              
                <input className="form-control" ref="sum" defaultValue='' placeholder="Add amount" />
              </div>
              <div className="form-group"> 
                <input type="date" className="form-control" ref="date"defaultValue='01/01/2015' />
              </div>
                <textarea rows="1" className="description-field form-control" ref="description" defaultValue='' placeholder="Add description"></textarea>
              <div className="form-group">   
                <select className="form-control" value={this.state.category} onChange={this.handleCategory} >
                	{categoryList.map(function(category){
                		return (
                			<option>{category.name} - {category.type}</option>
                		);
                	})}
                	
                </select>
              </div>
              <div className="form-group"> 
                 <select className="form-control" ref="type" defaultValue='+'>
                	<option>+</option>
                	<option>-</option>
                </select>
              </div>
                <button className="btn btn-danger" onClick={this.handleData}>Add</button>   
	         </div>
	        </div>
	      </div>
	    </div>
		);
	}
});

module.exports = AddItem;