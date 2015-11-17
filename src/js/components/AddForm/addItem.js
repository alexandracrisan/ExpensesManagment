var React = require('react');

var AddItem = React.createClass({

	render: function() {
		
		return (
			<div id="page-content-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-lg-offset-2 centered">
              
                <input type="text" className="form-control" defaultValue={this.state.suma} id="suma" placeholder="Amount" />
                <input type="date" className="form-control" defaultValue={this.state.date} id="date" placeholder="Data" />
                <textarea ref="description" rows="4" className="form-control" label="Enter description" defaultValue={this.state.description} id="description" placeholder="description"></textarea>
                <select>
                	<option>Taxes</option>
                	<option>Food</option>
                </select>
                 <select>
                	<option>+</option>
                	<option>-</option>
                </select>
                <button type="submit" className="btn btn-primary col-lg-3" onClick={this.addExpense}>Add</button>
              
	         </div>
	        </div>
	      </div>
	    </div>
		);
	}
});