<?php
/*
Template Name: contact
*/
?>
<?php get_header(); ?>
<!-- .content-area -->
<div id="primary" class="contact-page text-center">
	<h1 style="color:black">CONTACT US</h1>
	<hr>
</div>
<div class="container">
	<div class="row contact-details-section">
		<div class="col-sm-7 contact-form-text">
			<p>
				Contact us and we'll get back to you as soon as possible.
			</p>
			<p>
				<span class="glyphicon glyphicon-map-marker"></span>
			 Bundoran, Co. Donegal, Ireland
			</p>
			<p>
				<span class="glyphicon glyphicon-phone"></span> +353 860000000
			</p>
			<p>
				<span class="glyphicon glyphicon-envelope"></span> triskeleyoga@gmail.com
			</p>
		</div>
		<div class="col-sm-5">
			<div class="row">
				<div class="col-sm-6 form-group">
					<input class="form-control" id="name" name="name" placeholder="Name" type="text" required>
				</div>
				<div class="col-sm-6 form-group">
					<input class="form-control" id="email" name="email" placeholder="Email" type="email" required>
				</div>
			</div>
			<textarea class="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea>
			<br>
			<div class="row">
				<div class="col-sm-12 form-group">
					<button class="btn btn-default pull-right" type="submit">Send</button>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- Add Google Maps -->
<div id="map"></div>
<script src="http://maps.googleapis.com/maps/api/js"></script>
<script>

	function initMap() {
		var mapDiv = document.getElementById('map');
		var map = new google.maps.Map(mapDiv, {
			center: {lat: 54.4791, lng: -8.27991},
			zoom: 12
		});
	}

</script>
<script async defer
		src="https://maps.googleapis.com/maps/api/js?key= AIzaSyCUv656LUquUlK9aTwZT5-CohWEn6i1b78&callback=initMap">
</script>


<?php get_footer(); ?>
