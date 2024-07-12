//Steps
//get the number from the button
//change the color of the button to white when selected
//transition to the thank you view
const buttonWrapper = document.getElementById("buttonsWrapper");

const buttons = buttonWrapper.querySelectorAll("button");
console.log("buttons", buttons);
const submitButton = document.getElementById("submitButton");
const userSelectedRating = document.getElementById("userSelectedRating");
const ratingSection = document.getElementById("ratingSection");
const thankYouSection = document.getElementById("thankYouSection");
// Variables

let rating = 0;

// EventListenters

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    rating = e.target.value;
    styleButton(button);
    console.log(`Rating is: ${rating}`);
  });
});

submitButton.addEventListener("click",(e) =>{
    if (rating > 0) {
        ratingSection.style.display = "none";
        thankYouSection.style.display = "block";
        userSelectedRating.textContent = rating;
      } else {
        alert("Please select a rating before submitting.");
      }

});
//submit button, buttons, span element

// Functions

function styleButton (button) {
    buttons.forEach((button) => {
        button.classList.remove("clicked")
        //remove clicked from all other buttons
    });
    button.classList.add("clicked");
}
