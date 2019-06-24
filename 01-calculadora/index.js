 function button5reponse()
 {
   let display=document.getElementById("display");
   let newValue= display.getAttribute("value")+5;
   display.setAttribute("value", newValue);   
 } 

let button5= document.getElementById("btn5");
button5.addEventListener("click", button5reponse);


 function buttonMasreponse()
 {
   let display=document.getElementById("display");
   let newValue= display.getAttribute("value")+"+";
   display.setAttribute("value", newValue);   
 } 

let buttonMas= document.getElementById("btnMas");
buttonMas.addEventListener("click", buttonMasreponse);

 function buttonIgualreponse()
 {
   let display=document.getElementById("display");
   let newValue= display.getAttribute("value")+"=";
   display.setAttribute("value", eval();   
 } 

let buttonIgual= document.getElementById("btnIgual");
buttonIgual.addEventListener("click", buttonIgualreponse);

 function button4reponse()
 {
   let display=document.getElementById("display");
   let newValue= display.getAttribute("value")+4;
   display.setAttribute("value", newValue);   
 } 

let button4= document.getElementById("btn4");
button4.addEventListener("click", button4reponse);



 function buttonBorrarHandler()
 {
   let display=document.getElementById("display");
   
   display.setAttribute("value", " ");   
 } 

let button5= document.getElementById("btn5");
button5.addEventListener("click", button5reponse);