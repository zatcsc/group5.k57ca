function setValue(Obj){
  Obj.value="";
}

function backupValue(){
  var Obj = document.getElementById("msg");
  if(Obj.value=="") Obj.value="Bạn vui lòng điền nội dung liên hệ và góp ý bên dưới:";
}