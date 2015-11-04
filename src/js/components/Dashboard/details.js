/**
 * Created by alinaoros on 11/3/2015.
 */
var React = require('react');

console.log('details.js');

var BudgetDetails = React.createClass({
    render: function() {
        return (
            <div>
                <label>Income: </label>
                <label> 2000 </label>
                <br/>
                <label>Expenses: </label>
                <label> 300 </label>
                <br/>
                <label>Left: </label>
                <label> 700 </label>

            </div>
        )
    }

});

module.exports = BudgetDetails;