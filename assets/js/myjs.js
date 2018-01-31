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


// ------------------ Google Calendar API with jquery e-calendar -----------------
	var url = 'https://www.googleapis.com/calendar/v3/calendars/de2pcr5r8offd01mmacsluiolg@group.calendar.google.com/events?key=AIzaSyD3cqITToGZckfgpzYcTAJspM8Nr_FZH3E';
	
	$.ajax({url: url, success: function(result){
		//console.log('results: ', result);

        var eventArray = result.items;
        var eventsData = [];

    	for (var i = 0; i < eventArray.length; i++) {

		    if (eventArray[i].start.dateTime) {
		    	var sdt = moment(eventArray[i].start.dateTime);
		    	var dt = moment.utc(sdt).utcOffset(60).format('llll').toString();
		    } else {
		     	var sdt = moment(eventArray[i].start.date);
		     	var dt = moment(sdt).format('llll').toString();
		    }

		    eventsData.push({
		    	title: eventArray[i].summary,
		    	description: eventArray[i].description,
		    	datetime: new Date(dt)
			});
		    
		}

		$('#e-calendar').eCalendar({
			events: eventsData
		});

	}});


// -------------------------- Lightbox Effect fancybox -------------------------
    var addToAll = false;
    var gallery = false;
    var titlePosition = 'inside';
    $(addToAll ? 'img' : 'img.fancybox').each(function(){
        var $this = $(this);
        var title = $this.attr('title');
        var src = $this.attr('data-big') || $this.attr('src');
        var a = $('<a href="#" class="fancybox"></a>').attr('href', src).attr('title', title);
        $this.wrap(a);
    });
    if (gallery)
        $('a.fancybox').attr('rel', 'fancyboxgallery');
    $('a.fancybox').fancybox({
        titlePosition: titlePosition
    });
   $.noConflict();
    
})(jQuery);