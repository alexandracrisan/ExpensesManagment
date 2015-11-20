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
 			type: 'aa'
 		}
 	},
 	handleData: function() {
 		var data = {
 			category: this.refs.category.getDOMNode().value,
 			type:     this.refs.type.getDOMNode().value
 		}
 		console.log("d");
 	},
 	editDates: function() {

 	},

 	render: function() {
 		return (<div>
 					{this.state.categories.map(function(category) {
 						return(
 							<div className="form-inline" key={category.nr}>
 								<CheckBox />
 								<input className="form-control" type="text" refs="category" defaultValue = {category.category}/>
 								<input className="form-control" type="text" refs="type" defaultValue={category.type} onBlur={this.handleData}/>
 							</div>)
 					})}
 		       </div>)
 	}

 });

 module.exports = CategoryList;

 