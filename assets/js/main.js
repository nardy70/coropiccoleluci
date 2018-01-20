/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	// Random background image
	var images = [];
	var nr_img = 7;

	for (var i = 1; i < nr_img + 1; i++) {
	    images.push('banner' + i + '.jpg');
	}

	$('body.landing').css({
		'background-image': 'url(assets/images/' + images[Math.floor(Math.random() * images.length)] + ')',
		'background-repeat': 'no-repeat',
		'background-attachment': 'fixed',
		'background-size': 'cover'
	});

	// ------------ Start Events --------------------
	var sampleEvents = {
	"monthly": [
		{
		"id": 1,
		"name": "Whole month event",
		"startdate": "2018-01-01",
		"enddate": "2018-01-31",
		"starttime": "12:00",
		"endtime": "2:00",
		"color": "#99CCCC",
		"url": ""
		},
		{
		"id": 2,
		"name": "Test encompasses month",
		"startdate": "2018-01-29",
		"enddate": "2018-02-02",
		"starttime": "12:00",
		"endtime": "2:00",
		"color": "#CC99CC",
		"url": ""
		},
		{
		"id": 3,
		"name": "Test single day",
		"startdate": "2018-2-04",
		"enddate": "",
		"starttime": "",
		"endtime": "",
		"color": "#666699",
		"url": "https://www.google.com/"
		},
		{
		"id": 8,
		"name": "Test single day",
		"startdate": "2018-03-05",
		"enddate": "",
		"starttime": "",
		"endtime": "",
		"color": "#666699",
		"url": "https://www.google.com/"
		},
		{
		"id": 4,
		"name": "Test single day with time",
		"startdate": "2018-01-07",
		"enddate": "",
		"starttime": "12:00",
		"endtime": "02:00",
		"color": "#996666",
		"url": ""
		},
		{
		"id": 5,
		"name": "Test splits month",
		"startdate": "2018-01-25",
		"enddate": "2016-12-04",
		"starttime": "",
		"endtime": "",
		"color": "#999999",
		"url": ""
		},
		{
		"id": 6,
		"name": "Test events on same day",
		"startdate": "2018-01-25",
		"enddate": "",
		"starttime": "",
		"endtime": "",
		"color": "#99CC99",
		"url": ""
		},
		{
		"id": 7,
		"name": "Test events on same day",
		"startdate": "2018-01-25",
		"enddate": "",
		"starttime": "",
		"endtime": "",
		"color": "#669966",
		"url": ""
		},
		{
		"id": 9,
		"name": "Test events on same day",
		"startdate": "2018-01-25",
		"enddate": "",
		"starttime": "",
		"endtime": "",
		"color": "#999966",
		"url": ""
		}
	]
	};

	$(window).load( function() {
	    $('#mycalendar').monthly({
			mode: 'event',
			dataType: 'json',
			events: sampleEvents
		});
	});
	// -------- Finish Evens ----------------------------


	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#page-wrapper'),
			$banner = $('#banner'),
			$header = $('#header');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Mobile?
			if (skel.vars.mobile)
				$body.addClass('is-mobile');
			else
				skel
					.on('-medium !medium', function() {
						$body.removeClass('is-mobile');
					})
					.on('+medium', function() {
						$body.addClass('is-mobile');
					});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Scrolly.
			$('.scrolly')
				.scrolly({
					speed: 1500,
					offset: $header.outerHeight()
				});

		// Menu.
			$('#menu')
				.append('<a href="#menu" class="close"></a>')
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right',
					target: $body,
					visibleClass: 'is-menu-visible'
				});

		// Header.
			if (skel.vars.IEVersion < 9)
				$header.removeClass('alt');

			if ($banner.length > 0
			&&	$header.hasClass('alt')) {

				$window.on('resize', function() { $window.trigger('scroll'); });

				$banner.scrollex({
					bottom:		$header.outerHeight() + 1,
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt'); },
					leave:		function() { $header.removeClass('alt'); }
				});

			}

	});

})(jQuery);
