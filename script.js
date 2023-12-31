let img=document.querySelectorAll("img");


let border=document.getElementById("border");
border.addEventListener("input", handleBorder);


let opacity=document.getElementById("opacity");
opacity.addEventListener("input", handleOpacity);



function handleOpacity(){
    let value=opacity.value;
    let jsonValue= JSON.stringify(value);
    localStorage.setItem("opacityJson", jsonValue);
    for (let index = 0; index < img.length; index++) {
        img[index].style.opacity = `${value}`;
    }
}


function handleBorder(){
    let value=border.value;
    let jsonValue= JSON.stringify(value);
    localStorage.setItem("borderJson", jsonValue);
    for (let index = 0; index < img.length; index++) {
        img[index].style.border = `${value}px solid black`;
    }
    
}


window.addEventListener("load", getLocal);

function getLocal(){
    let newBorder=localStorage.getItem("borderJson");
    let newOpacity=localStorage.getItem("opacityJson");

    if(newBorder!==null){
        border.value=JSON.parse(newBorder);
        handleBorder();
    }

    if(newOpacity!==null){
        opacity.value=localStorage.getItem(newOpacity);
        handleOpacity();
    }

}


