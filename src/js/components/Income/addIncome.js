var React = require('react');

var Bootstrap = require('react-bootstrap');
var Input = Bootstrap.Input;
var ButtonInput  = Bootstrap.ButtonInput;

var AddIncome = React.createClass({
	getInitialState: function(){
		return{
			suma:'',
			dataTime: new Date()
		}
	},

	addIncome: function(e){
		e.preventDefault();
		var sum = $('.suma').val();
		var dtime = $('.dataTime').val();
		var income = {
			suma: sum,
			dataTime: dtime
		}
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
		return(
			<div className="container row">
				<div className="col-md-4 col-md-offset-4">
					<form >
						<Input type="number" className="suma" label="Suma" ref="suma" defaultValue={this.state.suma} placeholder="Enter amount" />
						<Input type="text" className="dataTime" label="Data" ref="dataTime" defaultValue={this.state.dataTime} placeholder="Enter Data" />
						<ButtonInput className="btn btn-default" type="submit" value="Add income" onClick={this.addIncome} />
					</form>
				</div>
			</div>
			);
	}
});
module.exports = AddIncome;