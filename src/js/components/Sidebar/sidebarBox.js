var React = require('react');
var Link = require('react-router').Link;

var SidebarBox = React.createClass({

	render: function(){
		return (
			<div>
				<Link to="viewAll">View All</Link>
				<Link to="categories">Categories</Link>
				<Link to="calendar">Calendar</Link>
				<Link to="balance">Balance</Link>
			</div>
		);
	}
});

module.exports = SidebarBox;