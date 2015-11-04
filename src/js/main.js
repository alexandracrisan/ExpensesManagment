

var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/app.js');

var ViewAll = require('./components/ViewAll/viewAll.js');
var LoginForm = require('./components/Login/loginForm.js');
var Dashboard = require('./components/Dashboard/dashboard.js');

var Router = require('react-router'),
    DefaultRoute = Router.DefaultRoute,
    Route = Router.Route,
    RouteHandler = Router.RouteHandler;

var routes = (
	<Route handler={App}>
		<DefaultRoute handler={LoginForm}/>
		<Route name="dashboard" path="dashboard" handler={Dashboard}></Route>
		<Route name="viewAll" path="view-all" handler={ViewAll}></Route>
	</Route>
);

Router.run(routes, function (Handler) {
	ReactDOM.render(<Handler />, document.getElementById('expensesApp'));
});







