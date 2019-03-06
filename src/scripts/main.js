const audrey = document.getElementById("audrey")
let position = 0;
let container = document.getElementById("container")

/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/
window.addEventListener('scroll', function() {
    console.log(window.scrollY)
    audrey.style.width = window.scrollY/3 + "px"
    audrey.style.height = window.scrollY/3 + "px"
})
    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */



    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */