/**
 * Created by crisanalexandra on 11/4/2015.
 */

var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var ExpenseAction = require('../../actions/expenses-actions.js');

var Input =  ReactBootstrap.Input,
    ButtonInput =  ReactBootstrap.ButtonInput;

var AddExpense = React.createClass({

    getInitialState: function() {
        return {
            suma: 0,
            //categories: this.props.categories,
            date: '2015-02-01',
            description: ''
        }
    },

    addExpense: function(e) {
        e.preventDefault();
        var expenseData = {
            suma: this.refs.suma.value,
            //category: this.refs.category.value,
            date: this.refs.date.value,
            description: this.refs.description.value
            };
        console.log(expenseData);
        ExpenseAction.addItem(expenseData);
    },

    handleChange: function(e) {
        return e.target.value;
    },

    render: function() {
        return (
            <form onSubmit={this.addExpense}>
                <input type="text" ref="suma" label="Enter amount" defaultValue={this.state.suma} placeholder="Amount" />
                <input type="date" ref="date" label="Enter data" defaultValue={this.state.date} placeholder="Data" />
                <input type="textarea" ref="description" label="Enter description" defaultValue={this.state.description} placeholder="description" />
                <button type="submit" onClick={this.addExpense}>Add Expense</button>
            </form>

        );
    }
});

module.exports = AddExpense;