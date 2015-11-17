var React = require('react');

var AddItem = React.createClass({

	getInitialState: function(){

		return {
			sum: 0,
			date: '2015-01-01',
			description: '',
			category: '',
			type: '+'
		};
	},

	handleSum: function(event){

		this.setState({sum: event.target.value});
	},

	handleDate: function(event){

		this.setState({date: event.target.value});
	},

	handleDescription: function(event){

		this.setState({description: event.target.value});
	},

	handleCategory: function(event){

		this.setState({category: event.target.value});
	},

	handleType: function(event){

		this.setState({type: event.target.value});
	},

	handleData: function(){

		var data = {
			sum: this.state.sum,
			date: this.state.date,
			description: this.state.description,
			category: this.state.category,
			type: this.state.type
		}

		
	},

	render: function() {
		
		return (
			<div id="page-content-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-lg-offset-2 centered">              
                <input className="form-control" value={this.state.sum} onChange={this.handleSum} placeholder="Amount" />
                <input type="date" className="form-control" value={this.state.date} onChange={this.handleDate} placeholder="Data" />
                <textarea rows="4" className="form-control" value={this.state.description} onChange={this.handleDescription} placeholder="description"></textarea>
                <select value={this.state.category} onChange={this.handleCategory}>
                	<option>Taxes</option>
                	<option>Food</option>
                </select>
                 <select value={this.state.type} onChange={this.handleType}>
                	<option>+</option>
                	<option>-</option>
                </select>
                <button className="btn btn-primary col-lg-3" onClick={this.handleData}>Add</button>   
	         </div>
	        </div>
	      </div>
	    </div>
		);
	}
});