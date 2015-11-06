var React = require('react');
var Link = require('react-router').Link;

var SidebarBox = React.createClass({

	render: function(){
		return (
			
			<div id="sidebar-wrapper">
	            <ul className="sidebar-nav">
	                <li className="sidebar-brand">
	                    <a href="#">
	                        Expenses Manager
	                    </a>
	                </li>
	                <li>
	                   <Link to="viewAll">View All</Link>
	                </li>
	                <li>
	                    <Link to="categories">Categories</Link>
	                </li>
	                <li>
	                   <Link to="calendar">Calendar</Link>
	                </li>
	                <li>
	                    <Link to="balance">Balance</Link>
	                </li>
	                <li>
	                    <Link to="income">Add Income</Link>
	                </li>
	            </ul>
        	</div>	
		);
	}
});

module.exports = SidebarBox;


    