const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

//<<<<<<< HEAD
  let index = 0;


  const alphabet = [65, 66, 67];


document.addEventListener("keydown", function(e) {
  onKeyDownHandler(e)
//  alert(3)
})

//function init() {
//=======
//const alphabet = [65, 66, 67];

// Keep track of index outside of the event handler.
//let index = 0;

document.addEventListener("click", function(){
    document.getElementById("demo").innerHTML = "Hello World!";
});

function init() {
//>>>>>>> bf22356b630843020927ff067eeebf3e0357dd2b
  // Write your JavaScript code inside the init() function
// Keep track of index outside of the event handler.

  // This is the function that would be invoked by the event listener.
  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which);

    if (key === code[index]) {
      index++;
  //    alert(3)
      if (index === code.length) {
        alert("Hurray!");

        index = 0;
      }
    } else {
      index = 0;
    }
  }



}
//>>>>>>> bf22356b630843020927ff067eeebf3e0357dd2b
