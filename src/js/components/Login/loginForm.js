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
    //submit login form via AJAX
    $.ajax({
      type: 'POST',
      url: 'http:/localhost:blabla',
      data: data
    })
    .done(function(data) {
      this.clearForm();
    })
    
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
      <div className="container">
        <div className="row vertical-offset-100">
          <div className="col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4">
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
