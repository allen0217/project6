<!doctype html>
<html lang="en">

<html>
<head>
	<meta charset="utf-8"/>
	<title>Sign In</title>
		
	<link rel="stylesheet"  href="css/bootstrap.css" type="text/css"/>
	<link rel="stylesheet"  href="css/bootstrap-responsive.css" type="text/css"/> 
	<link rel="stylesheet" href="css/extra.css" type="text/css" media="screen" />
    <script type="text/javascript" src="js/jquery-1.6.2.min.js"></script>
    <script type="text/javascript" src="js/jquery.main.js"></script>

	<script type="text/javascript"> 
		function signin() 
		{ 
			if(username.value=="" || username.value==null) {
				document.getElementById("sign-in-error").innerHTML="Please enter a username";
				return;
			} else {
				document.getElementById("sign-in-error").innerHTML=" ";
			}
			
			if(password.value=="" || username.value==null) {
				document.getElementById("sign-in-error").innerHTML="Please enter a password";
			} else {
				document.getElementById("sign-in-error").innerHTML=" ";
			}
	
			if(username.value != "" && password.value!="") 
				window.location='sign-in-redirect.php?username='+username.value+"&password="+password.value; 
		}
	</script> 
</head>

<body>

<?php
    $error='';
	if(isset($_GET['error'])) {
		if($_GET['error']==11) $error='Username is not found';
		else if($_GET['error']==22) $error='Incorrect password. Please try again';
		else if($_GET['error']==33) $error='Sorry! System error.';
		else $error='';
	}
?>

	<div class="navbar navbar-fixed-top">
		<div class="navbar-inner">
			<div class="container">
				<a class="brand" href="#">UT Dallas</a>
					<div class="nav-collapse">
					<ul class="nav">
						<li class="active"><a href="sign-in.php">Sign In</a></li>
						<li><a href="sign-up.php">Sign Up</a></li>
					</ul>
				</div><!--/.nav-collapse -->
			</div>
		</div>
	</div>
	<div class="container">
			<div class="hero-unit">
	<table>
	<tr><td width="65%">
		<h2>Department Room Reservation System</h2>
		<br>
		<br>
		<br>
		<br>
		<br>
	</td>
	<td width="25%">
		<br>
		<br>
		<br>
		<br>
		<br>
		<form class="form-signin" name="form" action="javascript: signin()" method="post">
			<div><span id="sign-in-error"><?php echo $error; ?></span>&nbsp;</div>
			<input style="width: 260px;" id="username" name="username" type="text" class="input-block-level" placeholder="Username" <?php if(isset($_GET['error'])) echo 'value='.$_GET['username'];?> >
			<input style="width: 260px;" id="password" name="password" type="password" class="input-block-level" placeholder="Password">
			<label class="checkbox">
				<input type="checkbox" value="remember-me">Remember Me
			</label>
			<input class="btn btn-large btn-primary" type="submit" value="Login" name="submit" />
		</form>
	</td>
	</tr>
	</table>

	</div>	
	<hr>
	<footer>
		<p>Department of Computer Science<br>
		University of Texas at Dallas<br>
		800 W Campbell Rd, Richardson, TX 75080
		</p>
	</footer>
	</div>    		

</body>
</html>