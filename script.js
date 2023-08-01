function displayDateTime() {
    var dt = new Date();
    document.getElementById("date_time").innerHTML = dt;
}

displayDateTime();

setInterval(displayDateTime, 1000);