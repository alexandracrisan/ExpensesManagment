var React = require('react'),
	SidebarBox = require('../../components/Sidebar/sidebarBox.js'),
	Header = require('../../components/Header/header.js'),
	IncomeList = require('../../components/ViewAll/incomeList.js'),
	ExpenseList = require('../../components/ViewAll/expensesList.js'),
	ExpenseRow = require('../FinancesTable/ExpenseRow/expenseRow.js');


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
									<IncomeList/>
									<ExpenseList/>
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