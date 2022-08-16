# Jobbify - job application tracking dashboard
> Full-stack Job tracking app created with MERN stack.
> <br/>**Live demo** here: https://jobbify-prod.herokuapp.com/.

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

Libraries used for client:
    "axios": "^0.27.2",
    "history": "^5.3.0",
    "moment": "^2.29.4",
    "normalize.css": "^8.0.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.4.0",
    "react-router-dom": "^6.3.0",
    "react-scripts": "^5.0.1",
    "recharts": "^2.1.13",
    "styled-components": "^5.3.5",
    "web-vitals": "^2.1.4"

| Library | Version | License | Original Source
|-----|-----|-----|-----|
| `react-router-dom` | 18.2.0 | [The MIT License (MIT)](https://github.com/remix-run/react-router/blob/main/LICENSE.md) <br />Copyright (c) React Training 2015-2019<br />Copyright (c) Remix Software 2020-2021 | https://github.com/remix-run/react-router |
| `axios` | 0.27.2 | [The MIT License (MIT)](https://github.com/remix-run/react-router/blob/main/LICENSE.md) <br />Copyright (c) React Training 2015-2019<br />Copyright (c) Remix Software 2020-2021 | https://github.com/remix-run/react-router |
| `react-router-dom` | 18.2.0 | [The MIT License (MIT)](https://github.com/remix-run/react-router/blob/main/LICENSE.md) <br />Copyright (c) React Training 2015-2019<br />Copyright (c) Remix Software 2020-2021 | https://github.com/remix-run/react-router |

<br/>

# 6 Setup
### Step 1: 
Clone this repo to your desktop.

### Step 2: 
```
npm run install-dependencies
```

### Step 3:
Add a new file `.env`, and setup values for  `ATLAS_URI`, `JWT_SECRET`,`JWT_LIFETIME`.

### Step 4:
Comment lines below in the `./server/server.js`:
```javascript
// only when ready to deploy
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, '../client/build')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
});
```
### Step 5:
```
npm start
```
Visit url http://localhost:3000/.