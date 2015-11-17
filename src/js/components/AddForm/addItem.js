var React = require('react');
var FinanceAction = require('../../actions/finances-actions.js');
var AddItem = React.createClass({

	getInitialState: function(){

		return {
			sum: null,
			date: '2015-01-01',
			description: '',
			category: 'Taxes',
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

		FinanceAction.dataLoaded(data);
	},

	render: function() {
		
		return (
			<div id="page-content-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 centered form-inline">
            	<div className="form-group">              
                <input className="form-control" value={this.state.sum} onChange={this.handleSum} placeholder="Amount" />
              </div>
              <div className="form-group"> 
                <input type="date" className="form-control" value={this.state.date} onChange={this.handleDate} placeholder="Data" />
              </div>
                <textarea rows="1" className="form-control" value={this.state.description} onChange={this.handleDescription} placeholder="description"></textarea>
              <div className="form-group">   
                <select className="form-control" value={this.state.category} onChange={this.handleCategory}>
                	<option>Taxes</option>
                	<option>Food</option>
                </select>
              </div>
              <div className="form-group"> 
                 <select className="form-control" value={this.state.type} onChange={this.handleType}>
                	<option>+</option>
                	<option>-</option>
                </select>
              </div>
                <button className="btn btn-primary" onClick={this.handleData}>Add</button>   
	         </div>
	        </div>
	      </div>
	    </div>
		);
	}
});

module.exports = AddItem;