/**
 * Created by alinaoros on 11/3/2015.
 */
var BudgetDetails = require('./details.js'),
    SidebarBox = require('../../components/Sidebar/sidebarBox.js');

var React = require('react'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler;


var Dashboard = React.createClass({
   render: function() {
       return (
         <div>
             <SidebarBox/>
             <BudgetDetails />
             <p>div 2</p>
         </div>
       );
   }
});

module.exports = Dashboard;


//var React = require('react');
//var Router = require('react-router'),
//	RouteHandler = Router.RouteHandler;
//
//var SidebarBox = require('../../components/Sidebar/sidebarBox.js');
//
///*  App component contains the Header and the rest of the app body
//    owns the LoginForm component
// */
//var Dashboard = React.createClass({
//	render: function(){
//    return (
//    	<div>
//        <SidebarBox/>
//      </div>
//    );
//  }
//});
//
//module.exports = Dashboard;

