const changebackcolor=document.getElementById('changebackcolor');
const btnclick=document.getElementById('btnClick');

changebackcolor.style.backgroundColor='aqua';

btnclick.addEventListener('click',changeColor);

const arr_color=['black','blue','blueviolet','brown','chartreuse','chocolate',
'coral','cornflowerblue','crimson','cyan','darkblue','darkorange','dodgerblue',
'gold','gray','green'];

function changeColor(){
    let randomVal=parseInt(Math.random()*arr_color.length);
    changebackcolor.style.backgroundColor=arr_color[randomVal];
}