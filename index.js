function show(){
    document.getElementById('sidebar').classList.toggle('active');
}


window.onload = function () {
	window.addEventListener('scroll', function (e) {
		if (window.pageYOffset > 100) {
			document.querySelector("header").classList.add('is-scrolling');
		} else {
			document.querySelector("header").classList.remove('is-scrolling');
		}
	});

	const menu_btn = document.querySelector('.hamburger');
	const mobile_menu = document.querySelector('.mobile-nav');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
	});
}

function getFirstWednesdays(year) {
  const firstWednesdays = [];

  for (let month = 0; month < 12; month++) {
    const firstDayOfMonth = new Date(year, month, 1);
    const dayOfWeek = firstDayOfMonth.getDay();
    const daysUntilWednesday = (3 - dayOfWeek + 7) % 7; // Calculate days until Wednesday

    const firstWednesdayOfMonth = new Date(year, month, 1 + daysUntilWednesday);
    firstWednesdays.push(firstWednesdayOfMonth);
  }

  return firstWednesdays;
}

function removePastDates(dateArray) {
  const currentDate = new Date();
  const futureDates = dateArray.filter(date => new Date(date) > currentDate);
  return futureDates;
}

const firstWednesdays = getFirstWednesdays(2024);
const futureFirstWednesdays = removePastDates(firstWednesdays);
console.log(firstWednesdays)

var countDownDate = new Date(futureFirstWednesdays[0]).getTime();

document.getElementById("date").innerHTML = futureFirstWednesdays[0].toDateString()

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


//sending the future sunset dates to get the future sunset times, NEED TO ADD 30 MINUTES
// import { getSunsetTimesForDates } from "../observatory/sunsetGenerator"

// getSunsetTimesForDates(futureFirstWednesdays)

//update month function 
//Allow the user to change the date provided the month and the new date. 

function updateListOfDates(newMonth, newDay){
  
}