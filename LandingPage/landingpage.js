
//activity button
const activitybutton = document.getElementById("AL");
activitybutton.addEventListener("click",function(){

    window.location.href = "../ActivityLog/ActivityLog.html";
});

//member button
const memberbutton = document.getElementById("MEM");
memberbutton.addEventListener("click",function(){
  window.location.href = "../Members/Members.html";
});

const memberaddbutton = document.getElementById("MEMA");
memberaddbutton.addEventListener("click",function(){
  window.location.href = "../MemberAdd/MemberAdd.html";
});