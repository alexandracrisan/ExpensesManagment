/**
 * Created by alinaoros on 11/4/2015.
 */
var React = require('react');
var Link = require('react-router').Link;

var Header = React.createClass({
    render: function(){
        return (
            <div>
                <Link to="addCategory">Add Category</Link>
                <Link to="addIncome">Add Income</Link>
                <Link to="addExpenses">Add Expenses</Link>
            </div>
        );
    }
});

module.exports = Header;