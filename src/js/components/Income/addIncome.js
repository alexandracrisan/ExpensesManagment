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
		var income = {
			suma: this.refs.suma.value,
			dataTime: this.refs.dataTime.value
		}
		console.log(income);
	},

	render: function(){
		return(
			<div className="container row">
				<div className="col-md-4 col-md-offset-4">
					<form >
						<Input type="number" label="Suma" ref="suma" defaultValue={this.state.suma} placeholder="Enter amount" />
						<Input type="text" label="Data" ref="dataTime" defaultValue={this.state.dataTime} placeholder="Enter Data" />
						<ButtonInput className="btn btn-default" type="submit" value="Add income" onClick={this.addIncome} />
					</form>
				</div>
			</div>
			);
	}
});
module.exports = AddIncome;