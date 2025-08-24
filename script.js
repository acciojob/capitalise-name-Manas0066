//your JS code here. If required.
let nameElement = document.querySelector("#fname");

nameElement.addEventListener("input", function () {
  nameElement.value = nameElement.value.toUpperCase();
});
