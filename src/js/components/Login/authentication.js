var LoginConstants = require('../components/Login/login-constants.js');
var AppDispatcher = require('../dispatchers/app-dispatcher');

var AuthService = {
	login: function(username, password){
		return(
			when(request({
				url:'http:/localhost:8080',
				method: 'POST',
				crossOrigin: true,
				type: 'json',
				data: {
					username, password
				}
			}))
			.then(function(response) {
				//we get a jwt back
				var jwt = response.id_token;
				//we trigger the LoginAction with that jwt
				LoginActions.loginUser(jwt);
				return true;
			});
		);
	},
}

module.exports=AuthService;