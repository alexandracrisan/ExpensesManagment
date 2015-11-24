/**
 * Created by alinaoros on 11/4/2015.
 */
var React = require('react');
var Modal = require('react-modal');
var CategoryAction = require('../../actions/category-actions.js');
var CategoryStore = require('../../stores/category-store.js');

var addCategoryModal = React.createClass({

	getInitialState: function() {
    return {
        modalIsOpen: false,
        title: '',
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
    this.setState({title: event.target.value});
  },

  handleType: function(event) {
    this.setState({type: event.target.value});
  },

  handleDates: function() {

    var newType = 0;

    if(this.state.type === 'Income') {
      newType = 1;
    }
    else if(this.state.type === 'Both') {
      newType = 2;
    }

    var newCategory = {
      title: this.state.title,
      type: newType
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
          className="modall">

          <h2>Category Manager</h2>

         <form>
          <input className="form-control" value={this.state.title} onChange={this.handleCategory} placeholder="Add a new Category" autoFocus={true}/>
          
          <select className="form-control" value={this.state.type} onChange={this.handleType}>
              <option>Expense</option>
              <option>Income</option>
              <option>Both</option>
          </select>
        </form>

        <br></br>

        <button className="btn btn-primary col-lg-3" onClick={this.handleDates}>save</button>
        <button className="btn btn-danger col-lg-3" onClick={this.closeModal}>close</button>

        </Modal>
      </div>
    );
    }
});

module.exports = addCategoryModal;