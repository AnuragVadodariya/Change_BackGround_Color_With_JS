const changebackcolor=document.getElementById('changebackcolor');
const btnclick=document.getElementById('btnclick');

changebackcolor.style.backgroundColor='aqua';

btnclick.addEventListener('click',changeColor);
const hexValuesGenerater=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

function changeColor(){
    let hexValue='#';
        for (let i = 0; i < 6; i++){
            const val = Math.floor(Math.random()*hexValuesGenerater.length)
            hexValue += hexValuesGenerater[val]
        }
        document.getElementById('display_colorNum').innerHTML=hexValue;
        changebackcolor.style.backgroundColor=hexValue;
}