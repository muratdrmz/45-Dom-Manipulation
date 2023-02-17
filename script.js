const btnEls=document.querySelectorAll('.btn');
const redDiv=document.getElementById('red');
const yellowDiv=document.getElementById('yellow');
const clearEl=document.querySelector('.clear');
const titleEl=document.getElementById('title');

// redDiv.addEventListener('click',function(){
//  console.log(redDiv.value)});
//  yellowDiv.onclick=()=>console.log(yellowDiv.value);
// let message='Merhaba';
// titleEl.innerText=message;
// // console.log(btnEls);
// // console.log(btnEls[0].value);
// // console.log(btnEls[1].value);
// // console.log(btnEls[2].value);



// let title=document.getElementById("title")
// // console.log('before:', message);
// title.innerHTML=`<p>${message}</p>`
// title.style.backgroundColor='red'
// let redDiv=document.getElementById("red");
// let yellowDiv=document.getElementById("yellow");
// let greenDiv=document.getElementById("green")
// redDiv.onclick=()=>console.log("you clicked red");
// yellowDiv.onclick=()=>console.log("you clicked yellow");
// greenDiv.onclick=()=>console.log("you clicked green");

// function redd(){
//  console.log("redfdfdfdd");
// }
// redDiv.onclick=redd


const timesClicked = { red: 0, yellow: 0, green: 0 };

btnEls.forEach(btnEl=>{
// btnEl.addEventListener('click',()=>{
//   console.log(btnEl.value);
// })
// btnEl.onclick=()=>console.log(btnEl.value);

btnEl.onclick=()=>{
count=timesClicked[btnEl.value]+=1;
btnEl.innerText=count;
}
});


clearEl.onclick=()=>{
  timesClicked.red = 0;
  timesClicked.yellow = 0;
  timesClicked.green = 0;  
  btnEls.forEach(btnEl=>btnEl.innerText='')
}

