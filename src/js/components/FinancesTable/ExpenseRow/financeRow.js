/**
 * Created by crisanalexandra on 11/16/2015.
 */

var React = require('react'),
    FinanceStore = require('../../../stores/finances-store.js'),
    CheckBox = require('../../Common/checkBox.js'),
    InlineEdit = require('react-inline-edit'),
    FinanceAction = require('../../../actions/finances-actions.js');


var ExpenseRow = React.createClass({

    getInitialState: function() {
      return {
          expense: this.props.expense,
          editing: false,

          title: this.props.expense.title,
          description: this.props.expense.description,
          amount: this.props.expense.amount,
          from: this.props.expense.from,
          to: this.props.expense.to,
          date: this.props.expense.date,
          typeid: this.props.expense.type,
          tags: this.props.expense.tags
      }
    },

    determinateValueCredit: function() {
        var currentExpense = this.state.expense;
        if(currentExpense.amount <= 0) {
            return (<td><input type="text" className="input-component" defaultValue={currentExpense.amount * (-1)} onChange={this.handleCredit}/></td>);
        }
        else {
            return (<td><input type="text" className="input-component" readOnly defaultValue='-'/></td>);
        }
    },

    determinateValueDebit: function() {
        var currentExpense = this.state.expense;
        if(currentExpense.amount > 0) {
            return (<td><input type="text" className="input-component" defaultValue={currentExpense.amount} onChange={this.handleDebit}/></td>);
        }
        else {
            return (<td><input type="text" className="input-component" readOnly defaultValue='-'/></td>);
        }
    },

    handleData: function(event) {
        var code = event.keyCode;
        if(code === 9 && this.state.editing){
            var finance = {
                id: this.state.expense.id,
                title: this.state.title,
                description: this.state.description,
                amount: this.state.amount,
                from: this.state.from,
                to: this.state.to,
                date: this.state.date,
                type: this.state.typeid,
                tags: this.state.tags
            };
            console.log(finance);
            FinanceAction.editFinance(finance);
            alert('Row edited');
        }
    },

    handleTitle: function(event){
        this.setState({title: event.target.value});
        this.setState({editing: true});

    },

    handleDescription: function(event){
        this.setState({description: event.target.value});
        this.setState({editing: true});
    },

    handleCredit: function(event){
        this.setState({amount: event.target.value * (-1)});
        this.setState({editing: true});
    },

    handleDebit: function(event){
        this.setState({amount: event.target.value});
        this.setState({editing: true});
    },

    handleFrom: function(event){
        this.setState({from: event.target.value});
        this.setState({editing: true});
    },

    handleTo: function(event){
        this.setState({to: event.target.value});
        this.setState({editing: true});
    },

    handleDate: function(event){
        this.setState({date: event.target.value});
        this.setState({editing: true});
    },

    handleTypeid: function(event){
        this.setState({typeid: event.target.value});
        this.setState({editing: true});
    },


    handleTags: function(event) {
        this.setState({tags: event.target.value});
        this.setState({editing: true});
    },

    render: function() {
        var currentExpense = this.state.expense;
        return (
            <tr>
                <td>
                    <input type="text" className="input-id" readOnly defaultValue={currentExpense.id}/>
                </td>
                <td>
                    <input type="text" className="input-component" defaultValue={currentExpense.title} onChange={this.handleTitle}/>
                </td>
                <td>
                    <input type="text" className="input-component" defaultValue={currentExpense.description} onChange={this.handleDescription}/>
                </td>

                {this.determinateValueCredit()}
                {this.determinateValueDebit()}

                <td>
                    <input type="text" className="input-component" defaultValue={currentExpense.from} onChange={this.handleFrom}/>
                </td>
                <td>
                    <input type="text" className="input-component" defaultValue={currentExpense.to} onChange={this.handleTo}/>
                </td>
                <td>
                    <input type="text" className="input-date" defaultValue={currentExpense.date} onChange={this.handleDate}/>
                </td>
                <td>
                    <input type="number" className="input-component" defaultValue={currentExpense.type} onChange={this.handleTypeid}/>
                </td>
                <td>
                    <input type="text" className="input-component" defaultValue={currentExpense.tags} onChange={this.handleTags} onKeyDown={this.handleData}/>
                </td>
                
                <td><CheckBox currentId={currentExpense.id}/></td>
            </tr>

        );
    }
});

module.exports = ExpenseRow;