// targetting html elements
const allBtns = document.querySelectorAll(".btns");
const submitBtn = document.querySelector(".submit-btn");
const closeBtn = document.querySelector(".close-btn");
const thankUCard = document.querySelector(".thank-you-card");
const ratingContainer = document.querySelector(".rating-container");
let userRating = document.querySelector(".rated-value");

// functions
allBtns.forEach(function (btns) {
  btns.addEventListener("click", function (e) {
    userRating.textContent = e.currentTarget.textContent;

    // selection and de-selection function
    allBtns.forEach(function (userSelection) {
      if (userSelection !== e) {
        userSelection.classList.remove("ratings");
      }
    });

    e.currentTarget.classList.toggle("ratings");

    //   Setting up a condition to prevent submission if no rating is done
    if (e.currentTarget.textContent > 0 && e.currentTarget.textContent <= 5) {
      submitBtn.addEventListener("click", function () {
        thankUCard.classList.add("show-thank-you-card");
        ratingContainer.classList.add("hide-rating-container");
      });
    }
  });
});

closeBtn.addEventListener("click", function () {
  thankUCard.classList.remove("show-thank-you-card");
  ratingContainer.classList.remove("hide-rating-container");
});
