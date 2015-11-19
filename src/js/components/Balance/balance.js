var React = require('react');
var SidebarBox = require('../../components/Sidebar/sidebarBox.js'),
	Header = require('../../components/Header/header.js'),
	Table = require('../Balance/Table/table.js');

var Balance = React.createClass({

	render: function(){
		return (
			<div>
				<Table/>
			</div>
		);
	}
});

module.exports = Balance;