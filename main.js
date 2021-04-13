function openNav() {
  document.getElementById("menu").style.display = "block";
  document.getElementById("header-big").style.display = "none";
}

function closeNav() {
  document.getElementById("menu").style.display = "none";
  document.getElementById("header-big").style.display = "grid";
}

// function contactDisplay() {
//   var w = window.innerWidth;
//   if (w>600){
//     document.getElementById("contact").style.display = "block";
//   } else{
//     document.getElementById("contact").style.display = "none";
//   }
// }
//onresize="contactDisplay()"
