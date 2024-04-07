const modal = document.getElementById("modal");
const closeButton = document.getElementsByClassName("close")[0];
const buttonOne = document.querySelector(".button-one");
const buttonTwo = document.querySelector(".button-two");

buttonOne.addEventListener("click", function () {
  modal.style.display = "block";
  console.log('clicked')
});

buttonTwo.addEventListener("click", function () {
  modal.style.display = "block";
});

closeButton.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
