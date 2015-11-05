/**
 * Created by alinaoros on 11/4/2015.
 */
var React = require('react');
var Link = require('react-router').Link;
var Expense = require('../Expenses/expense.js');

var Header = React.createClass({
    render: function(){
        return (
            <div>
                <Link to="addCategory">Add Category</Link>
            </div>
        );
    }
});

module.exports = Header;