/**
 * Created by crisanalexandra on 11/16/2015.
 */

var React = require('react'),
    FinanceStore = require('../../../stores/finances-store.js'),
    CheckBox = require('../../Common/checkBox.js'),
    InlineEdit = require('react-inline-edit');


var ExpenseRow = React.createClass({


    getInitialState: function() {
      return {
          expense: this.props.expense,
          editing: true
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

    determinateValueCredit: function() {
        var currentExpense = this.state.expense;
        if(currentExpense.amount < 0) {
            return (<td contentEditable="true">{currentExpense.amount}</td>);
        }
        else {
            return (<td contentEditable="false">-</td>);
        }
    },

    determinateValueDebit: function() {
        var currentExpense = this.state.expense;
        if(currentExpense.amount > 0) {
            return (<td contentEditable="true">{currentExpense.amount}</td>);
        }
        else {
            return (<td contentEditable="false">-</td>);
        }
    },

    onSave: function() {
        this.replaceState(this.getInitialState())
    },

    onCancel: function() {
        this.replaceState(this.getInitialState())
    },

    onChange: function(param) {
        this.setState({expense: param});
    },

    render: function() {
        var currentExpense = this.state.expense;
        {console.log(currentExpense)}
        return (

            <tr id={currentExpense.id}>
                <td contentEditable="false">{currentExpense.id}</td>
                <td contentEditable="true">{currentExpense.title}</td>
                <td contentEditable="true">{currentExpense.description}</td>

                {this.determinateValueCredit()}
                {this.determinateValueDebit()}

                <td contentEditable="true">{currentExpense.from}</td>
                <td contentEditable="true">{currentExpense.to}</td>
                <td contentEditable="true">{currentExpense.date}</td>
                <td contentEditable="true">{currentExpense.updated}</td>
                <td contentEditable="true">{currentExpense.typeid}</td>
                <td contentEditable="true">{currentExpense.tags}</td>
                <td><CheckBox /></td>
            </tr>

        );
    }
});

module.exports = ExpenseRow;