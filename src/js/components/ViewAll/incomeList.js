var React = require('react');

var IncomeActions = require('../../actions/income-actions.js');
var IncomeStore = require('../../stores/income-store.js');
var Income = require('../../components/Income/incomeItem.js');

function incomesList(){
	return {incomes: IncomeStore.getAll()}
	
};

var IncomeList = React.createClass({
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
  	render: function(){

		var incomeList = this.state.incomes.map(function(item, i){
      		return (
        	<Income key={item.id} sum={item.sum} date={item.date}/>
      		);
    	}) 

		return(
			<div className="container row">
				<div className="col-md-4 col-md-offset-4">
					<ul id="myList" className="list_wrapper">
			          {incomeList.map(function (income, i){
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
module.exports = IncomeList;