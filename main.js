// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const glyphStatus = {
  "♡": "♥",
  "♥": "♡"
};
// Your JavaScript code goes here!
const modal = document.querySelector('#modal')
let likeGlyphs = document.querySelectorAll('.like-glyph')

likeGlyphs.forEach(glyph => glyph.addEventListener('click', (e) => {
      //define varialbe  is the heart heart.innerText = reassign the value.heart
      // console.log(e.target)
      // console.log("heloo")
      const url = "http://mimicServer.example.com"
      mimicServerCall(url)  //rerturns a Promise, Pro
        .then( function(serverMessage) {
          
          // make server call
          //success response ^
          // when successfull, change the heart
          // if its EMPTY_HEART, make it full, add new class
          // else if its full, make it empty
          
          // html knowledge and conditional /look dom tree
            if (glyph.innerHTML == EMPTY_HEART) {
              glyph.innerHTML = FULL_HEART 
              glyph.className = "activated-heart" 
            } else {
              glyph.innerHTML = EMPTY_HEART
              glyph.className = "like-glyph"
            }
           
                  //returns "Pretend remote server notififed of action"
          // return serverMessage.innerText
        })

        .catch(function(error) {
          const modal = document.querySelector('#modal')
          modal.hidden = false
          const modalMessage = document.querySelector('#modal-message')
          modalMessage.innerText = error
          setTimeout(() =>{
              modal.hidden = true
          }, 5000)
        })
        // console.log(likeGlyphs)
   
      //   fetch(baseUrl)
          // .then (res => {debugger})
          // .catch(res => console.log(baseUrl))
      
      



    }))
  

    
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
