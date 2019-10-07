let countdownText = document.getElementById("countdown-text");
let currentDate = new Date();
let halloweenDate = new Date();
halloweenDate.setDate(31); // 31st day
halloweenDate.setMonth(9); // October

// Set Halloween year to next year if Halloween already passed for the current year.
if (currentDate.getMonth() > halloweenDate.getMonth()) {
    halloweenDate.setFullYear(currentDate.getFullYear() + 1);
}

// Calculate days remaining
let daysLeft = Math.round((halloweenDate - currentDate)/24/60/60/1000);

// State if today is Halloween. If it is not Halloween, state how many days left.
if (currentDate.getMonth() === halloweenDate.getMonth() && currentDate.getDate() === halloweenDate.getDate()) {
    countdownText.innerText = "Today is Halloween!";
} else {
    if (daysLeft > 1) {
       countdownText.innerText = "There are " + daysLeft + " days till Halloween."; 
    } else {
        countdownText.innerText = "Tomorrow is Halloween.";
    }  
}