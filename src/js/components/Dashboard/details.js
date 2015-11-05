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
    getInitialState: function() {
        return BudgetDetails();
    },

    render: function() {
        return (
            <div id="page-content-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="alert alert-success alert-labeled">
                                <div className="alert-labeled-row text-center">
                                    <h2>Income: {this.state.budget}</h2>
                                </div>
                            </div>

                            <div className="alert alert-danger alert-labeled">
                                <div className="alert-labeled-row text-center">
                                    <h2>Expenses:{this.state.expenses}</h2>
                                </div>
                            </div>

                            <div className="alert alert-warning alert-labeled">
                                <div className="alert-labeled-row text-center">
                                    <h2>Left: {this.state.left}</h2>
                                </div>
                            </div>

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
