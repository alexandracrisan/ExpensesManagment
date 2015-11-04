var React = require('react');
var Link = require('react-router').Link;

var SidebarBox = React.createClass({

	render: function(){
		return (
			<div>
			<Link to="viewAll">View All</Link>
			
			</div>
		);
	}
});

module.exports = SidebarBox;