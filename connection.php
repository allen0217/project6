<?php
    $dbhost = "testdbinstance.cldcdyf6htnq.us-west-2.rds.amazonaws.com";
    $dbusername = "testuser";
    $dbpassword = "testdbinstance";
    $dbname = "users";

    $con = mysqli_connect($dbhost, $dbusername, $dbpassword);
    if (!$con) {
        die('Could not connect: ' . mysqli_error($con));
    }
	
	mysqli_select_db($con, $dbname);
?>