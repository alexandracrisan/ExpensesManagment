var React = require('react');
var IncomeActions = require('../../actions/income-actions.js');
var IncomeStore = require('../../stores/income-store.js');
var Income = require('../../components/Income/incomeItem.js');

var Bootstrap = require('react-bootstrap');
var Input = Bootstrap.Input;
var ButtonInput  = Bootstrap.ButtonInput;

var default = {
	data: {
		suma:'',
		dataTime: new Date()
	};
}
function incomesList(){
	return {incomes: IncomeStore.getAll()}
	
}

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
		var dtime = $('.dataTime').val();
		var income = {
			suma: sum,
			dataTime: dtime
		}

		IncomeActions.batchLoaded(income);

		console.log(income);
		$.ajax({
			url: "https://api.github.com/users/defunkt",
			type: 'GET',
			success: function(res) {
				console.log(res);
			}
		});
	},

	render: function(){

		var incomes = this.state.todos.map(function(item, i){
      		return (
        	<Income key={item.id} sum={item.sum} date={item.date}/>
      		);
    	}) 

		return(
			<div className="container row">
				<div className="col-md-4 col-md-offset-4">
					<form >
						<Input type="number" className="suma" label="Suma" ref="suma" defaultValue={this.state.suma} placeholder="Enter amount" />
						<Input type="text" className="dataTime" label="Data" ref="dataTime" defaultValue={this.state.dataTime} placeholder="Enter Data" />
						<ButtonInput className="btn btn-default" type="submit" value="Add income" onClick={this.addIncome} />
					</form>
				</div>
				<div>
			        <ul id="myList" className="list_wrapper">
			          {incomes.map(function (income, i){
			            return (
			                <li id="elem">
			                  {income}
			                </li>
			            );
			          })}
			        </ul> 
			     </div>
			</div>
			);
	}
});
module.exports = AddIncome;