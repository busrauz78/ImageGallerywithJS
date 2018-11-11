document.getElementById('file').addEventListener('change', readURL, true);
const alert =document.querySelector('#alert');
const ul=document.querySelector('#image-gallery');

function readURL(){
   var file = document.getElementById("file").files[0];
var imageType=file.type.split('/');
 var li=document.createElement('li');
if(imageType[0]==='image'){
    alert.style.visibility='hidden';
    var reader = new FileReader();
reader.onloadend = function(){
  
li.style.backgroundImage="url("+reader.result+")";
ul.appendChild(li);
 }
}
else{
   
    alert.style.visibility='visible';
   
   
}
if(file){
    reader.readAsDataURL(file);
  }else{
  } 
}