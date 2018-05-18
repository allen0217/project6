
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
	
	function delcfm(str) { 
	
     var r=confirm("delete?");
	  var   tmp;  
          

	if (r==true)
	  {
	  
			location.href="return-all-res.php?q="+str;

	  }
	else
	  {
	  alert("You pressed Cancel!");
	  }
	}
