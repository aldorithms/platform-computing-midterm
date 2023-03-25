function setup() {
    document.getElementById("miles").onclick = function () { setUnits("K"); };
    document.getElementById("kilometers").onclick = function () { setUnits("M"); };
}

function setUnits(unit) {
    var label = document.getElementById("label");
    label.innerHTML = unit === "M" ? "miles" : "kilometers";
}

function convert() {
    var kilometersButton = document.getElementById("kilometers");
    var distance = document.getElementById("distance");

    if (kilometersButton.checked) {
        convertToKilometers(distance.value);
    } else {
        convertToMiles(distance.value);
    }
}

function convertToKilometers(distanceInMiles) {
    var distanceInKilometers = distanceInMiles * 1.609;
    document.getElementById("answer").innerHTML = distanceInMiles + " miles converts to " + distanceInKilometers.toFixed(1) + " kilometers";
}

function convertToMiles(distanceInKilometers) {
    var distanceInMiles = distanceInKilometers * 0.621;
    document.getElementById("answer").innerHTML = distanceInKilometers + " kilometers converts to " + distanceInMiles.toFixed(1) + " miles";
}
