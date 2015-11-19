/**
 * Created by alinaoros on 11/3/2015.
 */
var React = require('react'),
    Header = require('../../components/Header/header.js'),
    SidebarBox = require('../../components/Sidebar/SidebarBox.js'),
    DeleteButton = require('../../components/Categories/deleteButton.js'),
    CategoryList = require('../../components/Categories/categoryList.js');

var Categories = React.createClass({
   render: function() {
       return (
           <div>
             <Header />
             <div>
                <SidebarBox/>
                <DeleteButton />
                <br></br>
                <CategoryList />
             </div>
           </div>
       );
   }
});

module.exports = Categories;

