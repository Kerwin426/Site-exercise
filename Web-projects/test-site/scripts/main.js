//let myHeading = document.querySelector("h1");
//myHeading.textContent = "Hello world!";

let myImage = document.querySelector("img");

myImage.onclick = function(){
    let mySrc = myImage.getAttribute("src");
    if(mySrc ==="image/gugu.jpg"){
        myImage.setAttribute("src","image/maomao.jpg");
    }
    else{
        myImage.setAttribute("src","image/gugu.jpg");
    }
};

let myButton = document.querySelector("button");//获取的是html中button的引用并赋值给myButton
let myHeading = document.querySelector("h1");

function setUserName(){
    let myName = prompt("请输入你的名字");//这里的prompt和alter类似，但是它需要用户手动输入内容
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem("name", myName);
        //localStorage 可以将数据存储在浏览器中，这里用setItem创建一个叫name的数据项
        myHeading.textContent = "Welcome " +myName;
    }
}

if(!localStorage.getItem("name")){
    setUserName();
    //如果没有name这个数据项，调用函数创建
}else{
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Welcome " +storedName;
}

myButton.onclick = function(){
    setUserName();
};