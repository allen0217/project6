<!doctype html>
<html lang="en">

<head>
	<meta charset="utf-8"/>
	<title>New Reservation</title>
	
	<link rel="stylesheet" href="css/layout.css" type="text/css" media="screen" />
	<link rel="stylesheet" href="css/extra.css" type="text/css" media="screen" />
	
	<script src="js/jquery-1.5.2.min.js" type="text/javascript"></script>
	<script src="js/hideshow.js" type="text/javascript"></script>
	<script src="js/jquery.tablesorter.min.js" type="text/javascript"></script>
	<script type="text/javascript" src="js/jquery.equalHeight.js"></script>
	
	<script type="text/javascript">
	$(document).ready(function() 
	{ 
		$(".tablesorter").tablesorter(); 
	});
	$(document).ready(function() {
		//When page loads...
		$(".tab_content").hide(); //Hide all content
		$("ul.tabs li:first").addClass("active").show(); //Activate first tab
		$(".tab_content:first").show(); //Show first tab content
		//On Click Event
		$("ul.tabs li").click(function() {

			$("ul.tabs li").removeClass("active"); //Remove any "active" class
			$(this).addClass("active"); //Add "active" class to selected tab
			$(".tab_content").hide(); //Hide all tab content
	
			var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
			$(activeTab).fadeIn(); //Fade in the active ID content
			return false;
		});
	});
	</script>
	<script type="text/javascript">
	$(function(){
		$('.column').equalHeight();
	});
	</script>
</head>

<body>
	<section id="main" class="column">	
	<article class="module width_full">
	<header><h3 class="tabs_involved2">New Reservation</h3></header>
		<div class="tab_container">
			<div class="message_list">
				<div class="tab_content">
				<table class="tablecontainer2" cellspacing="5px"> 
				<tr>
				<td style="width:30%;">
				<fieldset2 style="float:left; margin-right: 2%; margin-left: 2%;"> 
					<fieldset style="float:left; margin-right: 2%; margin-left: 2%;">
						<label>专利名称</label>
						<input type="text" style="width:92%;">
					</fieldset>
					
					<fieldset style="float:left; margin-right: 2%; margin-left: 2%;">
						<label>专利类型</label>
						<select style="width:96%;">
							<option></option>
							<option>实用新型</option>
							<option>发明</option>
							<option>外观设计</option>
							<option>商业机密</option>
						</select>
					</fieldset>
					
					<fieldset style="float:left; margin-right: 2%; margin-left: 2%;"> 
						<label>相关项目</label>
						<select style="width:96%;">
							<option></option>
							<option>青龙项目</option>
							<option>虚拟试衣项目</option>
							<option>自提柜项目</option>
					</fieldset>
				</fieldset2>
				</td>
				<td style="width:30%;">
					<fieldset2 style="float:left; margin-right: 2%; margin-left: 2%;"> 
						<fieldset style="float:left; margin-right: 2%; margin-left: 2%;"> 
							<label>撰写人姓名</label>
							<input type="text" style="width:85%;">
						</fieldset>
						<fieldset style="float:left; margin-right: 2%; margin-left: 2%;"> 
							<label>撰写人邮箱</label>
							<input type="text" style="width:85%;">
						</fieldset>
						<fieldset style="float:left; margin-right: 2%; margin-left: 2%;">
							<label>撰写人部门</label>
							<input type="text" style="width:85%;">
						</fieldset>
					</fieldset2>
					</td>
					<td style="width:30%;">
					<fieldset2 style="float:left; margin-right: 2%; margin-left: 2%;">
						<fieldset style="float:left; margin-right: 2%; margin-left: 2%;">
							<label>第1发明人</label>
							<input type="text" style="width:85%;">
						</fieldset>
						<fieldset style="float:left; margin-right: 2%; margin-left: 2%;">
							<label>第1发明人身份证</label>
							<input type="text" style="width:85%;">
						</fieldset>
						<fieldset style="float:left; margin-right: 2%; margin-left: 2%;">
							<label>其他发明人（多个姓名以空格分开）</label>
							<input type="text" style="width:85%;">
						</fieldset>
					</fieldset2>
					</td>
					</tr>
					</table>
				</div></div></div>
			<footer>
				<div class="submit_link4">
					<button type="submit" class="new_patent">下一步</button>
					<button type="submit" class="new_patent">保存</button>
					<button type="submit" class="new_patent">退出</button>
				</div>
			</footer>
		</article>	
	</section>
</body>
