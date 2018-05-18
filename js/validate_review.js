$(document).ready(function() {

    $("#warning").hide();

    var lengthofRegex = new RegExp("^.{10,140}$");

    //Override default Enter-key behavior
    $("#reviewform").keypress(function(event) {
        if (event.which == 13) {
            event.preventDefault();
            $("#reviewform").submit();
        }
    });

    //Submit form
    $("#reviewform").submit(function(event) {
    	if (lengthofRegex.test($("#new_review").val())==true) {
    		return true;
    	}
    	else {
    		$("#warning").show();
    		return false;
    	}
    });
});