function initialize() {
            var mapCanvas = document.getElementById('map');
            var mapOptions = {
              center: new google.maps.LatLng(52.66634, -8.637348),
              zoom: 13,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(mapCanvas, mapOptions)
          };
          google.maps.event.addDomListener(window, 'load', initialize);