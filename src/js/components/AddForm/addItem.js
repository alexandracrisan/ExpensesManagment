var React = require('react');
var FinanceAction = require('../../actions/finances-actions.js');
var CategoriesStore = require('../../stores/category-store.js');

var AddItem = React.createClass({

	getInitialState: function(){

		return {
			categoryArr: CategoriesStore.getCategories(),
			//getCategories();
			category: '',
			sum: ''
		};
	},

	handleData: function(){

		var data = {
			amount: this.state.sum,
			title: this.refs.title.getDOMNode().value,
			date: this.refs.dateCreated.getDOMNode().value,
			from: this.refs.from.getDOMNode().value,
			to: this.refs.to.getDOMNode().value,
			description:this.refs.description.getDOMNode().value,
			type: 1,
			tags: this.refs.tags.getDOMNode().value
		}

		FinanceAction.dataLoaded(data);
	},

	handleCategory: function(event){

		this.setState({category: event.target.value});
	},

	handleSum: function(event){

		this.setState({sum: event.target.value});
	},

	componentWillMount: function(){

		CategoriesStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function(){

		CategoriesStore.removeChangeListener(this._onChange);
	},

	_onChange: function(){

		this.setState({categoryArr: CategoriesStore.getCategories()});
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
	            <input className="form-control" value={this.state.sum} onChange={this.handleSum} placeholder="Add amount" autoFocus={true}/> 
				      <input className="form-control" ref="title" defaultValue='' placeholder="Add title" />    
				      <input type="date" className="form-control" defaultValue='' ref='dateCreated' />       
	          	<input type="text" className="form-control" defaultValue='' ref='from' placeholder="From" />   
	          	<input type="text" className="form-control" defaultValue='' ref='to' placeholder="To" />        
	          	<input type="text" className="form-control" defaultValue='' ref='tags' placeholder="Tags" />              
	            <select className="form-control" value={this.state.category} onChange={this.handleCategory} >
	            	{categoryList.map(function(category){
	            		return (
	            			<option>{category.name} - {category.type}</option>
	            		);
	            	})}
	            	
	            </select>        
	           <textarea rows="1" className="form-control" ref="description" defaultValue='' placeholder="Add description"></textarea>
	           <button className="btn btn-danger" onClick={this.handleData}>Add</button>   
	         </div>
	        </div>
	      </div>
	    </div>
		);
	}
});

module.exports = AddItem;