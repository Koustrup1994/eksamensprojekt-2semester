var imgPaths = ['assets/images/img1.jpg', 'assets/images/img2.jpg', 'assets/images/img3.jpg'];

var curImg = -1;

var imgO = new Array();

for(i=0; i < imgPaths.length; i++) {
    imgO[i] = new Image();
    imgO[i].src = imgPaths[i];
}

function swapImage() {
    if (++curImg > imgPaths.length-1) {
      curImg = 0;
    }
    else {
      curImg = curImg
    }
    imgCont.src = imgO[curImg].src;
    setTimeout(swapImage,5000);
}

window.onload=function() {
    imgCont = document.querySelector('#imgGallery');
    swapImage();
}
