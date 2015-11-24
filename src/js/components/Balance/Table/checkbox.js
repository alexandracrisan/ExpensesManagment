var React = require('react');
var Store = require('../store/store.js');
var Action = require('../action/action.js');

var CheckBox = React.createClass({
	getInitialState: function(){
		return{
			checked: false,
			id: this.props.currentUser
		}
		
	},
	handleChange: function(){
	    console.log('handleChange', this.refs.checked.checked); // Never gets logged
	    var checked = this.refs.checked.checked;
	    this.setState({
	      checked: checked
	    });
	   if(checked){	   		
	   		Action.addId(this.state.id);
	   }else{
	   		Action.deleteId(this.state.id);
	   }

    },

	render: function() {
        return(
            <input type="checkbox" name="cb" checked={this.state.checked} ref="checked" onChange={this.handleChange} name="checkbox" defaultValue={this.state.id}/>
        );
    }	
});
module.exports = CheckBox;