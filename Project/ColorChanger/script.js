function changeColor(color) {
   document.body.style.backgroundColor = color;
   showSuccessPopup();
}

function showSuccessPopup() {
   const popup = document.getElementById('popup');
   popup.style.display = 'block';
   setTimeout(() => {
       popup.style.display = 'none';
   }, 2000); 
}
