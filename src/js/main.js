// dummy comments
// here we'll render the component from app.js

var React = require('react');
var ReactDOM = require('react-dom');
var ajax = require('jquery');
var App = require('./components/app.js');

var LoginForm = require('./components/Login/loginForm.js'),
    Dashboard = require('./components/Dashboard/dashboard.js'),
    ViewAll = require('./components/ViewAll/viewAll.js'),
    Categories = require('./components/Categories/categories.js'),
    Calendar = require('./components/Calendar/calendar.js'),
    Balance = require('./components/Balance/balance.js'),
	Expense = require('./components/Expenses/expense.js');



var Router = require('react-router'),
    DefaultRoute = Router.DefaultRoute,
    Route = Router.Route,
    RouteHandler = Router.RouteHandler;

var routes = (
	<Route handler={App}>
		<DefaultRoute handler={LoginForm}/>
		<Route name="dashboard" path="dashboard" handler={Dashboard}></Route>
		<Route name="viewAll" path="view-all" handler={ViewAll}></Route>
		<Route name="categories" path="categories" handler={Categories}></Route>
		<Route name="calendar" path="calendar" handler={Calendar}></Route>
		<Route name="balance" path="balance" handler={Balance}></Route>
		<Route name="addCategory" path="add-category" handler={Expense}></Route>
		<Route name="income" path="income" handler={Income}></Route>

	</Route>
);

Router.run(routes, function (Handler) {
	ReactDOM.render(<Handler />, document.getElementById('expensesApp'));
});


