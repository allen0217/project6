setInterval(function() {
    countdown()
}, 1000);

function countdown() {
    var i = document.getElementById("countdown").innerHTML;
    i = parseInt(i);
    if (i == 1) {
        window.location = 'index.php';
    }
    i--;
    if (i < 0)
        document.getElementById("countdown").innerHTML = 0;
    else
        document.getElementById("countdown").innerHTML = i;
}