---
layout: page
title: Galleria Immagini
description: Alcune immagini delle nostre esibizioni.
---

<div id="slider1" style="text-align:center">
	{% for img in site.data.images %}
		<div><img src="assets/images/gallery/{{ img.name }}" title="{{ img.text }}" /></div>
	{% endfor %}
</div>


