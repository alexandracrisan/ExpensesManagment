var React = require('react');
var Link = require('react-router').Link;
var Modal = require('react-modal');

const customStyles = {
    content : {
        top                   : '30%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

var DeleteButton = React.createClass({

    getInitialState: function() {
        return {
            modalIsOpen: false,
            category: '',
            type: 'Expense'
        };
    },

    openModal: function() {
        this.setState({modalIsOpen: true});
    },

    closeModal: function() {
        this.setState({modalIsOpen: false});
    },

    deleteItem: function() {
        console.log('delete function');
        this.closeModal()
    },

    render: function(){
        return (
            <div>
                <div >
                    <button className="btn btn-danger" onClick={this.openModal}>Delete</button>
                </div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}>

                    <h4>Are you sure you want to Delete this items?</h4>

                    <button className="btn btn-danger" onClick={this.deleteItem}>Yes</button>
                    <button className="btn btn-primary" onClick={this.closeModal}>Cancel</button>

                </Modal>
            </div>
        );
    }
});

module.exports = DeleteButton;