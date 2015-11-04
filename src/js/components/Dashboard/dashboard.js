/**
 * Created by alinaoros on 11/3/2015.
 */
var BudgetDetails = require('./details.js'),
    SidebarBox = require('../../components/Sidebar/sidebarBox.js'),
    Header = require('../../components/Header/header.js');

var React = require('react'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler;


var Dashboard = React.createClass({
   render: function() {
       return (
         <div>
             <SidebarBox />

             <BudgetDetails />
         </div>
       );
   }
});

module.exports = Dashboard;
//<BudgetDetails />
// <Header />