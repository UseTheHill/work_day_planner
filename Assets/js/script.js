$(function () {});

//variables
let today = moment().format("dddd,MMM Do");

let now = moment().format("H A");

let planner = [
    {time: "9 AM", event: ""},
    {time: "10 AM", event: ""},
    {time: "11 AM", event: ""},
    {time: "12 PM", event: ""},
    {time: "1 PM", event: ""},
    {time: "2 PM", event: ""},
    {time: "3 PM", event: ""},
    {time: "4 PM", event: ""},
    {time: "5 PM", event: ""},
];

// get localstorage
let events = JSON.parse(localStorage.getItem("workDay"));

if (events) {
    planner = events;
};

//display current day and date
$('#currentDay').text(today);