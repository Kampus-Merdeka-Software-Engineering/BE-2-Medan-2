<div align="center">

<h1>
  <img src="https://kampus-merdeka-software-engineering.github.io/FE-2-Medan-2/src/assets/logo/Logo-RevoU.gif" alt="Logo-RevoU" style="vertical-align: middle;" width="50px" />
  <span style="vertical-align: middle;">&nbsp; WanToGo - Travel Agency Website &nbsp;</span>
  <img src="https://kampus-merdeka-software-engineering.github.io/FE-2-Medan-2/src/assets/logo/Logo-Kampus-Merdeka.gif" alt="Logo-Kampus-Merdeka" style="vertical-align: middle;" width="50px" />
</h1>

![GitHub contributors](https://img.shields.io/github/contributors/Kampus-Merdeka-Software-Engineering/BE-2-Medan-2?color=orange&style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/Kampus-Merdeka-Software-Engineering/BE-2-Medan-2?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/Kampus-Merdeka-Software-Engineering/BE-2-Medan-2?style=for-the-badge)
![GitHub pull requests](https://img.shields.io/github/issues-pr/Kampus-Merdeka-Software-Engineering/BE-2-Medan-2?style=for-the-badge)
![GitHub repo size](https://img.shields.io/github/repo-size/Kampus-Merdeka-Software-Engineering/BE-2-Medan-2?style=for-the-badge)

<br>

<a href="https://github.com/Anmol-Baranwal/GIFs-For-Readme"><img src="https://forthebadge.com/images/badges/made-with-markdown.svg" width="230" height="30" alt="made with markdown badge"></a> 

<img src="https://kampus-merdeka-software-engineering.github.io/FE-2-Medan-2/src/assets/logo/Logo Readme.gif" alt="WanToGo" width="700px" height="300px">

</div>

## Table of Contents 📑

- [Table of Contents 📑](#table-of-contents-)
- [Introduction](#introduction)
- [Technologies Used 🚀](#technologies-used-)
- [Requirements 📋](#requirements-)
- [Installation 🛠️](#installation-️)
- [Usage 🖲️](#usage-️)
- [Code Explanation 📚](#code-explanation-)
- [Link to WanToGo Final Project 👩‍💻](#link-to-wantogo-final-project-)
- [Team 2 Section Medan 💡](#team-2-section-medan-)
- [Contributing 🤝](#contributing-)
- [Show your support 💪](#show-your-support-)
- [Acknowledgments 🙏](#acknowledgments-)
- [End 👋](#end-)
- [](#)

## Introduction

Welcome to the WanToGo server-side repository! WanToGo is an online learning media platform dedicated to enhancing the skills and knowledge of users in various fields of education. We are part of Group 2 Section Medan RevoU MSIB KM AUG23, and we are proud to have designed and built this platform to provide travel book services to users.

## Technologies Used 🚀

WanToGo is built using various technologies, as follows:

| Technology                                                                                                                   | Description                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)                    | Used to create the basic structure of the website.                           |
| ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)                       | Responsible for the appearance and style of the website.                     |
| ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) | Adds interactivity to the website.                                           |
| ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)                      | Runs the server side of the project.                                         |
| ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)    | Node.js framework used for rapid web development.                            |
| ![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)                                     | Allows integration of various data APIs to provide quality content to users. |
| ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)                     | Performs Testing on the API and monitors performance                         |

## Requirements 📋

This project requires the following:

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)

And the following Node.js packages:

- [express](https://www.npmjs.com/package/express)
- [cors](https://www.npmjs.com/package/cors)
- [dotenv](https://www.npmjs.com/package/dotenv)

## Installation 🛠️

This project requires [Node.js](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/get-npm) (which comes with Node.js) to be installed on your machine. 

Follow these steps to get the project set up:

1. **Clone the repository to your local machine.** This can be done by running the following command in your terminal:

```bash
git clone <repository-url>
```

2. **Navigate to the project directory.** This can be done by running the following command in your terminal:

```bash
cd <project-directory>
```

3. **Install the required packages.** This project requires several Node.js packages, including `express`, `cors`, and `dotenv`. You can install all of them at once by running the following command in your terminal:

```bash
npm install
```



## Usage 🖲️

Once you've installed the project, you can start using it:

1. **Start the server.** You can do this by running the `npm start` command:

```bash
npm start
```
This will start the server and log a message to the console indicating the URL where the server is running
   
2. **Set the server port.** The server will start on the port specified in your .env file. If you haven't created this file yet, you'll need to do so in the project directory. The file should contain a line like this:

```bash
PORT=<your-port-number>
```
   
3. **Use the** `/book-ticket` endpoint to book a ticket. You can do this by sending a POST request to `http://localhost:<your-port-number>/book-ticket.`
   
4. **Use the** `/check-ticket` endpoint to check a ticket. You can do this by sending a GET request to http://localhost:<your-port-number>/check-ticket/<ticket-id>.

## Code Explanation 📚

1. **Import Dependencies:** The code starts by importing the necessary dependencies. These include `express` for building the server, `cors` for handling Cross-Origin Resource Sharing, and `dotenv` for managing environment variables.

```javascript
const express = require("express");
const cors = require("cors");
require("dotenv").config();
```
2. **Setting up the Server**: An Express application is created and the port number is retrieved from the environment variables.
   
```javascript
const app = express();
const PORT = process.env.PORT;
```

3. **Middleware**: The express.json() middleware is used to parse incoming requests with JSON payloads and the cors() middleware is used to enable CORS.

```javascript
app.use(express.json());
app.use(cors());
```

4. **Import Routes:** After setting up the middleware, the routes for booking and checking tickets are imported.

```javascript
const bookTicketRoute = require("./src/routes/bookTicketRoute");
const checkTicketRoute = require("./src/routes/checkTicketRoute");
```

5. **Use Routes:** The imported routes are then used with the appropriate endpoints.

```javascript
app.use("/book-ticket", bookTicketRoute);
app.use("/check-ticket", checkTicketRoute);
```

6. **Start the Server:** The server is started by calling the `app.listen()` method. The port number is passed as an argument to the method, and a callback function is passed as a second argument. The callback function logs a message to the console indicating the URL where the server is running.

```javascript
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

The server uses two routes: `/book-ticket` and `/check-ticket`. The code for these routes is imported from the `src/routes` directory.

The server starts by calling `app.listen()`, and logs a message to the console indicating the URL where the server is running.

## Link to WanToGo Final Project 👩‍💻

Below is the link to the final project:

| Website | Link                                                                                 | Description                |
| ------- | ------------------------------------------------------------------------------------ | -------------------------- |
| WanToGo | [Go to Website](https://kampus-merdeka-software-engineering.github.io/FE-2-Medan-2/) | Main WanToGo website link. |

## Team 2 Section Medan 💡

WanToGo is a project built with concentration and great hope by Group 2 Section Medan KM AUG23, MSIB ( [RevoU](https://revou.co/) x [MSIB Kemendikbudristek](https://www.kemdikbud.go.id/) ).
<br> Here are the designers and developers of WanToGo:

| Name                           | Role              |
| ------------------------------ | ----------------- |
| Stefanus Bernard Melkisedek    | Project Leader    |
| Fajrina Reski Arini            | Frontend Engineer |
| Sherina Salsabila Dewi Beutari | Frontend Engineer |
| Muhammad Ruskin Ridho          | Backend Engineer  |
| Stefanus Bernard Melkisedek    | Backend Engineer  |
| Rivianty Putri N               | Quality Assurance |
| Fadlila Nurwanda               | Quality Assurance |

## Contributing 🤝

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Kampus-Merdeka-Software-Engineering/BE-2-Medan-2/issues).

## Show your support 💪

Give a ⭐️ if you like this project!

## Acknowledgments 🙏

We want to express our deepest appreciation to our instructors and mentor who have lectured and guided us to succeed in our project.

Our Instructors:

1. [Mustofa Ghaleb Amami](https://github.com/cakasuma)
2. [Rafly Lesmana](https://github.com/RaflyLesmana3003)
3. [Aji Lantang Mardika](https://github.com/ajilantang)

Our Mentor:

[Ari Yuhendra](https://github.com/myndra1805)

We also want to give a hat tip to anyone whose code was used as inspiration for this project.

## End 👋

Thank you for visiting the WanToGo repository and having fun using it. We hope you enjoy using WanToGo as much as we enjoy building it. <br>

**"May this project inspire and benefit you. Let's keep coding together!"**
<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="1000">
---