var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var LoginActions = require('../../actions/login-actions.js');
var LoginStore = require('../../stores/login-store.js');

var LoginForm = React.createClass({
  getInitialState: function(){
    return{
      username: '',
      password: '',
      error: false
    }
  },
  getUsersList: function() {
    return {users: LoginStore.getMockData()}
  },
  componentWillMount: function(){ 
    LoginStore.addChangeListener(this._onChange)
  },
  componentWillUnmount: function(){
    LoginStore.removeChangeListener(this._onChange);
  },
  _onChange: function(){
      this.setState(this.getUsersList());
  },
  login: function(e) {
    e.preventDefault();
    var userData = {
      username: this.refs.username.value,
      password: this.refs.password.value
    }
    //submit login form via AJAX
    // $.ajax({
    //   type: 'POST',
    //   url: 'http:/localhost:blabla',
    //   data: data
    // })
    // .done(function(data) {
    //   this.clearForm();
    // })
    LoginActions.loginUser(userData);
    
    this.setState({error: true});
    console.log(userData); 
  },
  handleChange: function(e) {
    return e.target.value;
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
      <div className="container">
        <div className="row vertical-offset-100">
          <div className="col-md-6 col-md-offset-3">
            <div className="panel panel-default">
              <div className="panel-heading ">
                <h3 className="panel-title" >Please log in</h3>
              </div>
              <div className="panel-body">
                <form role="form" onSubmit={this.login}>
                  {this.showError()}
                  <div className="form-group">
                    <input type="text" className="form-control input-sm" ref="username" defaultValue={this.state.username} placeholder="Username"/>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control input-sm" ref="password" defaultValue={this.state.password} placeholder="Password"/>
                  </div>
                  <button type="submit" className="btn btn-info btn-block" onClick={this.login}><Link to="dashboard">Log in</Link></button>
                </form>
              </div>  
            </div>
          </div>
        </div>
      </div>
   );
}
});

module.exports = LoginForm;
