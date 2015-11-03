var LoginForm = React.createClass({
  getInitialState: function(){
    return{
      username: '',
      password: ''
    }
  },
  login: function(e) {
    e.preventDefault()
    var data = {
      username: this.refs.username.getDOMNode().value,
      password: this.refs.password.getDOMNode().value,
    }
  },
  render: function(){
    return (
      <form role="form">
      <div className="form-group">
        <input type="text" valueLink={this.linkState('user')} placeholder="Username"/>
        <input type="text" valueLink={this.linkState('password')} placeholder="Password"/>
      </div>
      <button type="submit" onClick={this.login}>Login</button>
      </form>
    );
  },
});

reactMixin(LoginForm.prototype, React.addons.LinkedStateMixin);