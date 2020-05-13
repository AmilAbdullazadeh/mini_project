var steve = document.getElementById("steve");
var bill = document.getElementById("bill");
var jeff = document.getElementById("jeff");

// document.getElementById('steve').addEventListener('click', function(){

// });

steve.addEventListener("click", picLink);
bill.addEventListener("click", picLink);
jeff.addEventListener("click", picLink);

function picLink() {
  debugger;
  var allImages = document.querySelectorAll("img");

  //   console.log(allImages[0]);
  //   console.log(allImages[1]);
  //   console.log(allImages[2]);

  for (let i = 0; i < allImages.length; i++) {
    allImages[i].className = "hide";
  }

  //   allImages[0].className = 'hide';
  //   allImages[1].className = 'hide';
  //   allImages[2].className = 'hide';

  var picId = this.attributes["data-img"].value;

  var pic = document.getElementById(picId);

  if (pic.className === "hide") {
    pic.className = "";
  } else {
    pic.className = "hide";
  }
}
