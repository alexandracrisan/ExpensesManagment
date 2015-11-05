/**
 * Created by alinaoros on 11/3/2015.
 */
var DashboardStore = require('../../stores/dashboard-store.js');
var Actions = require("../../actions/dashboard-actions.js");

var React = require('react');

function BudgetDetails() {
    return {
        budget: DashboardStore.getCurrentMonthBudget(),
        expenses: DashboardStore.getCurrentMonthExpenses(),
        left: DashboardStore.getCurrentMonthLeftBudget()
    }
}

var BudgetDetailsBoard = React.createClass({
    handleSubmit: function(e){
        e.preventDefault();

        Actions.GET_CURRENT_MONTH_BUDGET();

    },
    getInitialState: function() {
        return BudgetDetails();
    },

    render: function() {
        return (
            <div id="page-content-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <label>Income: </label>
                            <label>{this.state.budget}</label>
                            <br/>
                            <label>Expenses: </label>
                            <label>{this.state.expenses}</label>
                            <br/>
                            <label>Left: </label>
                            <label>{this.state.left}</label>
                            <button onSubmit={this.handleSubmit}>A </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

});

//componentWillMount: function() {
//    DashboardStore.addChangeListener(this._onChange());
//},
//componentWillUnmount: function() {
//    DashboardStore.removeChangeListener(this._onChange());
//},
//_onChange: function() {
//    this.setState(BudgetDetails());
//},

module.exports = BudgetDetailsBoard;
