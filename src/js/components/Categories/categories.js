/**
 * Created by alinaoros on 11/3/2015.
 */
var React = require('react'),
    Header = require('../../components/Header/header.js'),
    SidebarBox = require('../../components/Sidebar/SidebarBox.js'),
    DeleteButton = require('./deleteButton.js'),
    CategoryItem = require('./categoryItem.js');
 var CategoryStore = require('../../stores/category-store.js');

var Dashboard = React.createClass({

  getInitialState: function() {

    return {
      categories:  CategoryStore.getCategories()
    }

  },

  componentWillMount: function() {

    CategoryStore.addChangeListener(this._onChange)


  },

  componentDidMount: function() {
    CategoryStore.refreshData();
  },

  componentWillUnmount: function() {

    CategoryStore.removeChangeListener(this._onChange);

  },

  _onChange: function() {

    this.setState({categories: CategoryStore.getCategories()});

  },

   render: function() {
    
       return (
        <div>
          <Header />
          <div>
            <SidebarBox/>
            <DeleteButton />
            <br></br>
            {this.state.categories.map(function(category) {
              return(<CategoryItem category={category} key={category.id}/>)
              
              })
            }
          </div>
        </div>
       );

   }

});

module.exports = Dashboard;
