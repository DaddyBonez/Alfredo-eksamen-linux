const express = require("express"); //Import the express dependecy
const app = express(); //Initiate an express app
const port = 2004; //Save the port


//middleware
app.use(express.static("public")); //anything inside the folder, is available as a static file to the front end
app.use(express.urlencoded({extended: true})); //takes all the data in our form and parses it into an object

// view engine
app.set('view engine', 'ejs');

app.get("/index.html", (req,res) => { //get request to the root
   res.sendFile("index.html", {root:__dirname});  
});

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

searchForm.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent the form from refreshing the page

    const searchTerm = searchInput.value; // get the search term from the input field
    console.log(`search shit ${searchInput}`)

    // Perform the search here, for example by filtering an array of data or sending a request to an API
    // ...

    // Clear the input field for the next search
    searchInput.value = "";
});

import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection, getDocs
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCXRnTVH0dUNg4bNnMcUd3fAk3ltz3bEu0",
    authDomain: "eksamen-linux-e260c.firebaseapp.com",
    projectId: "eksamen-linux-e260c",
    storageBucket: "eksamen-linux-e260c.appspot.com",
    messagingSenderId: "201684173144",
    appId: "1:201684173144:web:6a5d700c4c1ddea35aa52d"
  };

// init firebase
initializeApp(firebaseConfig)

// init services
const db = getFirestore()

// collection ref
const colRef = collection(db, 'Eier')

// get collection data
getDocs(colRef)
  .then(snapshot => {
    // console.log(snapshot.docs)
    let books = []
    snapshot.docs.forEach(doc => {
      books.push({ ...doc.data(), id: doc.id })
    })
    console.log(Eier)
  })
  .catch(err => {
    console.log(err.message)
  })