
function addingEventListener() {
    const button = document.getElementById('button');
    button.addEventListener('click', function() {
      // Define what happens when the button is clicked
      console.log('Button was clicked!');
    });
  }
  
  // Call the function to bind the event listener
  addingEventListener();
  
