/**
 * Created by alinaoros on 11/3/2015.
 */
var Header = require('../../components/Header/header.js');
    FinancesTable = require('../../components/FinancesTable/FinancesTable.js');

var React = require('react');


var Dashboard = React.createClass({
   render: function() {
       return (
           <div>
             <Header />
             <div>
                 <FinancesTable/>
             </div>
           </div>
       );
   }
});

module.exports = Dashboard;
