var React = require('react');
var Action = require('../action/action.js');

var Formular = React.createClass({

	getInitialState: function(){
		return{
			id: null,
			nume: null,
			prenume: null,
			varsta: null
		};
	},
	addData: function(){

		var nume = $('.nume').val();
		var prenume = $('.prenume').val();
		var varsta = $('.varsta').val();
		var data={			
			nume: nume,
			prenume: prenume,
			varsta: varsta
		};
		
		Action.addData(data);
	},
	render:function(){
		return(
			<div>
				<div className="form-group"> 
					<p>Nume</p>
				    <input type="text" className="form-control nume"  value={this.state.nume}/>
				</div>
				<div className="form-group"> 
					<p>Prenume</p>
				    <input type="text" className="form-control prenume" value={this.state.prenume} />
				</div>
				<div className="form-group">
					<p>Varsta</p> 
				    <input type="text" className="form-control varsta"  value={this.state.varsta}/>
				</div>
				<button className="btn btn-danger" onClick={this.addData} >Add</button>  
			</div>
		);
	}

});
module.exports = Formular;