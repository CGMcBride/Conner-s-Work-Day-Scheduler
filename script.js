//alert("test");
//logic to style elements here
let myPast = $("#past");
let myPresent = $("#present");
// added the future class for the green color in the time block to show availbe
let myFuture = $("#future");
//logic to render local storage
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));
// on click events are at the bottom
$(".saveBtn").click(function () {
	let textValue = $(this).siblings(".description").val();
	// console.log(textValue);
	let timeKey = $(this).parent().attr("id");
	// console.log(timeKey);
	localStorage.setItem(timeKey, textValue);
});
$("#currentDay").text(moment().format("MMMM/Do/YYYY"));
let currentHour = moment().hour();
console.log(currentHour);
