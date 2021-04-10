const openmenu = () =>{
    document.getElementById('close').style.width="150px";
}
const closemenu = () =>{
    document.getElementById('close').style.width="0px";
}

// Read more button
const readMore = () =>{
   var dots = document.querySelector("#dots");
   var text = document.querySelector("#text");
    let btn1 = document.getElementById('btn'); 
    if (dots.style.display === "inline") {
        dots.style.display = "inline";
        text.style.display = "none";
      } else {
        dots.style.display = "none";
        text.style.display = "inline";
        btn1.style.display="none"
      }
}