/**
 * Created by crisanalexandra on 11/4/2015.
 */

var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var Input =  require('react-bootstrap').Input,
    ButtonInput =  require('react-bootstrap').ButtonInput;

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
        var expenseData = {
            suma: this.refs.suma.getDOMNode().value,
            category: this.refs.category.getDOMNode().value,
            date: this.refs.date.getDOMNode().value,
            description: this.refs.description.getDOMNode().value
        }
    },

    render: function() {
        return (
            <form onSubmit={this.addExpense}>
                <Input type="text" ref="suma" label="Enter amount" defaultValue={this.state.suma} placeholder="Amount" />
                <Input type="select" ref="category" label="Choose category" defaultValue={this.state.category} placeholder="select">
                    <option value="select">select</option>
                    <option value="other">...</option>
                </Input>
                <Input type="text" ref="date" label="Enter data" defaultValue={this.state.date} placeholder="Data" />
                <Input type="textarea" ref="description" label="Enter description" defaultValue={this.state.description} placeholder="description" />
                <ButtonInput type="submit" value="Add Expense"/>
            </form>
        );
    }
});

module.exports = AddExpense;