/**
 * Created by alinaoros on 11/3/2015.
 */
var BudgetDetails = require('./details.js');

var React = require('react');

var Dashboard = React.createClass({
   render: function() {
       return (
         <div>
             <p>div 1</p>
             <BudgetDetails />
             <p>div 2</p>
         </div>
       );
   }
});

module.exports = Dashboard;