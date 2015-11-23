/**
 * Created by alinaoros on 11/4/2015.
 */
var React = require('react');
var AddCategoryModal = require('../../components/Modal/addCategoryModal.js');



var Header = React.createClass({

    render: function(){
        return (
            <div>
                <AddCategoryModal /> 
            </div>
        );
    }
});

module.exports = Header;


