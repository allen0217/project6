<?php
session_start();
$username=$_POST["try"];

$_SESSION['temp1']=$username;

echo $_SESSION['temp1'];





/*$con = mysql_connect('localhost','root','') or die(mysql_error());
mysql_select_db('reservation',$con) or die ("can not select DB");
$role=$_SESSION['sess_role11'];
$first_name=$_SESSION['sess_fn11'];
$last_name=$_SESSION['sess_ln11'];
$email=$_SESSION['sess_email11'];
$phone=$_SESSION['sess_phone11'];
$password=$_SESSION['sess_fp11'];
$address=$_SESSION['sess_addr11'];
$city=$_SESSION['sess_city11'];
$state=$_SESSION['sess_state11'];
$zip=$_SESSION['sess_ZIP'];

mysql_query("INSERT INTO user(user_id,role,first_name,last_name,email,phone,password,address,city,state,ZIP) VALUES(null,'$role','$first_name',
'$last_name','$email',
'$phone','$password','$address','$city',
'$state','$zip')");

echo "congradulations! your sign-up name is:", $email,'<br />';
echo "password is:",$password;*/
?>