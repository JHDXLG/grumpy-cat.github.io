

let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc ==='images/grumpy-cat.png'){
        myImage.setAttribute('src','images/loney-cat.png');
    } else {
        myImage.setAttribute('src','images/grumpy-cat.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
  }
}


if(!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.setItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
}
myButton.onclick = function(){
    setUserName();
}