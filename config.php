<?php
	
	$dbhost="localhost";
	$dbusername="root";
	$dbpassword="";
	$dbname="dev";
	
	// Connect to Mysql
	$connect = mysql_connect($dbhost, $dbusername, $dbpassword);

	//Select the correct database.
	mysql_select_db($dbname,$connect) or die ("Could not select database");
	
?>