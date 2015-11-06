/**
 * Created by alinaoros on 11/3/2015.
 */
var BudgetDetails = require('./details.js'),
    SidebarBox = require('../../components/Sidebar/sidebarBox.js'),
    Header = require('../../components/Header/header.js');

var React = require('react');


var Dashboard = React.createClass({
   render: function() {
       return (
           <div>
             <Header />
             <div>
                 <SidebarBox />
                 <BudgetDetails />
             </div>
           </div>
       );
   }
});

module.exports = Dashboard;
