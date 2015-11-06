/**
 * Created by crisanalexandra on 11/4/2015.
 */

var React = require('react'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler;

var AddExpense = require('../Expenses/addExpense.js'),
    SidebarBox = require('../../components/Sidebar/sidebarBox.js'),
    Header = require('../../components/Header/header.js');

var Expense = React.createClass({

    render: function() {
        return (
            <div>
                <Header />
                <div className="row">
                    <SidebarBox />
                    <AddExpense />
                </div>
            </div>
        );
    }
});

module.exports = Expense;