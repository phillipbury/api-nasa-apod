/**
 * Show & hide modal images
 * ————————————————————————
 */
$(document).ready(function()
{
	// Show modal image (when clicking on its associated non-modal image).
	$(document).on('click', '.nasa-apod .non-modal-media img', function()
	{
		$(this).closest(".media-container").find(".modal-media").show();
		$(this).closest(".media-container").find("svg").show();
		$("html, body").addClass("disable-scroll"); // Disable html & body scroll.
	});

	// Exit modal image (when clicking on the exit icon).
	$(document).on('click', '.nasa-apod .media-container .modal-media .close-modal', function()
	{
		$(this).closest(".modal-media").slideUp(700);
		$(this).hide();
		$("html, body").removeClass("disable-scroll"); // Enable html & body scroll.
	});
});

/**
 * Exit icon (SVG)
 * ———————————————
 */
function exitIcon()
{
	let exitIcon =
	'<svg class="close-modal" viewBox="0 0 492 492" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve">' +
		'<g>' +
			'<path d="M300.188,246L484.14,62.04c5.06-5.064,7.852-11.82,7.86-19.024c0-7.208-2.792-13.972-7.86-19.028L468.02,7.872' +
			'c-5.068-5.076-11.824-7.856-19.036-7.856c-7.2,0-13.956,2.78-19.024,7.856L246.008,191.82L62.048,7.872' +
			'c-5.06-5.076-11.82-7.856-19.028-7.856c-7.2,0-13.96,2.78-19.02,7.856L7.872,23.988c-10.496,10.496-10.496,27.568,0,38.052' +
			'L191.828,246L7.872,429.952c-5.064,5.072-7.852,11.828-7.852,19.032c0,7.204,2.788,13.96,7.852,19.028l16.124,16.116' +
			'c5.06,5.072,11.824,7.856,19.02,7.856c7.208,0,13.968-2.784,19.028-7.856l183.96-183.952l183.952,183.952' +
			'c5.068,5.072,11.824,7.856,19.024,7.856h0.008c7.204,0,13.96-2.784,19.028-7.856l16.12-16.116' +
			'c5.06-5.064,7.852-11.824,7.852-19.028c0-7.204-2.792-13.96-7.852-19.028L300.188,246z">' +
			'</path>' +
		'</g>' +
	'</svg>';

	return exitIcon;
}