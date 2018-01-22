/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	// ------------------------- Random background image --------------------------
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
	// ----------------------------------------------------------------------------

	// -------------------------- Google Calendar API -----------------------------

	var url = 'https://www.googleapis.com/calendar/v3/calendars/de2pcr5r8offd01mmacsluiolg@group.calendar.google.com/events?key=AIzaSyD3cqITToGZckfgpzYcTAJspM8Nr_FZH3E';
	
	$.ajax({url: url, success: function(result){
		console.log(result);

        var eventArray = result.items;
        var eventsData = [];

    	for (var i = 0; i < eventArray.length; i++) {

		    if (eventArray[i].start.dateTime) {
		    	var sdt = moment(eventArray[i].start.dateTime);
		    	var start_time = moment.utc(sdt).utcOffset(60).format('HH:mm');
		    	var start_date = moment(sdt).utcOffset(60).format('YYYY-MM-DD');
		    } else {
		     	var sdt = moment(eventArray[i].start.date);
		     	var start_time = '';
		     	var start_date = moment(sdt).format('YYYY-MM-DD');
		    }
		    
		    if (eventArray[i].end.dateTime) {
		    	var edt = moment(eventArray[i].end.dateTime);
		    	var end_time = moment.utc(edt).utcOffset(60).format('HH:mm');
		    	var end_date = moment(edt).utcOffset(60).format('YYYY-MM-DD');
		    } else {
		     	var edt = moment(eventArray[i].end.date);
		     	var end_time = '';
		     	var end_date = moment(edt).format('YYYY-MM-DD');
		    }

		    eventsData.push({
		    	"id": i + 1,
				"name": eventArray[i].summary,
				"startdate": start_date,
				"enddate": end_date,
				"starttime": start_time,
				"endtime": end_time,
				"color": "#F9E634",
				"url": ""
			});
		    
		}

		var e_data = { "monthly": eventsData }

        $('#mycalendar').monthly({
			mode: 'event',
			dataType: 'json',
			events: e_data
		});

	}});
	// ---------------------- Finish Google Calendar API --------------------------


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
