/**
 * Created by crisanalexandra on 11/4/2015.
 */

var React = require('react');

var AddExpense = require('../Expenses/addExpense.js');

var Expense = React.createClass({
    render: function() {
        return (
          <div>
              <AddExpense />
          </div>
        );
    }
});

module.exports = Expense;