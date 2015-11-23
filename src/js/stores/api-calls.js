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

        update: function(movement, callback){
            $.ajax({
                type:'POST',
                url:ApiConstants.url + ApiConstants.endPoints.movements + 'update',
                data: movement,
                success: callback
            });
        }
    },

    categories: {
        
        add: function(category, callback){
            $.ajax({
                type: "POST",
                url: ApiConstants.url + ApiConstants.endPoints.categories + 'add',
                data: category,  
                success: callback

            });
        },

        get: function(callback){
            $.ajax({
                type:'GET',
                url:ApiConstants.url + ApiConstants.endPoints.categories + 'get',
                success: callback
            });
        },

        delete: function(){},

        update: function(category, callback){
            $.ajax({
                type: "POST",
                url: ApiConstants.url + ApiConstants.endPoints.categories + 'update',
                data: category,  
                success: callback

            });
        }
    }

}

module.exports = ApiCalls;
