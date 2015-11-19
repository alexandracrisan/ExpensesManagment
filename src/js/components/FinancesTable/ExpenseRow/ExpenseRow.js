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

    determinateValueDebit: function() {
        var currentExpense = this.state.expense;
        if(currentExpense.debit === '-') {
            return (<td contentEditable="false">{currentExpense.debit}</td>);
        }
        else {
            return (<td contentEditable="true">{currentExpense.debit}</td>);
        }
    },

    determinateValueCredit: function() {
        var currentExpense = this.state.expense;
        if(currentExpense.credit === '-') {
            return (<td contentEditable="false">{currentExpense.credit}</td>);
        }
        else {
            return (<td contentEditable="true">{currentExpense.credit}</td>);
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

            <tr>
                <td contentEditable="false">{currentExpense.id}
                    <InlineEdit

                        onChange={this.onChange}
                        onEnterKey={this.onSave}
                        onEscapeKey={this.onCancel}
                        id={currentExpense.id}
                        maxLength={200}
                        editing={false}
                    />
                </td>
                <td contentEditable="true">{currentExpense.title}
                    <InlineEdit

                        onChange={this.onChange}
                        onEnterKey={this.onSave}
                        onEscapeKey={this.onCancel}
                        title={currentExpense.title}
                        maxLength={200}
                        editing={this.state.editing}
                        />
                </td>
                <td contentEditable="true">{currentExpense.description}
                    <InlineEdit
                        onChange={this.onChange}
                        onEnterKey={this.onSave}
                        onEscapeKey={this.onCancel}
                        description={currentExpense.description}
                        maxLength={500}
                        editing={this.state.editing}
                        />
                </td>
                <td contentEditable="true">{currentExpense.from}
                    <InlineEdit

                        onChange={this.onChange}
                        onEnterKey={this.onSave}
                        onEscapeKey={this.onCancel}
                        from={currentExpense.from}
                        maxLength={200}
                        editing={this.state.editing}
                        />
                </td>
                <td contentEditable="true">{currentExpense.to}
                    <InlineEdit

                        onChange={this.onChange}
                        onEnterKey={this.onSave}
                        onEscapeKey={this.onCancel}
                        to={currentExpense.to}
                        maxLength={200}
                        editing={this.state.editing}
                        />
                </td>
                <td contentEditable="true">{currentExpense.amount}
                    <InlineEdit

                        onChange={this.onChange}
                        onEnterKey={this.onSave}
                        onEscapeKey={this.onCancel}
                        amount={currentExpense.amount}
                        maxLength={200}
                        editing={this.state.editing}
                        />
                </td>
                <td contentEditable="true">{currentExpense.typeid}
                    <InlineEdit

                        onChange={this.onChange}
                        onEnterKey={this.onSave}
                        onEscapeKey={this.onCancel}
                        typeid={currentExpense.typeid}
                        maxLength={200}
                        editing={this.state.editing}
                        />
                </td>
                <td contentEditable="true">{currentExpense.tags}
                    <InlineEdit

                        onChange={this.onChange}
                        onEnterKey={this.onSave}
                        onEscapeKey={this.onCancel}
                        tags={currentExpense.tags}
                        maxLength={200}
                        editing={this.state.editing}
                        />
                </td>
                {this.determinateValueDebit()}
                {this.determinateValueCredit()}
                <td><CheckBox /></td>
            </tr>

        );
    }
});

module.exports = ExpenseRow;