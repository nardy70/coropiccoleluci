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


// ------------------ Google Calendar API with Event Calendar -----------------
	var url = 'https://www.googleapis.com/calendar/v3/calendars/de2pcr5r8offd01mmacsluiolg@group.calendar.google.com/events?key=AIzaSyD3cqITToGZckfgpzYcTAJspM8Nr_FZH3E';
	
	$.ajax({url: url, success: function(result){
		//console.log(result);

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