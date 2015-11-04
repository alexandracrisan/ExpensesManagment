

var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/app.js');

var Router = require('react-router'),
    DefaultRoute = Router.DefaultRoute,
    Link = Router.Link,
    Route = Router.Route,
    RouteHandler = Router.RouteHandler;

//renders the whole app
ReactDOM.render(<App />, document.getElementById('expensesApp'));

