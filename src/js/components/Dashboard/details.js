/**
 * Created by alinaoros on 11/3/2015.
 */
var DashboardStore = require('../../stores/dashboard-store.js');

var React = require('react');
//
//function BudgetDetails() {
//    return {
        //budget: DashboardStore.getCurrentMonthBudget(),
        //expenses: DashboardStore.getCurrentMonthExpenses(),
        //left: DashboardStore.getCurrentMonthLeftBudget()
//    }
//}




//var BudgetDetailsBoard = React.createClass({
//    getInitialState: function() {
//        return BudgetDetails();
//    },
//    componentWillMount: function() {

//        //DashboardStore.addChangeListener(this._onChange());
//    },
//    componentWillUnmount: function() {
//        //DashboardStore.removeChangeListener()(this._onChange());
//    },
//    _onChange: function() {
//        //this.setState(BudgetDetails());
//    },
//    render: function() {
        //return (
        //    <div>
        //        <label>Income: </label>
        //        <label>{this.state.budget}</label>
        //        <br/>
        //        <label>Expenses: </label>
        //        <label>{this.state.expenses}</label>
        //        <br/>
        //        <label>Left: </label>
        //        <label>{this.state.left}</label>
        //
        //    </div>
        //)

//    }
//
//});


//module.exports = BudgetDetailsBoard;

var BudgetDetailsBoard = React.createClass({

    render: function() {
        return (
            <div id="page-content-wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <label>Income: </label>
                        <label>300</label>
                        <br/>
                        <label>Expenses: </label>
                        <label>30</label>
                        <br/>
                        <label>Left: </label>
                        <label>40</label>
                    </div>
                </div>
            </div>
        </div>
        );
    }

});

module.exports = BudgetDetailsBoard;