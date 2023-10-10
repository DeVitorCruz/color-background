"use strict";
const listColor = [
    "--blue",
    "--indigo",
    "--purple",
    "--pink",
    "--red",
    "--orange",
    "--yellow",
    "--green",
    "--teal",
    "--cyan",
    "--white",
    "--gray",
    "--gray-dark",
    "--primary",
    "--secondary",
    "--success",
    "--info",
    "--warning",
    "--danger",
    "--light",
    "--dark"
];
let randomIndex = Math.floor(Math.random() * listColor.length);
$(document).ready(function () {
    $("#btn").click(function () {
        let currentIndex = Math.floor(Math.random() * listColor.length);
        while (randomIndex == currentIndex) {
            currentIndex = Math.floor(Math.random() * listColor.length);
        }
        $("body").css("background-color", `var(${listColor[currentIndex]})`);
        randomIndex = currentIndex;
    });
});
