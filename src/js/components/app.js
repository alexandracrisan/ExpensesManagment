
var React = require('react');
 
var LoginForm = require('../components/Login/loginForm.js');

/*  App component contains the Header and the rest of the app body
    owns the LoginForm component
 */ 
var App = React.createClass({
	render: function(){
    return (
      <div id="todosApp">
        <h1 id="header">Helloooovsdkjbvkaj</h1>
        <div>
        	<LoginForm />
        </div> 
      </div>
    );
  }
});

module.exports = App;


