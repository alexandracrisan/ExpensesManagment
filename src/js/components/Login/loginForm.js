var React = require('react'),
    Router = require('react-router'),
    Link = Router.Link,
    LoginActions = require('../../actions/login-actions.js'),
    LoginStore = require('../../stores/login-store.js'),
    Validation = require('react-validation'),
    Navigation = Router.Navigation;

var LoginForm = React.createClass({
  mixins: [Navigation],

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

  // login: function(e) {
  //   e.preventDefault();
  //   var userData = {
  //     username: this.refs.username.value,
  //     password: this.refs.password.value
  //   }

  //   console.log(userData);

  //   LoginActions.loginUser(userData);
    
  //   this.setState({error: true}); 
  // },

  validate : function (e) {
    e.preventDefault();
    
    var userData = {
      username: this.refs.username.getDOMNode().value,
      password: this.refs.password.getDOMNode().value
    }

    console.log('sdfghjjhgfd', this.props.check);

    LoginActions.loginUser(userData);

    this.props.check(userData, this.success, this.fail);
  },
  success : function () {
    this.transitionTo('dashboard'); 
    alert('Success');
  },
  fail : function () {
    alert('Fail');
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
                <form role="form">
                  
                  <div className="form-group">
                    <input type="text" className="form-control input-sm" ref="username" 
                         placeholder="Username"/>
                  </div>

                  <div className="form-group">
                    <input type="text" className="form-control input-sm" ref="password" 
                         placeholder="Username"/>
                  </div>

                  <button onClick = {this.validate} className="btn btn-primary btn-block login-button">
                   Log in
                  </button>
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
