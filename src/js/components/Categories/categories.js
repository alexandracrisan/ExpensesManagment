var React = require('react');
var SidebarBox = require('../../components/Sidebar/sidebarBox.js'),
	Header = require('../../components/Header/header.js');
	//CategoryPop = require('../../components/Popup/addCategory.js');

var Categories = React.createClass({

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
									<button>Categories</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Categories;