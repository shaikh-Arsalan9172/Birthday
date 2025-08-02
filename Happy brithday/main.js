let currect = 0;


function fristq(){
  const Userinput = document.getElementById('userinput').value;
 const RESULT = document.getElementById('result');

if(Userinput==18){
  RESULT.textContent='Right answer 😊'
  currect++;
  document.getElementById('count').innerHTML=` <div id="count"><span>Score :</span>${currect}</div>`;


}else{
  RESULT.textContent="wroung answer 😭"
}
  
}



function sec_q(){
  const Userinput = document.getElementById('userinput-sec').value;
 const RESULT = document.getElementById('result_2');

if(Userinput=='Rohit saraf'){
  RESULT.textContent='Right answer 😍'
    currect++;
   document.getElementById('count').innerHTML=` <div id="count"><span>Score :</span>${currect}</div>`;

}else{
  RESULT.textContent="wroung answer 😖"
}
  
}




function third_q(){
  const Userinput = document.getElementById('userinput-third').value;
 const RESULT = document.getElementById('result_3');

if(Userinput=='Handsome logo ko dekhna'){
  RESULT.textContent='Right answer 🤭'
    currect++;
  document.getElementById('count').innerHTML=` <div id="count"><span>Score :</span>${currect}</div>`;

}else{
  RESULT.textContent="wroung answer 🙄"
}
  
}




function four_q(){
  const Userinput = document.getElementById('userinput-four').value;
 const RESULT = document.getElementById('result_4');

if(Userinput=='Ashish'){
  RESULT.textContent='Right answer 😁'
     currect++;
   document.getElementById('count').innerHTML=` <div id="count"><span>Score :</span>${currect}</div>`; 

}else{
  RESULT.textContent="wroung answer 🙃"
}
  
}



function getvideo(){


 
  
   if(currect<3){
    alert('You are not aplicabale')
    return;


   }else{
    document.getElementById('Video-btn').innerHTML=
    `<button id="Video-btn"><a href="index3.html" id="text_a">Get Start</a></button>`
   }
}



