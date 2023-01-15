var points = 0;
let increment = 1;
window.setInterval( 
    function pointgen() {
        points = points + increment;
    }, 1000);

    window.setInterval(
        function update() {
            document.getElementById("points").innerHTML ="Points: " + points;
            document.getElementById("persecond").innerHTML = "Points/second: " + increment;
        }, 10);


function upgrade1() {
    if (points >= 10 ){
        points = points - 10;
        increment = increment * 2;
        document.getElementById("upgrade-1").style.pointerEvents = "none";
        document.getElementById("upgrade-1").style.backgroundColor = "#013001";
    }
};

function upgrade2() {
    if (points >= 50 ){
        points = points - 50;
        document.getElementById("upgrade-2").style.pointerEvents = "none";
        document.getElementById("upgrade-2").style.backgroundColor = "#013001";
    }
};

function upgrade3() {
    if (points >= 10 ){
        points = points - 10;
        increment = increment * 2;
        document.getElementById("upgrade-3").style.pointerEvents = "none";
        document.getElementById("upgrade-3").style.backgroundColor = "#013001";
    }
};