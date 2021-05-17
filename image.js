function loadGallery() {

  let mainView = document.getElementById("mainView");
  mainView.style.background = "url(" + imgObject[mainImg] + ") 0% 0%";
  mainView.style.backgroundSize = "500px 500px"

  let leftView = document.getElementById("leftView");
  leftView.style.background = "url(" + imgObject[prevImg] + ")";
  mainView.style.backgroundSize = "500px 500px"
  
  let rightView = document.getElementById("rightView");
  rightView.style.background = "url(" + imgObject[nextImg] + ")";
  mainView.style.backgroundSize = "500px 500px"
  
  let linkTag = document.getElementById("linkTag")
  linkTag.href = imgObject[mainImg];

};

function scrollRight() {
  
  prevImg = mainImg;
  mainImg = nextImg;
  if (nextImg >= (imgObject.length -1)) {
    nextImg = 0;
  } else {
    nextImg++;
  }; 
  loadGallery();
};

function scrollLeft() {
  nextImg = mainImg
  mainImg = prevImg;
   
  if (prevImg === 0) {
    prevImg = imgObject.length - 1;
  } else {
    prevImg--;
  };
  loadGallery();
};

let imgObject = [

   "http://bastwolf.ddns.net:8080/image_royale.jpg", "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/18508F50-70E1-4F04-B358-44D84D23F45B/Derivates/D7C4DE1B-7A46-4738-898C-2F61E776E82A.jpg",
  "https://i1.wp.com/www.thefrenchcookingacademy.com/wp-content/uploads/2017/07/Bouchee-a-la-reine.jpg?fit=606%2C610&ssl=1",
 
];

let mainImg = 0;
let prevImg = imgObject.length - 1;
let nextImg = 1;

document.getElementById("navRight").addEventListener("click", scrollRight);
document.getElementById("navLeft").addEventListener("click", scrollLeft);
document.getElementById("rightView").addEventListener("click", scrollRight);
document.getElementById("leftView").addEventListener("click", scrollLeft);

loadGallery();