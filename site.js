
var c = 5;
var t;
var timeElemet = document.getElementById("time-txt");

function timedCount() {
    // timeElemet.value = c;
    // console.log(c, timeElemet);
    c -= 1;
    t = setTimeout(function(){ timedCount() }, 1000);
    if( c == 0) {
        window.location.assign("http://nnduc.me/?utm_campaign=redirect&utm_medium=email&utm_source=newsletter&utm_content=toplink")
    }
}