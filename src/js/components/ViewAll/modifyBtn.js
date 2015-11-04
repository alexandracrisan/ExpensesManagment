var React = require('react');

var ModifyBtn = React.createClass({
	handler: function(){
		var actionType = this.props.type;
		actionType(this.props.index);
	},
	render: function(){
		return (
			<div>
				<button onClick={this.handler}>Edit</button>
			</div>
		);
	}
});

module.exports = ModifyBtn;