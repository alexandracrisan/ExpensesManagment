
var React = require('react');
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
