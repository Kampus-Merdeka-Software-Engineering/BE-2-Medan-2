# WanToGo - Server Side (API)

<p align="center">
 <img
   src="https://kampus-merdeka-software-engineering.github.io/FE-2-Medan-2/assets/logo/Logo Readme.gif"
   alt="WanToGo Logo"
   width="700px"
   height="300px"
 />
</p>

## Table of Contents 📑

- [WanToGo - Server Side (API)](#wantogo---server-side-api)
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

## Introduction

Welcome to the WanToGo server-side repository! WanToGo is an online learning media platform dedicated to enhancing the skills and knowledge of users in various fields of education. We are part of Group 2 Section Medan RevoU MSIB KM AUG23, and we are proud to have designed and built this platform to provide travel book services to users.

## Technologies Used 🚀

WanToGo is built using various technologies, as follows:

| Technology      | Description                                                                  |
| --------------- | ---------------------------------------------------------------------------- |
| HTML            | Used to create the basic structure of the website.                           |
| CSS             | Responsible for the appearance and style of the website.                     |
| JavaScript (JS) | Adds interactivity to the website.                                           |
| Node.js         | Runs the server side of the project.                                         |
| Express         | Node.js framework used for rapid web development.                            |
| API             | Allows integration of various data APIs to provide quality content to users. |
| PostMan         | Performs Testing on the API and monitors performance                         |

## Requirements 📋

This project requires the following:

- Node.js
- npm
- Node.js packages:
- express
- cors
- dotenv

## Installation 🛠️

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the required packages.

## Usage 🖲️

1. Start the server by running `npm start`.
2. The server will start on the port specified in your `.env` file.
3. Use the `/book-ticket` endpoint to book a ticket.
4. Use the `/check-ticket` endpoint to check a ticket.

## Code Explanation 📚

The code sets up an Express server with CORS enabled. It uses the dotenv package to load environment variables from a `.env` file.

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

- Hat tip to anyone whose code was used
- Inspiration
- Etc

## End 👋

Thank you for visiting the WanToGo repository and having fun using it. We hope you enjoy using WanToGo as much as we enjoy building it. <br>

**"May this project inspire and benefit you. Let's keep coding together!"**