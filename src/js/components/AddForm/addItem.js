var React = require('react');
var FinanceAction = require('../../actions/finances-actions.js');
var CategoriesStore = require('../../stores/category-store.js');
var Dropdown = require('../../components/common/dropdown.js');

var AddItem = React.createClass({

	getInitialState: function(){
		
		return {
			categoryArr: CategoriesStore.getCategories(),
			category: {
				title: '',
				type: ''
			},
			amount: ''
		};
	},

	handleData: function(){


		console.log(this.state.category);

		var categType,
				title = this.state.category.split("-", 1),
				type = this.state.category.substring(title[0].length + 2);

		if(type === "Expense"){
					categType = 0;
		}
		else if(type === "Income"){
						categType = 1;
					}
					else categType = 2;


		var data = {
			title: this.refs.title.value,
			description:this.refs.description.value,
			amount: this.state.sum,
			from: this.refs.from.value,
			to: this.refs.to.value,
			type: categType,
			tags: this.refs.tags.value,
			date: this.refs.dateCreated.value	
		};

		FinanceAction.dataLoaded(data);
	},

	handleCategory: function(event){

		this.setState({category: event.target.value});						
	},

	handleSum: function(event){

		this.setState({sum: event.target.value});
	},

	componentWillMount: function(){

		CategoriesStore.addChangeListener(this._onChange);
	},

	componentDidMount: function() {
    CategoriesStore.refreshData();
  },

	componentWillUnmount: function(){

		CategoriesStore.removeChangeListener(this._onChange);
	},

	_onChange: function(){

		this.setState({categoryArr: CategoriesStore.getCategories()});
	},

	render: function() {
		
		// var categoryList = this.state.categoryArr.map(function(item){

		// 	return (category = {
		// 		title: item.title,
		// 		type: item.type
		// 	});
		// });

		return (
			<div id="page-content-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 centered form-horizontal"> 	
            	
					    <div className="row">
					    	
					      <div className="col-lg-4 col-sm-offset-2">
					      	<div className="form-group">
		            		<label className="control-label col-sm-2">Amount</label>
			            	<div className="col-sm-10">
			            		<input className="form-control" value={this.state.sum} onChange={this.handleSum} placeholder="Add amount" autoFocus={true}/> 		            	
						      	</div>
						      </div>
						      <div className="form-group">
						      	<label className="control-label col-sm-2">Title</label>
							      <div className="col-sm-10">
							      	<input className="form-control" ref="title" defaultValue='' placeholder="Add title" />
						      	</div>
						      </div>
						      <div className="form-group">
						      	<label className="control-label col-sm-2" >Date</label>
								    <div className="col-sm-10">
								    	<input type="date" className="form-control" defaultValue='' ref='dateCreated' />       
								    </div>
								  </div>
								  <div className="form-group">
								    <label className="control-label col-sm-2" >Tags</label> 
								    <div className="col-sm-10">
								    	<input type="text" className="form-control" defaultValue='' ref='tags' placeholder="Tags" />   
								    </div>
									</div>
									<div className="form-group">
								    <label className="control-label col-sm-2">From</label>
			          		<div className="col-sm-10">
			          			<input type="text" className="form-control" defaultValue='' ref='from' placeholder="From" /> 
		  	        		</div>
		    					</div>
		    					<div className="form-group">
			          		<label className="control-label col-sm-2">To</label>
			          		<div className="col-sm-10">
	 										<input type="text" className="form-control" defaultValue='' ref='to' placeholder="To" /> 
	 									</div>
									</div>
				      	</div>
				      	<div className="col-lg-4">
				      		<div className="form-group">
					      		<label>Select category</label>					     
	          	 			<Dropdown category={this.state.category} handle={this.handleCategory} categoryArr={this.state.categoryArr}></Dropdown>
	            		</div>
	            		<div className="form-group">
		            		<label>Enter description</label>
					   				<textarea rows="8" className="form-control mov-textarea" ref="description" defaultValue='' placeholder="Add description"></textarea>
					   				<div className="mov-btn-container col-sm-offset-9">
					   					<button className="movement-btn btn btn-danger" onClick={this.handleData}>Add Movement</button> 
										</div>
									</div>
								</div>
							</div>	          	         	                 	         	             
	         </div>
	        </div>
	      </div>
	    </div>
		);
	}
});

module.exports = AddItem;