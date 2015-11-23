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
          editing: false,

          title: '',
          description: '',
          amount: 0,
          from: 1,
          to: 1,
          created: '',
          updated: '',
          typeid: 1,
          tags: ''
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
            return (<td><input type="text" defaultValue={currentExpense.amount} onChange={this.handleAmount}/></td>);
        }
        else {
            return (<td contentEditable="false"><input type="text" defaultValue='-'/></td>);
        }
    },

    determinateValueDebit: function() {
        var currentExpense = this.state.expense;
        if(currentExpense.amount > 0) {
            return (<td><input type="text" defaultValue={currentExpense.amount} onChange={this.handleAmount}/></td>);
        }
        else {
            return (<td contentEditable="false"><input type="text" defaultValue='-'/></td>);
        }
    },

    handleData: function(event) {
        var code = event.keyCode;
        if(code === 9 && this.state.editing){
            console.log('you presses tab');
            var finance = {
                id: this.state.expense.id,
                title: this.state.title,
                description: this.state.description,
                amount: this.state.amount,
                from: this.state.from,
                to: this.state.to,
                created: this.state.created,
                updated: this.state.updated,
                typeid: this.state.typeid,
                tags: this.state.tags
            };
            console.log(finance);
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

    handleAmount: function(event){
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

    handleCreated: function(event){
        this.setState({created: event.target.value});
        this.setState({editing: true});
    },

    handleUpdated: function(event){
        this.setState({updated: event.target.value});
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
                <td contentEditable="false">
                    {currentExpense.id}
                </td>
                <td>
                    <input type="text" defaultValue={currentExpense.title} onChange={this.handleTitle}/>
                </td>
                <td>
                    <input type="text" defaultValue={currentExpense.description} onChange={this.handleDescription}/>
                </td>

                {this.determinateValueCredit()}
                {this.determinateValueDebit()}

                <td>
                    <input type="text" defaultValue={currentExpense.from} onChange={this.handleFrom}/>
                </td>
                <td>
                    <input type="text" defaultValue={currentExpense.to} onChange={this.handleTo}/>
                </td>
                <td>
                    <input type="text" defaultValue={currentExpense.created} onChange={this.handleCreated}/>
                </td>
                <td>
                    <input type="text" defaultValue={currentExpense.updated} onChange={this.handleUpdated}/>
                </td>
                <td>
                    <input type="text" defaultValue={currentExpense.typeid} onChange={this.handleTypeid}/>
                </td>
                <td>
                    <input type="text" defaultValue={currentExpense.tags} onChange={this.handleTags} onKeyDown={this.handleData}/>
                </td>
                
                <td><CheckBox /></td>
            </tr>

        );
    }
});

module.exports = ExpenseRow;