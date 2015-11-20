ApiConstants = require('../constants/api-constants.js');

var ApiCalls = {

	getData: function(dataType, callback){

		var url = 'http://213.167.241.172/api/';

        var severData = $.ajax({
            type:'GET',
            url: url + dataType + '/get',
            success: callback
        });
	},

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
    },

    addData: function(data, dataType){

        

        var severData = $.ajax({
            type: "POST",
            url: ApiConstants.url + ApiConstants.endPoints.movements + '/add',
            data: {
                 amount: data.amount,
                 date: data.created,
                 title: data.title,
                 description: data.description,
                 type: data.categoryId
            },
            
            success: callback

        });

    }
}

module.exports = ApiCalls;
