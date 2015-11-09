/**
 * Created by crisanalexandra on 11/4/2015.
 */

var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var ExpenseAction = require('../../actions/expenses-actions.js');
var ExpenseStore = require('../../stores/expense-store.js');
var Income = require('../../components/Income/incomeItem.js');

var Input =  ReactBootstrap.Input,
    ButtonInput =  ReactBootstrap.ButtonInput;

function getExpenseList() {
      return {
          expenses: ExpenseStore.getMockData(),
          suma: 0,
            //categories: this.props.categories,
          date: '2015-02-01',
          description: ''
      }
}

var AddExpense = React.createClass({

    getInitialState: function() {
        return {
            expenses: ExpenseStore.getMockData(),
            suma: 0,
            //categories: this.props.categories,
            date: '2015-02-01',
            description: ''
        }
    },

    getExpenseList: function() {
        return {expenses: ExpenseStore.getMockData()};
    },

    componentWillMount: function(){ //will be called one time (every time we make a change in the browser to our list - the render method will be called and this function will NOT be called again and again)
        ExpenseStore.addChangeListener(this._onChange)
    },

    componentWillUnmount: function(){
        ExpenseStore.removeChangeListener(this._onChange);
    },

    _onChange: function(){
        this.setState(this.getExpenseList());
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
        var expenseList = this.state.expenses.map(function(item, i){
            return (
            <Income key={item.id} sum={item.sum} date={item.date}/>
            );
        });
        return (
            <div id="page-content-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-lg-offset-2 centered">
                            <form onSubmit={this.addExpense}>
                                <label htmlFor="suma">Enter Amount</label>
                                <input type="text" ref="suma" className="form-control" defaultValue={this.state.suma} id="suma" placeholder="Amount" />
                                <label htmlFor="date">Enter Date</label>
                                <input type="date" ref="date" className="form-control" defaultValue={this.state.date} id="date" placeholder="Data" />
                                <label htmlFor="description">Enter Description</label>
                                <textarea ref="description" rows="4" className="form-control" label="Enter description" defaultValue={this.state.description} id="description" placeholder="description"></textarea>
                                <button type="submit" className="btn btn-primary col-lg-3" onClick={this.addExpense}>Add Expense</button>
                            </form>

                            <ul id="myList" className="list_wrapper">
                                {expenseList.map(function (income, i){
                                return (
                                    <li id="elem">
                                        {income}
                                    </li>
                                    );
                                })}
                            </ul> 
                        </div>
                    </div>
                </div>
            </div>

        );
    }
});

module.exports = AddExpense;