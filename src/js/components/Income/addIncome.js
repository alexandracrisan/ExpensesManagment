var React = require('react'),
	SidebarBox = require('../../components/Sidebar/sidebarBox.js'),
	Header = require('../../components/Header/header.js'),
	IncomeActions = require('../../actions/income-actions.js'),
	IncomeStore = require('../../stores/income-store.js'),

	Bootstrap = require('react-bootstrap'),
	Input = Bootstrap.Input,
	ButtonInput  = Bootstrap.ButtonInput;


function incomesList(){
	return {
		incomes: IncomeStore.getAll(),
		sum: '',
		date: 'yyyy/mm/dd'
	}
	
};

var AddIncome = React.createClass({
	getInitialState: function(){
		return incomesList();
	},

	componentWillMount: function(){ //will be called one time (every time we make a change in the browser to our list - the render method will be called and this function will NOT be called again and again)
    	IncomeStore.addChangeListener(this._onChange)
  	},

  	componentWillUnmount: function(){
    	IncomeStore.removeChangeListener(this._onChange);
  	},

  	_onChange: function(){
    	this.setState(incomesList());
  	},


	addIncome: function(e){
		e.preventDefault();
		var sum = $('.suma').val();
		var date = $('.dataTime').val();
		var income = {
			sum: sum,
			date: date
		}

		IncomeActions.batchLoaded(income);

	},

	render: function(){
		return(
			<div>
				<Header />			
				<div className="row">
					<SidebarBox />
					<div className="container row">
						<div className="col-md-4 col-md-offset-4">
							<form >
								<Input type="number" className="suma" label="Suma" ref="suma" defaultValue={this.state.suma} placeholder="Enter amount" />
								<Input type="date" className="dataTime" label="Data" ref="dataTime" defaultValue={this.state.dataTime} placeholder="Enter Data" />
								<ButtonInput className="btn btn-primary" type="submit" value="Add income" onClick={this.addIncome} />
							</form>
						</div>
					</div>
				</div>
			</div>
			);
	}
});
module.exports = AddIncome;