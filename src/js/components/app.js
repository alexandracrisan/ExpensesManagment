//here will reside the main component that will include all others

var React = require('react');

 
//var LoginForm = require('../components/LoginForm/loginForm.js');
//var Dashboard = require('../components/Dashboard/dashboard.js');
var LoginForm = require('../components/Login/loginForm.js');
var Router = require('react-router'),
	RouteHandler = Router.RouteHandler;

/*  App component contains the Header and the rest of the app body
    owns the LoginForm component
 */ 
var App = React.createClass({
	render: function(){
    return (
    	<div>
       		<RouteHandler/>
       </div>
    );
  }
});



module.exports = App;
