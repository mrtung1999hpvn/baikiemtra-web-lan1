const test = ()=>{
    console.log('a')
}
console.log('a')
const Check=(x)=>{
    elements = document.getElementsByClassName(x);
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.color="rgb(255, 0, 0)";
        elements[i].style.fontSize="18px";
    }
    console.log('a')
}
window.onload = Check('tieude')


const LoadTrang=()=>{
    elements = document.getElementsByTagName('span');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.color="rgb(255, 0, 0)";
        elements[i].style.fontSize="18px";
    }
}
