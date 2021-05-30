document.getElementById("myMargin").style.margin = "50px 10px 20px 30px";
document.getElementById("myBorder").style.border = "50px 10px 20px 30px";







/* Toggle between adding and removing tge "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

