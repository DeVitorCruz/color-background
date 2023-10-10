"use strict";
const listColor = [
    {
        name: "--white",
        color: "#fff"
    },
    {
        name: "--blue",
        color: "#007bff"
    },
    {
        name: "--indigo",
        color: "#6610f2",
    },
    {
        name: "--purple",
        color: "#6f42c1"
    },
    {
        name: "--pink",
        color: "#e83e8c"
    },
    {
        name: "--red",
        color: "#dc3545",
    },
    {
        name: "--orange",
        color: "#fd7e14"
    },
    {
        name: "--yellow",
        color: "#ffc107"
    },
    {
        name: "--green",
        color: "#28c745"
    },
    {
        name: "--teal",
        color: "#20c997"
    },
    {
        name: "--cyan",
        color: "#17a2b8"
    },
    {
        name: "--gray",
        color: "#6c757d"
    },
    {
        name: "--gray-dark",
        color: "#343a40"
    },
    {
        name: "--primary",
        color: "#007bff"
    },
    {
        name: "--secondary",
        color: "#6c757d"
    },
    {
        name: "--success",
        color: "#28a745"
    },
    {
        name: "--info",
        color: "#17a2b8"
    },
    {
        name: "--warning",
        color: "#ffc107"
    },
    {
        name: "--danger",
        color: "#dc3545",
    },
    {
        name: "--light",
        color: "#f8f9fa"
    },
    {
        name: "--dark",
        color: "#343a40"
    }
];
let randomIndex = Math.floor(Math.random() * listColor.length);
$(document).ready(function () {
    $(window).on("load", function () {
        $("#hex-value").text(`${listColor[0].color}`);
    });
    $("#btn").click(function () {
        let currentIndex = Math.floor(Math.random() * listColor.length);
        while (randomIndex == currentIndex) {
            currentIndex = Math.floor(Math.random() * listColor.length);
        }
        $("#hex-value").text(`${listColor[currentIndex].color}`);
        $("body").css("background-color", `var(${listColor[currentIndex].name})`);
        randomIndex = currentIndex;
    });
});
