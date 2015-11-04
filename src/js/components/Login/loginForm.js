var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var LoginForm = React.createClass({
  getInitialState: function(){
    return{
      username: '',
      password: '',
      error: false
    }
  },
  login: function(e) {
    e.preventDefault();
    var data = {
      username: this.refs.username.value,
      password: this.refs.password.value
    }
    this.setState({error: true});

    console.log(data); 
  },
  showError: function() {
    if(this.state.error)
      return (
        <div className={"alert alert-notice"}>Invalid login</div>

        )
    return "";
  },
  render: function(){
    return (
      <form role="form" onSubmit={this.login}>
      {this.showError()}
      <div className="form-group">
        <input type="text" ref="username" defaultValue={this.state.username} placeholder="Username"/>
        <input type="text" ref="password" defaultValue={this.state.password} placeholder="Password"/>
      </div>
      <button type="submit" onClick={this.login}>Login</button>
      <Link to="dashboard">Login</Link>
      </form>
    );
  }
});

module.exports = LoginForm;
