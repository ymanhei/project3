# WDMD (Welltops Data Management Dashboard)

This project was bootstrapped with Create React App.

Some information and guidelines are provided on this project. You may contact the developer for further information.

## About
This is a final project for my fullstack web development course. This MERN project contains my all hardwork in the past six months. 

### Built With
Mongodb, Express, ReactJS, Node.js, Javascript.

## Getting Started
Clone the repo onto your local drive. Then change directoty in terminal to get into the cloned folder:
```
git clone https://github.com/ymanhei/project3.git
cd project3
```

### Prerequisites
- Node.js
- MongoDB
- Nodemon
- create-react-app
- Passport
- Plotly

# MongoDB Preparation
You may include seedDB.js (line32 in server.js) in the server.js for initial data population. You will need to do both models 'db.Source' and 'db.Welltop' to populate the data into both collections.

However, the app may not work probably when seedDB.js (line32 in server.js) is included. Please remember to comment out this line when using the app.

Please change your connection string to MongDB in server.js. In order to make this app works, please make sure 3 collections 'sources','welltops' and 'users' are created in the database. You may manually insert the data with the reference in seedDB.js. Don't forget to insert your username and password in the 'users' collection.

### Installing
Run these commands in the terminal:
```
npm install
npm start
```

## Deliverables
- [x] Login and logout.
- [x] Authentication with passport.
- [x] Session information stored with express sessions.
- [x] Compare number of documents between specific collections.
- [x] Compare specific attributes between specific collections.
- [x] Create and update data for  MongoDB collections.

### Future Improvements
- Configurable database sources.
- Configurable layout and views.
- Configurable data selection and functions.

## Developer
Fully By Shing Hei Chan

### Acknowledgments
Bryan, Avi, Jason...etc all the tutors in UWA Coding Bootcamp 2019-2020.

