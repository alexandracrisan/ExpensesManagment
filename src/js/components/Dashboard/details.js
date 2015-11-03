/**
 * Created by alinaoros on 11/3/2015.
 */
var React = require('react');

console.log('details.js');

var BudgetDetails = React.createClass({
    render: function() {
        return (
            <div>
                <p> Hello World!!! </p>
            </div>
        )
    }

})

React.render(<BudgetDetails></BudgetDetails>, document.body);