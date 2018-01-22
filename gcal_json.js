let url = 'https://www.googleapis.com/calendar/v3/calendars/de2pcr5r8offd01mmacsluiolg@group.calendar.google.com/events?key=AIzaSyD3cqITToGZckfgpzYcTAJspM8Nr_FZH3E';

fetch(url)
.then(res => res.json())
.then((out) => {
	let eventArray = out.items;
	console.log(eventArray);
})
.catch(err => { throw err });



let url = 'https://www.googleapis.com/calendar/v3/calendars/de2pcr5r8offd01mmacsluiolg@group.calendar.google.com/events?key=AIzaSyD3cqITToGZckfgpzYcTAJspM8Nr_FZH3E';

		fetch(url)
		.then(res => res.json())
		.then((out) => {
			var eventArray = out.items;

			for (var i = 0; i < eventArray.length; i++) {

			    if (eventArray[i].start.dateTime) {
			    	var sdt = new Date(eventArray[i].start.dateTime);
			    } else {
			     	var sdt = new Date(eventArray[i].start.date);
			    }
			    var start_date = sdt.getUTCFullYear() + '-' + sdt.getUTCMonth()+1 + '-' + sdt.getUTCDate();
			    var start_time = sdt.getUTCHours() + ':' + sdt.getUTCMinutes();

			    if (eventArray[i].end.dateTime) {
			    	var edt = new Date(eventArray[i].end.dateTime);
			    } else {
			     	var edt = new Date(eventArray[i].end.date);
			    }
			    var end_date = edt.getUTCFullYear() + '-' + edt.getUTCMonth()+1 + '-' + edt.getUTCDate();
			    var end_time = edt.getUTCHours() + ':' + edt.getUTCMinutes();
			    
			    //console.log('start_date: ' + start_date + ' - start_time: ' + start_time);
			    //console.log('end_date: ' + end_date + ' - end_time: ' + end_time);

			    sampleEventsArray.push({"id": i + 1,
										"name": eventArray[i].summary,
										"startdate": start_date,
										"enddate": end_time,
										"starttime": start_time,
										"endtime": end_time,
										"color": "#99CCCC",
										"url": ""});
			    
			}

			var sampleEvents = {
				"monthly": sampleEventsArray
			};
			
		})
		.catch(err => { throw err });