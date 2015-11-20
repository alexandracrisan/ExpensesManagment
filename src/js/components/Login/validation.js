var React = require('react');
    LoginForm = require('../../components/Login/loginForm.js');

var Validate = React.createClass({
  check : function (userData, success, fail) {
    if (userData.username !== '' && userData.password !== '') {
      success();
    } else {
      fail();
    }
  },
  render : function () {
    return (
      <div>
        <LoginForm check={this.check} />
      </div>
    );
  }

});

module.exports = Validate;