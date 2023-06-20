/**
 * Call NASA API for APOD (Astronomy Picture of the Day)
 * —————————————————————————————————————————————————————
 */ 
$(document).ready(function()
{
	$.ajax({
	    url: 'https://api.nasa.gov/planetary/apod?api_key=' + apiKEY + '&start_date=' + dateEightDaysAgoYYYYMMDD() + '&end_date=' + dateTodayYYYYMMDD(),
	    dataType: 'json',

	    // If JSON data is obtained.
	    success: function(json)
	    {
			// Set a post counter.
			postCount = 1;

			// Loop backwards, because the JSON file lists the oldest-to-newest dates from top-to-bottom.
    		for (let i = json.length - 1; i >= 0; i--)
			{
				// Pass the current index and JSON data to the function to obtain desired API data.
				apiGetData(i, json);
			}
	    },

		// If JSON data is not obtained (console error message).
	    error: function(req, status, err){console.log('Error Message: ', status, err);}
	});
});
