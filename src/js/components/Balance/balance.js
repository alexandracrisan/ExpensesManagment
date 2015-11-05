var React = require('react');
var SidebarBox = require('../../components/Sidebar/sidebarBox.js');

var Balance = React.createClass({

	render: function(){
		return (
			<div>
				<SidebarBox />
				<div id="page-content-wrapper">
	            	<div className="container-fluid">
	                	<div className="row">
	                    	<div className="col-lg-12">
								<p>Balances</p>		
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Balance;