/**
 * Created by crisanalexandra on 11/16/2015.
 */

var React = require('react'),
    FinancesAction = require('../../actions/finances-actions.js');

var CheckBox = React.createClass({

    getInitialState: function(){
        return{
            checked: false,
            id: this.props.currentUser
        }

    },

    handleChange: function(){
        console.log('handleChange', this.refs.checked.checked); // Never gets logged
        var checked = this.refs.checked.checked;
        this.setState({
            checked: checked
        });
        if(checked){
            FinancesAction.addId(this.state.id);
        }else{
            FinancesAction.deleteId(this.state.id);
        }

    },

    render: function() {
        return(
            <input type="checkbox" checked={this.state.checked} ref="checked" onChange={this.handleChange} name="checkbox" defaultValue={this.state.id}/>
        );
    }
});

module.exports = CheckBox;