/**
 * Created by alinaoros on 11/4/2015.
 */
var React = require('react');
var Link = require('react-router').Link;
var Expense = require('../Expenses/expense.js');

var Header = React.createClass({
    render: function(){
        return (
            <div className="header-component ">
				<ul className="nav nav-pills right ">
				  <li role="presentation" ><Link to="income">Add Income</Link></li>
				  <li role="presentation"><Link to="income">Add Income</Link></li>
				  <li role="presentation"> <Link to="income">Add Income</Link></li>
				</ul>
            </div>
        );
    }
});

module.exports = Header;


