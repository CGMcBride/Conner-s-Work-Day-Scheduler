//alert("test");
//logic to style elements here

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
// when you click save btn the information will be stored in local storage
$(".saveBtn").click(function () {
	let textValue = $(this).siblings(".description").val();
	// console.log(textValue);
	let timeKey = $(this).parent().attr("id");
	// console.log(timeKey);
	localStorage.setItem(timeKey, textValue);
});
// this is where we show the current time and date
$("#currentDay").text(moment().format("MMMM/Do/YYYY"));
//  line 25 we are getting the current hour the change the color
let currentHour = moment().hour();
console.log(currentHour);

let time = [9, 10, 11, 12, 13, 14, 15, 16, 17];
for (let i = 0; i < time.length; i++) {
	// console.log(i);
	console.log(time[i]);
	// line 29 for was created to refence time and the lenght of the array
	if (currentHour < time[i]) {
		console.log(currentHour);

		$("#" + time[i])
			.removeClass("present")
			.addClass("future");
	} else if (currentHour > time[i]) {
		console.log(currentHour);

		$("#" + time[i])
			.removeClass("present")
			.addClass("past");
	}
}
