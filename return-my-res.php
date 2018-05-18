<?php
session_start();
			
$tem22=$_GET['q'];


$con = mysqli_connect($_SERVER['testdbinstance.cldcdyf6htnq.us-west-2.rds.amazonaws.com'], $_SERVER['testuser'], $_SERVER['users'], $_SERVER['RDS_DB_NAME'], $_SERVER['3306']);
mysqli_select_db('reservation',$con) or die ("can not select DB");


mysqli_query("delete from reservation where res_id=$tem22");

header("Location:my-res.php");
?>