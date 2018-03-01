document.querySelector("#reset-field button").addEventListener('click',function(){
  // TASK #1
  let input = document.querySelector("#reset-field input");
  input.value = "";
})


document.querySelector("#validate-field button").addEventListener('click',function(){
  // TASK #2
  let input = document.querySelector("#validate-field input");
  var value = input.value;
  let validate = document.querySelector("#validate-field .flash-message");
  if (value.length<6){
  	validate.textContent = "Input not long enough!"
  	validate.classList.remove("valid");
  	validate.classList.add("invalid");
  } else {
  	validate.textContent = "Field valid!";
  	validate.classList.remove("invalid");
  	validate.classList.add("valid");
  }
})


document.querySelector("#calculate-items button").addEventListener('click',function(){
  // TASK #3
  const listItems = document.querySelectorAll("#calculate-items input");
  const itemsArr = [...listItems];
  var sumTotal = document.querySelector("#calculate-items .sum-total");
  let resVal = 0;
  for (let i=0; i<itemsArr.length; i++){
  	if (itemsArr[i].checked === true) {
  		resVal += parseInt(itemsArr[i].value, 10);
  	}
  }
  sumTotal.textContent = resVal;
})


  // TASK #4
let currImg = document.querySelector("#select-to-show-more .more-info .img-box");
var newImg = document.createElement("img");
currImg.appendChild(newImg);
let model =  document.querySelector("#select-to-show-more .more-info .model");
let msrp = document.querySelector("#select-to-show-more .more-info .msrp");
let mpg = document.querySelector("#select-to-show-more .more-info .mpg");
let edmunds = document.querySelector("#select-to-show-more .more-info .edmunds");

document.querySelector("#select-to-show-more button").addEventListener('click',function(){
  let carSelect = document.querySelector("#select-to-show-more .selection");
  const selected = carSelect.options[carSelect.selectedIndex];
  newImg.setAttribute("src", "./images/"+selected.getAttribute("data-img"));
  model.textContent = selected.getAttribute("value");
  msrp.textContent = selected.getAttribute("data-msrp");
  mpg.textContent = selected.getAttribute("data-mpg");
  edmunds.textContent = selected.getAttribute("data-edmunds");
})
let input = document.querySelector("#add-guest input");
let list = document.querySelector("#add-guest .guest-list");
input.addEventListener("submit", function(){
	console.log(input);
})
