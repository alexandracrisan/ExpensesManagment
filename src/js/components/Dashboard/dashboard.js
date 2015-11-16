/**
 * Created by alinaoros on 11/3/2015.
 */
var React = require('react'),
    Header = require('../../components/Header/header.js'),
    SidebarBox = require('../../components/Sidebar/SidebarBox.js'),
    FinancesTable = require('../../components/FinancesTable/FinancesTable.js');



var Dashboard = React.createClass({
   render: function() {
       return (
           <div>
             <Header />
             <div>
                <SidebarBox/>
                <FinancesTable/>
             </div>
           </div>
       );
   }
});

module.exports = Dashboard;
