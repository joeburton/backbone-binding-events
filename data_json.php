<?php 

	include "config.php";
	
	$role = $_REQUEST['role'];
	
	//jQuery database if parameter = all show all
	if ($role == "all") {
		$query = "SELECT * FROM mycontacts";
	} else {
	//Query database return all results according to parameter passed
		$query = "SELECT * FROM mycontacts WHERE firstname = '" . $role . "'";
 	}	
	
	$rs = mysql_query($query);
	
	while($row = mysql_fetch_array($rs)) {
		$rows[] = array(
		"id" => $row['id'],
		"firstname" => $row['firstname'],
		"surname" => $row['surname']);
	}

	$json = json_encode($rows);
	print $json;
	
	mysql_close();

?>