$(document).ready(function() {
    $("#messageem").hide();
    $("#messagepw").hide();
    $("#messagecfpw").hide();
    $("#messagebr").hide();

    var emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    var nameRegex = /^[A-Za-z-]{0,16}$/;

    // Must have capitals, lowers, numbers, specials
    var strongRegex = new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.{6,16})(?=.*[!,@,#,$,%,\^,&,*,?,_,~]).*$");
    var mediumRegex = new RegExp("^(?=.{6,16})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$");
    // Must be at least 6 characters long
    var lengthofRegex = new RegExp("^(?=.{6,16}).*$");

    //Check email duplication
    $("#email").on('keyup', function() {

        var email = $("#email").val();
        $.ajax({
            type: "post",
            url: "check_email.php",
            data: "email=" + email,
            success: function(data) {
                if (data) {
                    $("#messageem").show().html("Email already taken");
                    $("#email").removeClass("valid").addClass("invalid");
                    $("#embox").removeClass("has-success").removeClass("has-warning").addClass("has-error");
                    $("#emicon").removeClass("glyphicon-ok").removeClass("glyphicon-warning-sign").addClass("glyphicon-remove");
                } else if (email == "") {
                    $("#messageem").show().html("Cannot be empty");
                    $("#email").removeClass("valid").addClass("invalid");
                    $("#embox").removeClass("has-success").removeClass("has-warning").addClass("has-error");
                    $("#emicon").removeClass("glyphicon-ok").removeClass("glyphicon-warning-sign").addClass("glyphicon-remove");
                } else if (emailRegex.test(email) == false) {
                    $("#messageem").show().html("Invalid format");
                    $("#email").removeClass("valid").addClass("invalid");
                    $("#embox").removeClass("has-success").removeClass("has-warning").addClass("has-error");
                    $("#emicon").removeClass("glyphicon-ok").removeClass("glyphicon-warning-sign").addClass("glyphicon-remove");
                } else {
                    $("#messageem").hide().html("Success");
                    $("#email").removeClass("invalid").addClass("valid");
                    $("#embox").removeClass("has-error").removeClass("has-warning").addClass("has-success");
                    $("#emicon").removeClass("glyphicon-remove").removeClass("glyphicon-warning-sign").addClass("glyphicon-ok");
                }
            }
        });
    });

    //Check password
    $('#password, #cfpassword').on('keyup', function() {
        var pw = $('#password').val();
        var cfpw = $('#cfpassword').val();

        if (pw == '' && cfpw == '') {
            $('#messagepw').show().html('Cannot be empty');
            $('#messagecfpw').show().html('Cannot be empty');
            $("#password").removeClass("valid").addClass("invalid");
            $("#cfpassword").removeClass("valid").addClass("invalid");
            $("#pwbox").removeClass("has-success").removeClass("has-warning").addClass("has-error");
            $("#pwicon").removeClass("glyphicon-ok").removeClass("glyphicon-warning-sign").addClass("glyphicon-remove");
            $("#cfpwbox").removeClass("has-success").removeClass("has-warning").addClass("has-error");
            $("#cfpwicon").removeClass("glyphicon-ok").removeClass("glyphicon-warning-sign").addClass("glyphicon-remove");
        }

        if (pw != '' && cfpw != '' && pw != cfpw) {
            $('#messagecfpw').show().html('Passwords do not match');
            $("#cfpassword").removeClass("valid").addClass("invalid");
            $("#cfpwbox").removeClass("has-success").removeClass("has-warning").addClass("has-error");
            $("#cfpwicon").removeClass("glyphicon-ok").removeClass("glyphicon-warning-sign").addClass("glyphicon-remove");
        } else if (pw != '' && cfpw != '' && pw == cfpw) {
            $('#messagecfpw').hide().html('Success');
            $("#cfpassword").removeClass("invalid").addClass("valid");
            $("#cfpwbox").removeClass("has-error").removeClass("has-warning").addClass("has-success");
            $("#cfpwicon").removeClass("glyphicon-remove").removeClass("glyphicon-warning-sign").addClass("glyphicon-ok");
        }

        if (lengthofRegex.test(pw) == false) {
            //pw length < 6 or > 16
            $('#messagepw').show().html('At least 6 characters long');
            $("#password").removeClass("valid").addClass("invalid");
            $("#pwbox").removeClass("has-success").removeClass("has-warning").addClass("has-error");
            $("#pwicon").removeClass("glyphicon-ok").removeClass("glyphicon-warning-sign").addClass("glyphicon-remove");
        } else if (strongRegex.test(pw) == true) {
            //pw strong
            $('#messagepw').hide().html('Success');
            $("#password").removeClass("invalid").addClass("valid");
            $("#pwbox").removeClass("has-error").removeClass("has-warning").addClass("has-success");
            $("#pwicon").removeClass("glyphicon-remove").removeClass("glyphicon-warning-sign").addClass("glyphicon-ok");
        } else if (mediumRegex.test(pw) == true) {
            //pw medium
            $('#messagepw').show().html('Medium');
            $("#password").removeClass("invalid").addClass("valid");
            $("#pwbox").removeClass("has-error").removeClass("has-warning").addClass("has-success");
            $("#pwicon").removeClass("glyphicon-remove").removeClass("glyphicon-warning-sign").addClass("glyphicon-ok");
        } else {
            //pw weak
            $('#messagepw').show().html('Combine letters, numbers, special chars');
            $("#password").removeClass("valid").addClass("invalid");
            $("#pwbox").removeClass("has-success").removeClass("has-warning").addClass("has-error");
            $("#pwicon").removeClass("glyphicon-ok").removeClass("glyphicon-warning-sign").addClass("glyphicon-remove");
        }
    });

    // //Check name
    // $("#fname").on('keyup', function() {
    //     var fname = $("#fname").val();
    //     if (nameRegex.test(fname) == false) {
    //         $("#messagefn").html("Invalid");
    //         $("#fname").removeClass("valid").addClass("invalid");
    //     } else {
    //         $("#messagefn").html("");
    //         $("#fname").removeClass("invalid").addClass("valid");
    //     }
    // });

    // $("#lname").on('keyup', function() {
    //     var lname = $("#lname").val();
    //     if (nameRegex.test(lname) == false) {
    //         $("#messageln").html("Invalid");
    //         $("#lname").removeClass("valid").addClass("invalid");
    //     } else {
    //         $("#messageln").html("");
    //         $("#lname").removeClass("invalid").addClass("valid");
    //     }
    // });

	$('#branchid').on('change', function() {
		if ($("#branchid").val() == -1) {
            $('#messagebr').show().html('Must select a branch');
            $("#brbox").removeClass("has-success").removeClass("has-warning").addClass("has-error");
        }
        else{
        	$('#messagebr').hide().html('Must select a branch');
            $("#brbox").removeClass("has-error").removeClass("has-warning").addClass("has-success");
        }

	});

    //Override default Enter-key behavior
    $("#signupform").keypress(function(event) {
        if (event.which == 13) {
            event.preventDefault();
            $("#signupform").submit();
        }
    });

    //Submit form
    $("#signupform").submit(function(event) {
        var form_data = $("#signupform").find("input,select").filter(".invalid").serialize();
        if (form_data == 0) {
            if ($("#branchid").val() == -1) {
                $('#messagebr').show().html('Must select a branch');
                $("#brbox").removeClass("has-success").removeClass("has-warning").addClass("has-error");

                return false;
            } else
                return true;
        } else {
            if ($('#email').val() == "") {
                $("#messageem").show().html("Cannot be empty");
                $("#embox").removeClass("has-success").removeClass("has-warning").addClass("has-error");
                $("#emicon").removeClass("glyphicon-ok").removeClass("glyphicon-warning-sign").addClass("glyphicon-remove");
            }
            if ($('#password').val() == '') {
                $('#messagepw').show().html('Cannot be empty');
                $("#pwbox").removeClass("has-success").removeClass("has-warning").addClass("has-error");
                $("#pwicon").removeClass("glyphicon-ok").removeClass("glyphicon-warning-sign").addClass("glyphicon-remove");
            }
            if ($('#cfpassword').val() == '') {
                $('#messagecfpw').show().html('Cannot be empty');
                $("#cfpwbox").removeClass("has-success").removeClass("has-warning").addClass("has-error");
                $("#cfpwicon").removeClass("glyphicon-ok").removeClass("glyphicon-warning-sign").addClass("glyphicon-remove");
            }

            if ($("#branchid").val() == -1) {
                $('#messagebr').show().html('Must select a branch');
                $("#brbox").removeClass("has-success").removeClass("has-warning").addClass("has-error");
            }
            return false;
        }
    });

});