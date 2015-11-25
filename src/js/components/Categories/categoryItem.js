/**
 * Created by alinaoros on 11/4/2015.
 */

var React = require('react');
var CheckBox = require('../Common/checkBox.js');
var CategoryStore = require('../../stores/category-store.js');


var CategoryList = React.createClass({

 	getInitialState: function() {
 		
 		return {
 			categories: this.props.category,
 			editing: false,

 			title: this.props.category.title,
 			type: this.props.category.type
 		}

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
	 			category: this.state.title,
	 			type:     this.state.type
 			}

 		}
 		
 		console.log(data);

 	},

 	determinateType: function() {

 		if(this.state.type === 0) {
 			return (
 				<select className="form-control" value={this.state.type} onChange={this.handleType} onKeyDown={this.handleData}>
			      <option>Expense</option>
			      <option>Income</option>
			      <option>Both</option>
			   </select>
			)
 		}
 		else if(this.state.type === 1) {
 			return (
 				<select className="form-control" value={this.state.type} onChange={this.handleType} onKeyDown={this.handleData}>
 				    <option>Income</option>
			      <option>Expense</option>
			      <option>Both</option>
			  </select>
			);
 		}
 		else {
 			return (
 				<select className="form-control" value={this.state.type} onChange={this.handleType} onKeyDown={this.handleData}>
 				    <option>Both</option>
 				    <option>Income</option>
			      <option>Expense</option>
			  </select>
			);
 		}
 		
 	},

 	render: function() {

 		return (
				<div className="form-inline">
					<CheckBox />
					<input className="form-control" type="text" defaultValue = {this.state.title} onChange={this.handleCategory}/>
          {this.determinateType()}            
				</div>
		)
 	}
 		
 });

 module.exports = CategoryList;

 