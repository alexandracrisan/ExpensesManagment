/**
 * Created by alinaoros on 11/4/2015.
 */
var React = require('react');
var Modal = require('react-modal');
var CategoryAction = require('../../actions/category-actions.js');
var CategoryStore = require('../../stores/category-store.js');

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

var addCategoryModal = React.createClass({

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

    handleCategory: function(event) {
        this.setState({category: event.target.value});
    },

    handleType: function(event) {
        this.setState({type: event.target.value});
    },

    handleDates: function() {
        var newCategory = {
            category: this.state.category,
            type: this.state.type
        }
        
        this.closeModal();
        CategoryAction.addCategory(newCategory);
        console.log(newCategory);
    },

    render: function(){
        return (
            <div>
                <div className="header-component ">
                    <button className="header-component right addCategory" onClick={this.openModal}>Add Category</button>
                </div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}>

                    <h2>Category Manager</h2>

                   <form>
                    <br/>
                    <input className="form-control" value={this.state.category} onChange={this.handleCategory} placeholder="Add a new Category"  />
                    <br/>
                    <select className="form-control" value={this.state.type} onChange={this.handleType}>
                        <option>Expense</option>
                        <option selected>Income</option>
                    </select>
                    <br/>
                    </form>
                    <button className="btn btn-primary col-lg-3" onClick={this.handleDates}>save</button>

                    <button className="btn btn-danger col-lg-3" onClick={this.closeModal}>close</button>

                </Modal>
            </div>
        );
    }

   
});

module.exports = addCategoryModal;