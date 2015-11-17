/**
 * Created by crisanalexandra on 11/16/2015.
 */

var React = require('react'),
    FinanceStore = require('../../../stores/finances-store.js'),
    CheckBox = require('../../Common/checkBox.js');


var ExpenseRow = React.createClass({
    
    getInitialState: function() {
      return {
          expense: this.props.expense
      }
    },

    //componentWillMount: function(){
    //    FinanceStore.addChangeListener(this._onChange)
    //},
    //
    //componentWillUnmount: function(){
    //    FinanceStore.removeChangeListener(this._onChange);
    //},

    //_onChange: function(){
    //    this.setState(this.getExpenseList());
    //},

    render: function() {
        var currentExpense = this.state.expense;
        console.log(currentExpense);
        return (
            <tr>
                <td contentEditable="false">{currentExpense.nr}</td>
                <td contentEditable="true">{currentExpense.date}</td>
                <td contentEditable="true">{currentExpense.description}</td>
                <td contentEditable="true">{currentExpense.category}</td>
                <td contentEditable="true">{currentExpense.debit}</td>
                <td contentEditable="true">{currentExpense.credit}</td>
                <td><CheckBox /></td>
            </tr>
        );
    }
});

module.exports = ExpenseRow;