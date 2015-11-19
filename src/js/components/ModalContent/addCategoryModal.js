/**
 * Created by alinaoros on 11/4/2015.
 */
var React = require('react');
var AddCategory = require('../ModalContent/addCategory.js');

var addCategoryModal = React.createClass({

    render: function(){
        return (
            <div>
                <AddCategory />
            </div>
        );
    }
});

module.exports = addCategoryModal;
