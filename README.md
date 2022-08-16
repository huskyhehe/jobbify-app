# Jobbify - job application tracking dashboard
> Full-stack Job tracking app created with MERN stack.
> <br/>**Live demo** here: https://jobbify-prod.herokuapp.com

# <img src = "https://raw.githubusercontent.com/huskyhehe/jobbify-app/5675b256cd631ab3e69b93e664fae472e7de125d/client/src/assets/images/logo.svg">

## Table of Contents
* [1 General Intro](#1-general-intro)
* [2 File Structure](#2-file-structure)
* [3 Technologies Used](#3-technologies-used)
* [4 Key Features](#5-key-features)
* [5 Screenshots](#6-screenshots)
* [6 Setup](#7-setup)
* [7 Room for Improvement](#9-room-for-improvement)

<br/>

## 1 General Intro
This project is a job tracking web application built with MERN stack.

Check [live demo](https://jobbify-prod.herokuapp.com/) and login the test account to interact with mock job data:
> **email:** test@gmail.com  
> **password:** secret

<br/>

## 2 File Structure
```
The top level directory structure is as follows:
.
└── /client
    ├── /public
    ├── /src
    |   ├── /assets 
    |   ├── /pages           
    |   ├── /components
    |   ├── /utils
    |   └── /context           
    ├── App.jsx
    └── index.js
└── /server
    ├── /controllers
    ├── /routes
    ├── /models
    ├── /db
    ├── /middleware
    ├── /utils
    ├── /errors
    └── server.js
```

## 3 Technologies Used
Project is created with:
- MongoDB
- Express.js
- React.js
- Node.js

Libraries used for **client**:

| Library | Version | Original Source
|-----|-----|-----|
| `axios` | 0.27.2 | https://github.com/remix-run/react-router |
| `history` | 5.3.0 | https://github.com/remix-run/history |
| `moment` | 2.29.4 | https://momentjs.com/ |
| `normalize.css` | 8.0.1 | https://necolas.github.io/normalize.css/ |
| `react-router-dom` | 6.3.0 | https://reactrouter.com/docs/en/v6 |
| `react-icons` | 4.4.0 |  |
| `react-scripts` | 5.0.1 |  |
| `recharts` | 2.1.13 |  |
| `styled-components` | 5.3.5 |  |
| `web-vitals` | 2.1.4 |  |

Libraries used for **server**:

| Library | Version | Original Source
|-----|-----|-----|
| `bcryptjs` | 2.4.3 |  |
| `concurrently` | 7.3.0 |  |
| `cors` | 2.8.5 |  |
| `dotenv` | 16.0.1 |  |
| `express` | 4.18.1 |  |
| `express-async-errors` | 3.1.1 |  |
| `express-mongo-sanitize` | 2.2.0 |  |
| `express-rate-limit` | 6.5.1 |  |
| `helmet` | 5.1.1 |  |
| `http-status-codes` | 2.2.0 |  |
| `jsonwebtoken` | 8.5.1 |  |
| `moment` | 2.29.4 | https://momentjs.com/ |
| `mongodb` | 4.8.1 |  |
| `mongoose` | 6.5.0 |  |
| `morgan` | 1.10.0 |  |
| `nodemon` | 2.0.19 |  |
| `validator` | 13.7.0 |  |
| `xss-clean` | 0.1.1 |  |


<br/>

# 4 Key Features

<br/>

# 5 Screenshots

<br/>

# 6 Setup
### Step 1: 
Clone this repo to your desktop and run npm.
```
npm run install-dependencies
```

### Step 2:
Add a new file `.env`, and setup values for  `ATLAS_URI`, `JWT_SECRET`,`JWT_LIFETIME`.

### Step 3:
Comment lines below in the `./server/server.js`:
```javascript
// only when ready to deploy
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, '../client/build')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
});
```
### Step 4:
```
npm start
```
Visit url http://localhost:3000/.


# 7 Room for Improvement