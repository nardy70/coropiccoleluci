---
layout: none
title: Calendario
---

<link rel="stylesheet" href="assets/css/dhtmlxscheduler.css">

<div id="scheduler_here" class="dhx_cal_container" style="width:100%; height:100%; padding=20px">
    <div class="dhx_cal_navline">
        <div class="dhx_cal_prev_button">&nbsp;</div>
        <div class="dhx_cal_next_button">&nbsp;</div>
        <div class="dhx_cal_today_button"></div>
        <div class="dhx_cal_date"></div>
        <div class="dhx_cal_tab" name="day_tab" style="right:204px;"></div>
        <div class="dhx_cal_tab" name="week_tab" style="right:140px;"></div>
        <div class="dhx_cal_tab" name="month_tab" style="right:76px;"></div>
    </div>
    <div class="dhx_cal_header"></div>
    <div class="dhx_cal_data"></div>       
</div>

<script src="assets/js/dhtmlxscheduler.js"></script>
<script type="text/javascript">
    scheduler.init('scheduler_here', new Date(),"month");

    var events = [
        {id:1, text:"Meeting",   start_date:"01/11/2018 14:00",end_date:"01/11/2018 17:00"},
        {id:2, text:"Conference",start_date:"01/15/2018 12:00",end_date:"01/18/2018 19:00"},
        {id:3, text:"Interview", start_date:"01/24/2018 09:00",end_date:"01/24/2018 10:00"}
    ];

    scheduler.parse(events, "json");
</script>
