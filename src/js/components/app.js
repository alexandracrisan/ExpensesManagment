
var React = require('react');
var Router = require('react-router'),
	RouteHandler = Router.RouteHandler;



var Sidebar = require('../components/Sidebar/sidebarBox.js');

/*  App component contains the Header and the rest of the app body
    owns the LoginForm component
 */ 
var App = React.createClass({
	render: function(){
    return (
    	<div>
       <Sidebar/>
       <RouteHandler/>
       </div>
    );
  }
});



module.exports = App;
