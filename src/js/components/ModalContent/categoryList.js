/**
 * Created by alinaoros on 11/4/2015.
 */

 var React = require('react');
 var CheckBox = require('../Common/checkBox.js');
 var CategoryStore = require('../../stores/category-store.js');


 var CategoryList = React.createClass({

 	getCategories: function() {
 		return {
 			categories: CategoryStore.getCategories()
 		}
 	},

 	render: function() {
 		return (<div>
 			<ul>
 				<li>
 					<CheckBox />
 					{this.getCategories().map(function(category) {
 						return(<input type='text' value = {category.category} />)
 					})}
 				</li>
 			</ul>
 		</div>)
 	}

 });

 module.exports = CategoryList;