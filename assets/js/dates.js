/**
 * Return today's date in the format of YYYY-MM-DD
 * ———————————————————————————————————————————————
 */
function dateTodayYYYYMMDD()
{
	// Create a new date object & set it as Eastern Time (ET).
	const dateObject = new Date(new Date().toLocaleString("en-US", {timeZone: "America/New_York"}));

	// Obtain the month, date & year for today.
	let year = dateObject.getFullYear(),
		month = dateObject.getMonth() + 1, // Add 1, so 1 (not 0) represents January.
		date = dateObject.getDate();

	// Add a leading zero if the month is earlier than October.
	if (month < 10)
	{
		month = '0' + month;
	}

	// Add a leading zero if the date is earlier than the 10th.
	if (date < 10)
	{
		date = '0' + date;
	}

	// Return date in the format of YYYY-MM-DD
	return year + '-' + month + '-' + date;
}

/**
 * Return date for 8 days agos in the format of YYYY-MM-DD
 * ———————————————————————————————————————————————————————
 */  
function dateEightDaysAgoYYYYMMDD()
{
	// Create a new date object & set it as Eastern Time (ET).
	const dateObject = new Date(new Date().toLocaleString("en-US", {timeZone: "America/New_York"}));

	// Set the date object to reflect 8 days ago.
	dateObject.setDate(dateObject.getDate() - 8);

	// Obtain the month, date & year for 8 days ago.
	let year = dateObject.getFullYear(),
		month = dateObject.getMonth() + 1, // Add 1, so 1 (not 0) represents January.
		date = dateObject.getDate();

	// Add a leading zero if the month is earlier than October.
	if (month < 10)
	{
		month = '0' + month;
	}

	// Add a leading zero if the date is earlier than the 10th.
	if (date < 10)
	{
		date = '0' + date;
	}

	// Return date in the format of YYYY-MM-DD
	return year + '-' + month + '-' + date;
}

/**
 * Return a month's name by reading a month number in the format of MM
 * ———————————————————————————————————————————————————————————————————
 */ 
function monthName(monthNumber)
{
	// Remove leading zero if the month is earlier than October.
	if (monthNumber < 10)
	{
		monthNumber = monthNumber.substring(1);
	}

	// Leave the first array value blank, so index 1 (not 0) represents January.
	const monthNames = ["","January","February","March","April","May","June","July","August","September","October","November","December"];

	// Return month name.
	return monthNames[monthNumber];
}

/**
 * Remove any leading zeros of a date in the format of DD
 * ——————————————————————————————————————————————————————
 */ 
function dateWithoutLeadingZero(date)
{
	// Remove leading zero if the date is earlier than the 10th.
	if (date < 10)
	{
		date = date.substring(1);
	}

	// Return date format either as 1 or 2 digits.
	return date;
}
