//alert("test");
//logic to style elements here

//logic to render local storage
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#1 .description");
// on click events are at the bottom
$(".saveBtn").click(function () {
	let textValue = $(this).siblings(".description").val();
	// console.log(timeOne);
	let timeKey = $(this).parent().attr("id");
	// console.log(timeTwo);
	localStorage.setItem(timeKey, textValue);
});
$("#currentDay").text(moment().format("MMMM/Do/YYYY"));
