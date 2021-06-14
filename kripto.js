
function LetterSpacingMenu() {
  if(document.getElementById){
  lnks = Math.floor(Math.random()*lnk.length);
  letterSpacing = Math.floor(Math.random()*nSpace);
  lnk[lnks].style.letterSpacing = letterSpacing + "px";
  timerLSM = setTimeout("LetterSpacingMenu()", nSpeed);
  }
}
function StopMenu() {
  if(document.getElementById) {
  clearTimeout(timerLSM);
  for(i=0;i<lnk.length;i++)
  lnk[i].style.letterSpacing = 0 + "px";
  }
}
function LSMenuInit() {
  if(document.getElementById) {
  lnk = document.getElementById("Basliklar").getElementsByTagName("a");
  cnt = document.getElementById("Basliklar");
  cnt.style.textAlign= "center";
  cnt.onmouseover=StopMenu;
  cnt.onmouseout=LetterSpacingMenu;
  LetterSpacingMenu();
  }
}
onload=LSMenuInit;
nSpace=7
nSpeed=200 
timerLSM=null;




