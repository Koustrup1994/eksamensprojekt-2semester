var imgPaths = ['assets/images/img1.jpg', 'assets/images/img2.jpg', 'assets/images/img3.jpg'];

var curImg = -1;

var imgO = new Array();
/**på linje 1 har jeg et array af strings. Jeg vil gerne have et af billeder istedet. Derfor laver jeg et nyt array. For loopet laver nye billeder som laver billeder ud fra strings fra imgPaths.**/
for(i=0; i < imgPaths.length; i++) {
    imgO[i] = new Image();
    imgO[i].src = imgPaths[i];
}
/**-1 fordi den leder efter værdien. Arrays starter jo ved 0. ++curImg tæller op så curImg er 1. Så kører den igennem igen, og så er cruImg 2. If tjekker om den har talt for meget. Hvis den har det, så resetter den til 0.**/
function swapImage() {
    if (++curImg > imgPaths.length-1) {
      curImg = 0;
    }
    else {
      curImg = curImg;
    }
    imgCont.src = imgO[curImg].src;
    setTimeout(swapImage,5000);
}

window.onload=function() {
  imgCont = document.querySelector('#imgGallery');
  swapImage();
}
