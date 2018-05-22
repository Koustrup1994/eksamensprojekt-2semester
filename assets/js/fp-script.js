var picPaths = ['assets/images/img1.jpg', 'assets/images/img1.jpg'];

var curPic = -1;

var imgO = new Array();

for(i=0; i < picPaths.length; i++) {
    imgO[i] = new Image();
    imgO[i].src = picPaths[i];
}

function swapImage() {
    if (++curPic > picPaths.length-1) {
      curPic = 0;
    }
    else {
      curPic = curPic
    }
    imgCont.src = imgO[curPic].src;
    setTimeout(swapImage,5000);
}

window.onload=function() {
    imgCont = document.querySelector('#imgBanner');
    swapImage();
}
