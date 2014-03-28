(function (root, factory) {

	if (typeof exports === 'object') {
		module.exports = factory();
	}
	else
	{
		root.JSTimezone = factory();
	}


}(this, function(){

var timezone = (function(){

	var
	get = function()
	{
		var now		= new Date(),
		tz_data = {'offset': now.getTimezoneOffset(), 'dst':false },

		//Create two new dates
		date_1 = new Date(),
		date_2 = new Date();

		// Date one is set to January 1st of this year
		// Guaranteed not to be in DST for northern hemisphere
		// and guaranted to be in DST for sourthern hemisphere
		// (If DST exists on client device)

		date_1.setDate(1);
		date_1.setMonth(1);

		// Date two is set to July 1st of this year
		// Guaranteed to be in DST for northern hemisphere
		// and guaranteed not to be in DST for southern hemisphere
		// (If DST exists on client device)
		date_2.setDate(1);
		date_2.setMonth(7);

		// If time zone offset match, no DST exists for this time zone
		if( parseInt(date_1.getTimezoneOffset(),10) == parseInt( date_2.getTimezoneOffset(),10 ) )
		{
			tz_data.dst = false;
		}
		else
		{
			// DST exists for this time zone - check if it is currently active
			// Find out if we are on northern or southern hemisphere
			// Hemisphere is positive for northern, and negative for southern
			var hemisphere = parseInt( date_1.getTimezoneOffset(),10) - parseInt(date_2.getTimezoneOffset(),10),
			dst = 0;
			
			// Current date is still before or after DST, not containing DST
			if( (hemisphere>0 && parseInt(date_1.getTimezoneOffset(),10)==parseInt(now.getTimezoneOffset(),10)) ||
				(hemisphere<0 && parseInt(date_2.getTimezoneOffset(),10)==parseInt(now.getTimezoneOffset(),10)) )
			{
				tz_data.dst = false;
			}
			// DST is active right now with the current date
			else
			{
				tz_data.dst = true;
			}
		}

		return tz_data;
	};

	return {
		get : get
	};
})();

return timezone;

}));