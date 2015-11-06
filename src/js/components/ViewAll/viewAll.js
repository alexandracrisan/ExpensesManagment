var React = require('react');
var SidebarBox = require('../../components/Sidebar/sidebarBox.js'),
	Header = require('../../components/Header/header.js');
// var ExpenseActions = require('../actions/expense-actions.js');
// var ModifyBtn = require('../components/ViewAll/modifyBtn.js');
// var ExpenseItem = require('../components/ViewAll/expenseItem.js');


var ViewAll = React.createClass({

	render: function(){
		return (
			<div>
				<Header />	
				<div className="row">
					<SidebarBox />
					<div id="page-content-wrapper">
		            	<div className="container-fluid">
		                	<div className="row">
		                    	<div className="col-lg-12">
									<p>View All</p>		
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = ViewAll;