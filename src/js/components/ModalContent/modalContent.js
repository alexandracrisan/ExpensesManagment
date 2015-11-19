/**
 * Created by alinaoros on 11/4/2015.
 */
var React = require('react');
var AddCategory = require('../ModalContent/addCategory.js');
var CategoryList = require('../ModalContent/categoryList.js');

var Header = React.createClass({

    render: function(){
        return (
            <div>
	            <AddCategory />
                <CategoryList />
            </div>
        );
    }
});

module.exports = Header;
