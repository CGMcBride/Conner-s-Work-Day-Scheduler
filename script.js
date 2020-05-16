//alert("test");
//logic to style elements here
let myPast = $("#past");
let myPresent = $("#present");
let myFuture = $("#future");
//logic to render local storage
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#1 .description").val(localStorage.getItem("1"));
$("#2 .description").val(localStorage.getItem("2"));
$("#3 .description").val(localStorage.getItem("3"));
$("#4 .description").val(localStorage.getItem("4"));
$("#5 .description").val(localStorage.getItem("5"));
// on click events are at the bottom
$(".saveBtn").click(function () {
	let textValue = $(this).siblings(".description").val();
	// console.log(timeOne);
	let timeKey = $(this).parent().attr("id");
	// console.log(timeTwo);
	localStorage.setItem(timeKey, textValue);
});
$("#currentDay").text(moment().format("MMMM/Do/YYYY"));
