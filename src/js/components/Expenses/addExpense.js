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
            category: '',
            date: new Date(),
            description: ''
        }
    },

    addExpense: function(e) {
        e.preventDefault();
        if(e.keyCode === 13) {
            var expenseData = {
                suma: this.refs.suma.getDOMNode().value,
                category: this.refs.category.getDOMNode().value,
                date: this.refs.date.getDOMNode().value,
                description: this.refs.description.getDOMNode().value
            };
            //ExpenseAction.addItem(expenseData);
        }
    },

    render: function() {
        return (
            <form>
                <Input type="text" ref="suma" label="Enter amount" defaultValue={this.state.suma} placeholder="Amount" />
                <Input type="select" ref="category" label="Choose category" defaultValue={this.state.category} placeholder="select">
                    <option value="select">select</option>
                    <option value="other">...</option>
                </Input>
                <Input type="text" ref="date" label="Enter data" defaultValue={this.state.date} placeholder="Data" />
                <Input type="textarea" ref="description" label="Enter description" defaultValue={this.state.description} placeholder="description" />
                <ButtonInput type="submit" value="Add Expense" onClick={this.addExpense}/>
            </form>
        );
    }
});

module.exports = AddExpense;