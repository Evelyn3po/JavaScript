function FontSize(type){
  var=ids["#h4,#p"];
  ids.forEach(id=>{
    var elemento=document.querySelector(id);
    var size=window.getComputedStyle(elemento,null).getPropertyValues('font-size');
    size=parseFloat(size);
    if(type=='increase'){
      elemento.style.FontSize=(size+5)+"px";
    }else{
      elemento.style.fontSize=(size-5)+"px";
    }
  })
  }
