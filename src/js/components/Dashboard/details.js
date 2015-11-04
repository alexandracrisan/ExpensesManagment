/**
 * Created by alinaoros on 11/3/2015.
 */
var DashboardStore = require('../stores/dashboard-store.js');

var React = require('react');
console.log('details.js');

function BudgetDetails() {
    return {
        budget: DashboardStore.getCurrentMonthBudget(),
        expenses: DashboardStore.getCurrentMonthExpenses(),
        left: DashboardStore.getCurrentMonthLeftBudget()
    }
}

var BudgetDetailsBoard = React.createClass({
    getInitialState: function() {
        return BudgetDetails();
    },
    componentWillMount: function() {
        DashboardStore.addChangeListener(this._onChange());  // imi trebuie si in store
    },
    componentWillUnmount: function() {
        DashboardStore.removeChangeListener()(this._onChange());  //imi trebui si in store
    },
    _onChange: function() {
        this.setState(BudgetDetails());
    },
    render: function() {
        return (
            <div>
                <label>Income: </label>
                <label>{this.state.budget}</label>
                <br/>
                <label>Expenses: </label>
                <label>{this.state.expenses}</label>
                <br/>
                <label>Left: </label>
                <label>{this.state.left}</label>

            </div>
        )
    }

});

module.exports = BudgetDetailsBoard;