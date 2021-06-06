$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
  .fadeOut(1000)
  .next()
  .fadeIn(1000)
  .end()
  .appendTo('#slideshow');
}, 3000);





/*Business logic of website*/

/*functionality of body elements*/
document.getElementById("myMargin").style.margin = "50px 10px 20px 30px";
document.getElementById("myBorder").style.border = "50px 10px 20px 30px";


/*Navigation Bar*/
/* Toggle between adding and removing tge "responsive" class to topnav when the user clicks on the icon */
function myNavBar() {
  var x = document.getElementById("myNavBar");
  if (x.className === "navBar") {
    x.className += " responsive";
  } else {
    x.className = "navBar";
  }
}

