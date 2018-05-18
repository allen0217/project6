//Login shake effect
$(document).ready(function() {
    $('#login').click(function() {
        var email = $("#email").val();
        var password = $("#password").val();
        var dataString = 'email=' + email + '&password=' + password;
        if ($.trim(email).length > 0 && $.trim(password).length > 0) {
            $.ajax({
                type: "post",
                url: "getresult.php",
                data: dataString,
                cache: false,
                beforeSend: function() {
                    $("#login").val('Connecting...');
                },
                success: function(data) {
                    if (data) {
                        $("body").load("./Main/home.php").hide().fadeIn(1500).delay(6000);
                        window.location.href = "./Main/home.php";
                    } else {
                        //Shake animation effect.
                        $('#shakeit').shake();
                        $("#login").val('Sign in');
                        $("#errorbox").removeClass("hidereserve");
                        $("#error").html("Invalid email and/or password");
                    }
                }
            });

        }
        else {
        	//Shake animation effect.
            $('#shakeit').shake();
        	$("#login").val('Sign in');
            $("#errorbox").removeClass("hidereserve");
            $("#error").html("Both email and password are required");
        }
        return false;
    });

});