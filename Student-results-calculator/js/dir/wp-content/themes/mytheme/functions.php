<?php

update_option('siteurl','http://www.myresultscalculator.com/dir');
update_option('home','http://www.myresultscalculator.com/dir');
?>
<?php

	// Register Custom Navigation Walker
	require_once('wp_bootstrap_navwalker.php');

	register_nav_menus( array(
		'primary' => __( 'Primary Menu', 'BS3 Triskele Yoga' ),
	) );

?>