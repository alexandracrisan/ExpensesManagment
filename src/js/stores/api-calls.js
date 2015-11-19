var ApiCalls = {

	getData: function(dataType){

		var url = 'http://213.167.241.172/api/';

        var severData = $.ajax({
            type:'GET',
            url: url + dataType + '/get',
            success: function (data) {
                return data;
            }
        });
        return severData;
	}
}

module.exports = ApiCalls;
