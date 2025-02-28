function upDate(previewPic){
   console.log("Mouse over event triggered!");
   console.log("Image Source:", previewPic.src);
   console.log("Alt Text:", previewPic.alt);
       
   let imageDiv = document.getElementById('image');
   imageDiv.style.backgroundImage = `url(${previewPic.src})`;
   imageDiv.innerHTML = previewPic.alt;
     
}
   
function unDo(){
   let imageDiv= document.getElementById('image');
   imageDiv.style.backgroundImage="url('')";
   imageDiv.innerHTML="Hover over an image below to display here.";

}