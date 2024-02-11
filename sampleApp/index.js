import { initializeApp } from ""

// Challenge: Make sure that add is working by console logging add with two number arguments.

const appSettings = {
    databaseURL: "https://playground-b1676-default-rtdb.firebaseio.com/"
}

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    
    console.log(`${inputValue} added to database`)
})