// var message_url="/message";
// var message_array = [];


/* PORTFOLIO GALLERY */
function showPicture(elem)
{
    var pictureModal = new Modal(document.getElementById("pictureModal"));
    /*  DOM document object model traversing method */
    var imgsrc = elem.parentNode.children[0].children[0].src;
    console.log(imgsrc);
    /* var image is the button */

    //Use name to get food details
    var pictureName = elem.parentNode.children[1].innerHTML;
    console.log(pictureName);

    var pictureId = elem.parentNode.children[3];
    console.log(elem.parentNode.children[3].innerHTML);
    //var pictureId   = elem.parentNod

    var request = new XMLHttpRequest();

            request.open("GET", "/pictureByName/"+pictureName, true);
            request.setRequestHeader("Content-Type", "application/json");
            request.onload = function() {

                //Gets picture item
                console.log(request.responseText)
                var food = JSON.parse(request.responseText)[0];

                var pictureName = picture.name;

                document.getElementById("picture-name").innerHTML = foodName;

                var pictureimage = document.getElementById("pictureimg");
                pictureimage.src = imgsrc;

                pictureModal.show();
            };

            request.send();
}


/* SEARCH */
function search()
{
    var searchModal = new Modal(document.getElementById("searchModal"));
    searchModal.show();
}

function searchFood() {

    var input = document.getElementById("search-food-name").value;
    window.location = "listFood.html?input=" + input;
}


/* MESSAGE */
function messageThank()
{
    var messageThankModal = new Modal(document.getElementById("messageThankModal"));
    messageThankModal.show();
}

//change feedbackForm to messageForm
function sendMessage(message_id) {
    var messageForm = document.getElementById("messageForm");
    if (messageForm.style.display === "none") {

      var request = new XMLHttpRequest();
      request.open("GET", "/message/" + message_id, true);
      request.setRequestHeader("Content-Type", "application/json");
      request.onload = function() {
        var status = JSON.parse(request.responseText);

        if( status.length > 0 )
        {
          alert('You have already left a review on this order!');
        }
        else
        {
          feedbackForm.style.display = "block";

          document.getElementById('reviewOrderId').value = order_id;
        }
      }

      request.send();
        // var feedbackButton = document.getElementsByClassName("feedbackButton");
        // feedbackButton.innerHTML = '<button>Close feedback form</button>';

    } else {
        feedbackForm.style.display = "none";
        document.getElementById('reviewOrderId').value = null;
    }
}



/* DELETE */
// function deleteMessage()
// {
//     var deleteMessageModal = new Modal(document.getElementById("deleteMessageModal"));
//     deleteMessageModal.show();
// }


/* SCROLLING */
// document.getElementsByClassName('.down')[0].onclick = function () {
//     scrollTo(document.body, 0, 1250);   
//  }
     
// function scrollTo(element, to, duration) {
//      var start = element.scrollTop,
//          change = to - start,
//          currentTime = 0,
//          increment = 20;
         
//      var animateScroll = function(){        
//          currentTime += increment;
//          var val = Math.easeInOutQuad(currentTime, start, change, duration);
//          element.scrollTop = val;
//          if(currentTime < duration) {
//              setTimeout(animateScroll, increment);
//          }
//      };
//      animateScroll();
// }
 
 //t = current time
 //b = start value
 //c = change in value
 //d = duration
 Math.easeInOutQuad = function (t, b, c, d) {
   t /= d/2;
     if (t < 1) return c/2*t*t + b;
     t--;
     return -c/2 * (t*(t-2) - 1) + b;
 };

