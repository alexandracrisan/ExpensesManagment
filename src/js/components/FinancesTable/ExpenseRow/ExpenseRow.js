/**
 * Created by crisanalexandra on 11/16/2015.
 */

var React = require('react'),
    FinanceStore = require('../../../stores/finances-store.js'),
    CheckBox = require('../../Common/checkBox.js');


var ExpenseRow = React.createClass({


    getInitialState: function() {
      return {
          expense: {
              nr: 2,
              date: '12/12/1010',
              description: 'ceds',
              category: 'food',
              debit: 300,
              credit: 100
          }
              //this.props.expense
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
            <table>
                <tbody>
            <tr>
                <td contentEditable="true">{currentExpense.nr}</td>
                <td contentEditable="true">{currentExpense.date}</td>
                <td contentEditable="true">{currentExpense.description}</td>
                <td contentEditable="true">{currentExpense.category}</td>
                <td contentEditable="false">{this.props.mihai}</td>
                <td contentEditable="true">{currentExpense.credit}</td>
                <td><CheckBox /></td>
            </tr>
            </tbody>
            </table>
        );
    }
});

module.exports = ExpenseRow;