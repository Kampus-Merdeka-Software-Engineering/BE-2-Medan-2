// ! Redirect from book section to check ticket section after user receive ticket number

// document
//   .querySelector("#book-ticket-btn .btn")
//   .addEventListener("click", function (e) {
//     e.preventDefault();

//     let ticketNumber = Math.floor(Math.random() * 1000000); // Generate a random ticket number
//     alert(`Your ticket number is ${ticketNumber}`); ==> Digunakan nanti di backend

//     let formData = {
//       ticketNumber: ticketNumber,
//       name: document.getElementById("name").value,
//       whereTo: document.getElementById("where-to").value,
//       email: document.getElementById("email").value,
//       quantity: document.getElementById("quantity").value,
//       phone: document.getElementById("phone").value,
//       arrival: document.querySelector(
//         'input[type="datetime-local"]:nth-child(1)'
//       ).value,
//       leaving: document.querySelector(
//         'input[type="datetime-local"]:nth-child(2)'
//       ).value,
//     };

//     localStorage.setItem("formData", JSON.stringify(formData)); // Store the form data in local storage

//     window.location.href = "check-ticket.html"; // Redirect to the check-ticket.html page
//   });

// window.onload = function () {
//   let formData = JSON.parse(localStorage.getItem("formData")); // Retrieve the form data from local storage

//   document.querySelector(".ticket-column:nth-child(1) input").value =
//     formData.ticketNumber;
//   document.querySelector(".ticket-column:nth-child(2) input").value =
//     formData.name;
//   document.querySelector(".ticket-column:nth-child(3) input").value =
//     formData.email;
//   document.querySelector(".ticket-column:nth-child(4) input").value =
//     formData.phone;
//   document.querySelector(".ticket-column:nth-child(5) input").value =
//     formData.whereTo;
//   document.querySelector(".ticket-column:nth-child(6) input").value =
//     formData.quantity;
//   document.querySelector(".ticket-column:nth-child(7) input").value =
//     formData.arrival;
//   document.querySelector(".ticket-column:nth-child(8) input").value =
//     formData.leaving;
// };
