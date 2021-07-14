var images=["Father.jpg","Mother.png","Myself.jpg","Family.jpg"];
  var x =0 ;
  function nextslide(){
    if(x==4)
  {
    x=0;
  }
  document.getElementById("album").src= images[x];
    x++;
  }