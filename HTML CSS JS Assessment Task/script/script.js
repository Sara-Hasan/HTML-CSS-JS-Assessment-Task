$(document).ready(show_cupcakes);
let user = document.getElementById('name');
let Count = document.getElementById('Count');
let Type = document.getElementById('Type');
let Delivery = document.getElementById('Delivery');
let Allergies = document.getElementById('Allergies');
let welcome = document.getElementById('welcome');
let errors = document.querySelectorAll('.errors');
let signbtn = document.getElementById('signbtn');
const table = document.querySelector(".table");
const cupcake_table = document.getElementById('cupcake-table');
user.addEventListener("blur", (e) => {
	try {
		if (user.value == "" || user.value.length < 5 || user.value.length > 17)
			throw "The name is required and must be at least five characters long and at most 16 characters long";
	} catch (error) {
		errors[0].innerHTML = error;
	}
});

Count.addEventListener("blur", (e) => {
	try {
		if (Count.value > 16 || Count.value < 0)
			throw "The count must be at least 1 and at most 15";
	} catch (error) {
		errors[1].innerHTML = error;
	}
});

Type.addEventListener("blur", (e) => {
	try {
		if (Type.value == "1")
			throw "The user must choose a type";
	} catch (error) {
		errors[2].innerHTML = error;
	}
});

Delivery.addEventListener("blur", (e) => {
	try {
		if (Delivery.value == "1")
			throw "The user must choose a type";
	} catch (error) {
		errors[3].innerHTML = error;
	}
});

Allergies.addEventListener("blur", (e) => {
	try {
		if (Allergies.value == "1")
			throw "The user must choose a type";
	} catch (error) {
		errors[3].innerHTML = error;
	}
});


signbtn.addEventListener("click", () => {
    Type.value == "2" && Allergies.value == "2"
      ? (errors[4].innerHTML = "this type of cake is not dairy free")
      : (errors[4].innerHTML = "");
    Type.value == "3" && Allergies.value == "3"
      ? (errors[3].innerHTML = "the pecan cake is not nut free")
      : (errors[3].innerHTML = "");
      Type.value == "2" && Delivery.value == "10"
      ? (errors[3].innerHTML = "this type of cake cannot be delivered at 4 PM.")
      : (errors[3].innerHTML = "");
  }); 




var cup_cakes=[
    {"name":"Chocolate","calories":"high","weight":"200gm"},
    {"name":"Carrot","calories":"medium","weight":"150gm"},
    {"name":"Banana","calories":"high","weight":"200gm"},
    {"name":"Strawberry","calories":"low","weight":"160gm"},
    {"name":"Peanut","calories":"medium","weight":"200gm"}
];



function show_cupcakes(){
    //write code that shows the cupcakes in the table as per the instructions
    fetch("../cupCake.json")
    .then((response) => response.json())
    .then((data) => {
      for (i = 0; i < data.length; i++) {
        let tabel = ` <tr>
      <td>${data[i].name}</td>
      <td class="${allColor(data[i])}">${data[i].calories}</td>
      <td>${data[i].weight}</td>
    </tr>`;
        table.insertAdjacentHTML("beforeend", tabel);
      }
    });
        
    function allColor(data) {
      return data.calories == "high"
        ? "red"
        : data.calories == "low"
        ? "green"
        : data.calories == "medium"
        ? "orange"
        : "";
    }
}

function validate(){
    //write code that validates the form
}

function show_storage(){
    //write code that shows the name from local storage
    welcome.innerHTML = `Welcome ${localStorage.getItem('username')}`
}

user.addEventListener("blur", (e) => {
    localStorage.setItem("username", e.target.value);
  });
  
  
