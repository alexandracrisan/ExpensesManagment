ApiConstants = require('../constants/api-constants.js');

var ApiCalls = {

    movements: {
    
        add: function(movement, callback){
            $.ajax({
                type: "POST",
                url: ApiConstants.url + ApiConstants.endPoints.movements + 'add',
                data: movement,
                
                success: callback

            });
        },
        get: function(callback){
            $.ajax({
                type:'GET',
                url:ApiConstants.url + ApiConstants.endPoints.movements + 'get',
                success: callback
            });
        },
        delete: function(id){},
        update: function(movement){}
    },

    categories: {
        
        add: function(){
            
        },
        get: function(){},
        delete: function(){},
        update: function(){}
    }

};

module.exports = ApiCalls;
