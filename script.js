//your JS code here. If required.
let nameElement = document.querySelector("#fname");

nameElement.addEventListener("blur", function () {
  nameElement.value = nameElement.value.toUpperCase();
});
