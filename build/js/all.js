var a=[49.83826,24.02324];google.maps.event.addDomListener(window,"load",function(){var e=new google.maps.LatLng(a[0],a[1]),o={zoom:12,streetViewControl:!1,scaleControl:!0,mapTypeId:google.maps.MapTypeId.ROADMAP,center:e};map=new google.maps.Map(document.getElementById("maps"),o),marker=new google.maps.Marker({position:e,map:map,draggable:!1,animation:google.maps.Animation.DROP})});