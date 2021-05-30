document.getElementById("myMargin").style.margin = "50px 10px 20px 30px";
document.getElementById("myBorder").style.border = "50px 10px 20px 30px";

/* Toggle between adding and removing tge "responsive" class to topnav when the user clicks on the icon */
function myNavBar() {
  var x = document.getElementById("myNavBar");
  if (x.className === "navBar") {
    x.className += " responsive";
  } else {
    x.className = "navBar";
  }
}

