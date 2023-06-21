/**
 * Obtain API data
 * ———————————————
 *
 * @i (integer) Index from the current iteration.
 * @json (object) JSON data obtained from the API request.
 */ 
function apiGetData(i, json)
{
	// Obtain API data (based upon the current iteration).
	let copyright = json[i].copyright,
		description = json[i].explanation,
		imageSmall = json[i].url,
		imageLarge = json[i].hdurl,
		mediaType = json[i].media_type,
		title = json[i].title,
		url = json[i].url,
		dateDD = json[i].date.substring(8),
		monthMM = json[i].date.substring(5, json[i].date.length - 3),
		yearYY = json[i].date.substring(2, json[i].date.length - 6),
		yearYYYY = json[i].date.substring(0, json[i].date.length - 6);

	// Set two different date formats.
	let date = monthName(monthMM) + ' ' + dateWithoutLeadingZero(dateDD) + ', ' + yearYYYY,
		dateYYMMDD = yearYY + '' +  monthMM + '' + dateDD;

	// Append today's APOD media.
	if (postCount == 1)
	{
		// Append API data if the media has image without author copyright information.
		// The JSON file doesn't always include the copyright information.
		if (mediaType == "image" && typeof copyright == "undefined")
		{
			$('.nasa-apod .post-' + postCount)
			.html(
				'<div class="non-modal-media">' +
					'<div class="date">' + date +'</div>' +
					'<h2>' + title +'</h2>' +
					'<figure class="image">' +
						'<picture>' +
							'<img class="image" src="' + imageSmall + '" alt="' + title + '">' +
						'</picture>' + 
					'</figure>' +
					'<p class="description">' + description + '</p>' +
					'<div class="source">' +
						'<a class="nasa-image-url" href="' + imageLarge + '" target="_blank">Image Source</a>' +
						'<a class="nasa-webpage" href="https://apod.nasa.gov/apod/ap' + dateYYMMDD + '.html" target="_blank">APOD Source</a>' +
					'</div>' +
				'</div>' +
				'<div class="modal-media" style="display: none;">' +
					'<div class="content">' +
						exitIcon() +
						'<figure class="image">' +
							'<picture>' +
								'<img src="' + imageLarge + '" alt="' + title + '">' +
							'</picture>' + 
						'</figure>' +
					'</div>' +
				'</div>'
			);
		}

		// Append API data if the media has image with author copyright information.
		else if (mediaType == "image" && typeof copyright !== "undefined")
		{
			$('.nasa-apod .post-' + postCount)
			.html(
				'<div class="non-modal-media">' +
					'<div class="date">' + date +'</div>' +
					'<h2>' + title +'</h2>' +
					'<figure class="image">' +
						'<picture>' +
							'<img class="image" src="' + imageSmall + '" alt="' + title + '">' +
						'</picture>' + 
						'<figcaption>' + copyright + '</figcaption>' +
					'</figure>' +
					'<p class="description">' + description + '</p>' +
					'<div class="source">' +
						'<a class="nasa-image-url" href="' + imageLarge + '" target="_blank">Image Source</a>' +
						'<a class="nasa-webpage" href="https://apod.nasa.gov/apod/ap' + dateYYMMDD + '.html" target="_blank">APOD Source</a>' +
					'</div>' +
				'</div>' +
				'<div class="modal-media" style="display: none;">' +
					'<div class="content">' +
						exitIcon() +
						'<figure class="image">' +
							'<picture>' +
								'<img src="' + imageLarge + '" alt="' + title + '">' +
							'</picture>' +
							'<figcaption>' + copyright + '</figcaption>' +
						'</figure>' +
					'</div>' +
				'</div>'
			);
		}

		// Append API data if the media is a YouTube video.
		else if (mediaType == "video")
		{
			$('.nasa-apod .post-' + postCount)
			.html(
				'<div class="non-modal-media">' +
					'<div class="date">' + date +'</div>' +
					'<h2>' + title +'</h2>' +
					'<div class="iframe-container">' +
						'<iframe src="' + url + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' +
					'</div>' +
					'<p class="description">' + description + '</p>' +
					'<div class="source">' +
						'<a class="video" href="https://apod.nasa.gov/apod/ap' + dateYYMMDD + '.html" target="_blank">APOD Source</a>' +
					'</div>' +
				'</div>'
			);
		}
	}

	// Append the NASA APOD media for the last 8 days (excluding today).
	else if (postCount > 1)
	{
		// Append API data if the media has image without author copyright information.
		// The JSON file doesn't always include the copyright information.
	 	if (mediaType == "image" && typeof copyright == "undefined")
		{
			$('.nasa-apod .post-' + postCount)
			.html(
				'<div class="non-modal-media">' +
					'<div class="date">' + date +'</div>' +
					'<figure class="image">' +
						'<picture>' +
							'<img class="image" src="' + imageSmall + '" alt="' + title + '">' +
						'</picture>' + 
					'</figure>' +
				'</div>' +
				'<div class="modal-media" style="display: none;">' +
					'<div class="content">' +
						exitIcon() +
						'<div class="date">' + date +'</div>' +
						'<h2>' + title +'</h2>' +
						'<figure class="image">' +
							'<picture>' +
								'<img src="' + imageLarge + '" alt="' + title + '">' +
							'</picture>' + 
						'</figure>' +
						'<p class="description">' + description + '</p>' +
						'<div class="source">' +
							'<a class="nasa-image-url" href="' + imageLarge + '" target="_blank">Image Source</a>' +
							'<a class="nasa-webpage" href="https://apod.nasa.gov/apod/ap' + dateYYMMDD + '.html" target="_blank">APOD Source</a>' +
						'</div>' +
					'</div>' +
				'</div>'
			);
		}

		// Append API data if the media has image with author copyright information.
		else if (mediaType == "image" && typeof copyright !== "undefined")
		{
			$('.nasa-apod .post-' + postCount)
			.html(
				'<div class="non-modal-media">' +
					'<div class="date">' + date + '</div>' +
					'<figure class="image">' +
						'<picture>' +
							'<img class="image" src="' + imageSmall + '" alt="' + title + '">' +
						'</picture>' + 
					'</figure>' +
				'</div>' +
				'<div class="modal-media" style="display: none;">' +
					'<div class="content">' +
						exitIcon() +
						'<div class="date">' + date + '</div>' +
						'<h2>' + title + '</h2>' +
						'<figure class="image">' +
							'<picture>' +
								'<img src="' + imageLarge + '" alt="' + title + '">' +
							'</picture>' + 
							'<figcaption>' + copyright + '</figcaption>' +
						'</figure>' +
						'<p class="description">' + description + '</p>' +
						'<div class="source">' +
							'<a class="nasa-image-url" href="' + imageLarge + '" target="_blank">Image Source</a>' +
							'<a class="nasa-webpage" href="https://apod.nasa.gov/apod/ap' + dateYYMMDD + '.html" target="_blank">APOD Source</a>' +
						'</div>' +
					'</div>' +
				'</div>'
			);
		}

		// Append API data if the media is a YouTube video.
		else if (mediaType == "video")
		{
			$('.nasa-apod .post-' + postCount)
			.html(
				'<div class="non-modal-media">' +
					'<div class="date">' + date +'</div>' +
					'<div class="iframe-container">' +
						'<iframe src="' + url + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' +
					'</div>' +
				'</div>'
			);
		}
	}

	// Increase the post count for this iteration.
	postCount++;
}
