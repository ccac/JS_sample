var timeavg = 0,
    timetotal = 0,
    i = 1;
sdate = [];

var loadScript = function(index, cb) {
    sdate[index] = +new Date();
    $.ajaxSetup({
        cache: true
    });
    $.get("http://mschart.morningstar.com/chartweb/js/min/priceChart.min-2.0.3.js", {},
        function(data) {
            timetotal += +new Date() - sdate[index];
            console.log(+new Date() - sdate[index]);
            cb();
        });
}
var looper = function() {
    loadScript(i++, function() {
        if (i <= 50) {
            setTimeout(looper, 10);
        } else {
            console.log("avg: " + timetotal / i);
        }
    });
}
setTimeout(looper, 10);