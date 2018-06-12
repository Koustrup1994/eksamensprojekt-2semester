// Get the modal
var modal = document.querySelector('#myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.querySelector('#myImg');
var modalImg = document.querySelector('#img01');
var captionText = document.querySelector('#caption');
img.onclick = function(){
    modal.style.display = 'block';
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.querySelector('.close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = 'none';
}
}

// Get the modal
var modal = document.querySelector('#myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.querySelector('#myImg-1');
var modalImg = document.querySelector('#img01');
var captionText = document.querySelector('#caption');
img.onclick = function(){
    modal.style.display = 'block';
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.querySelector('.close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = 'none';
}
