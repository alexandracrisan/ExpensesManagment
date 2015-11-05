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
            <div id="page-content-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-lg-offset-2 centered">
                            <form onSubmit={this.addExpense}>
                                <label htmlFor="suma">Enter Amount</label>
                                <input type="text" ref="suma" label="Enter amount" className="form-control" defaultValue={this.state.suma} id="suma" placeholder="Amount" />
                                <label htmlFor="date">Enter Date</label>
                                <input type="date" ref="date" label="Enter data" className="form-control" defaultValue={this.state.date} id="date" placeholder="Data" />
                                <label htmlFor="description">Enter Description</label>
                                <input type="textarea" ref="description" className="form-control" label="Enter description" defaultValue={this.state.description} id="description" placeholder="description" />
                                <button type="submit" className="btn btn-primary col-lg-3" onClick={this.addExpense}>Add Expense</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
});

module.exports = AddExpense;