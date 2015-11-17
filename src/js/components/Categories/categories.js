var React = require('react');
var Modal = require('react-modal');
var SidebarBox = require('../../components/Sidebar/sidebarBox.js'),
	Header = require('../../components/Header/header.js');
	//CategoryPop = require('../../components/Popup/addCategory.js');
const customStyles = {
	content : {
		top                   : '50%',
		left                  : '50%',
		right                 : 'auto',
		bottom                : 'auto',
		marginRight           : '-50%',
		transform             : 'translate(-50%, -50%)'
	}
};

var Categories = React.createClass({
	getInitialState: function() {
		return { modalIsOpen: false };
	},

	openModal: function() {
		this.setState({modalIsOpen: true});
	},

	closeModal: function() {
		this.setState({modalIsOpen: false});
	},

	render: function() {
		return (
			<div>
				<button onClick={this.openModal}>Open Modal</button>
				<Modal
					isOpen={this.state.modalIsOpen}
					onRequestClose={this.closeModal}
					style={customStyles}>

					<h2>Add a new category</h2>
					<form>
                        <br/>
						<input placeholder="Add a new Category"  />
						<br/>
						<button>tab navigation</button>
						<br/>
					</form>
					<button onClick={this.closeModal}>close</button>
					<button>save</button>

				</Modal>
			</div>
		);
	}

});

module.exports = Categories;
