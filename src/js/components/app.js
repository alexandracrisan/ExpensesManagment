//here will reside the main component that will include all others
var Details = require('Dashboard/details.js')
var React = require('react');

console.log('app.js');
console.log('app.js');

var App = React.createClass({
    render: function() {
      return (
          <div id="main">
            <Details />
          </div>
      )
    }
});

module.exports = App;