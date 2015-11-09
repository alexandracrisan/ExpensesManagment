var React = require('react');

var ExpensesActions = require('../../actions/expenses-actions.js');
var ExpensesStore = require('../../stores/expense-store.js');
var Expenses = require('../../components/Income/incomeItem.js');


function expensesList(){
	return {expenses: ExpensesStore.getMockData()}
	
};

var ExpenseList = React.createClass({
	getInitialState: function(){
		return expensesList();
	},

	componentWillMount: function(){ //will be called one time (every time we make a change in the browser to our list - the render method will be called and this function will NOT be called again and again)
    	ExpensesStore.addChangeListener(this._onChange)
  	},

  	componentWillUnmount: function(){
    	ExpensesStore.removeChangeListener(this._onChange);
  	},

  	_onChange: function(){
    	this.setState(expensesList());
  	},
  	render: function(){

		var expensesList = this.state.expenses.map(function(item, i){
      		return (
        	<Expenses key={item.id} sum={item.sum} date={item.date}/>
      		);
    	}) 

		return(
			<div className="container row">
				<div className="col-md-4 col-md-offset-4">
					<p>Expenses</p>
					<ul id="myList" className="list_wrapper">
			          {expensesList.map(function (income, i){
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
module.exports = ExpenseList;



// var React = require('react');

// var ExpensesList = React.createClass({

// 	render: function(){
// 		var list = this.state.expenseList.map(function(expense))
// 		return (
// 			<div>
// 				<ul>
// 					{list.map(function(item){
// 						return (
// 							<li>
// 								{item}
// 							</li>
// 						);
// 					})}
// 				</ul>
// 			</div>
// 		);
// 	}
// });

// module.exports = ExpensesList;