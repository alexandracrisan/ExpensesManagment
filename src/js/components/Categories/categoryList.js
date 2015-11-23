/**
 * Created by alinaoros on 11/4/2015.
 */

 var React = require('react');
 var CheckBox = require('../Common/checkBox.js');
 var CategoryStore = require('../../stores/category-store.js');


 var CategoryList = React.createClass({

 	getInitialState: function() {
 		return {
 			categories: CategoryStore.getCategories(),
 			editing: false,

 			category: '',
 			type: ''
 		}
 	},

	componentWillMount: function(){
		CategoryStore.addChangeListener(this._onChange)
	},

	componentWillUnmount: function(){
		CategoryStore.removeChangeListener(this._onChange);
	},

	_onChange: function(){
		this.setState({categories: CategoryStore.getCategories()});
	},

 	handleCategory: function(event) {
 		this.setState({category: event.target.value});
 		this.setState({editing: true});
 	},

 	handleType: function(event) {
 		this.setState({type: event.target.value});
 		this.setState({editing: true});
 	},

 	handleData: function(event) {
 		var code = event.keyCode;
 		if(code === 9 && this.state.editing) {
 			console.log('you presses tab');
 			var data = {
 			category: this.state.category,
 			type:     this.state.type
 			}
 			console.log(data);
 		}
 		
 		console.log(data);
 	},

 	editDates: function() {

 	},

 	render: function() {
 		return (<div>
 					{this.state.categories.map(function(category) {
 						return(
 							<div className="form-inline" key={category.nr}>
 								<CheckBox />
 								<input className="form-control" type="text" defaultValue = {category.category} onChange={this.handleCategory}/>
 								<input className="form-control" type="text" defaultValue={category.type} onChange={this.handleType} onKeyDown={this.handleData}/>
 							</div>)
 					})}
 		       </div>)
 	}

 });

 module.exports = CategoryList;

 