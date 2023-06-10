let toolsCont = document.querySelector('.tools-cont');
let optionsTool = document.querySelector('.options-cont');
let optionsFlag = false;

let pencilToolCont = document.querySelector('.pencil-tool-cont');
let eraserToolCont = document.querySelector('.eraser-tool-cont');

let pencil = document.querySelector('.pencil');
let eraser = document.querySelector('.eraser');
let pencilFlag = false;
let eraserFlag = false;

optionsTool.addEventListener('click', (e) => {
    optionsFlag = !optionsFlag;
    if (optionsFlag) {
        optionsTool.children[0].classList.remove('fa-times');
        optionsTool.children[0].classList.add('fa-bars');
        toolsCont.style.display = 'none';
        pencilToolCont.style.display = 'none';
        eraserToolCont.style.display = 'none';
        
        
    } else {
        optionsTool.children[0].classList.remove('fa-bars');
        optionsTool.children[0].classList.add('fa-times');  
        toolsCont.style.display = 'flex';
        pencilToolCont.style.display = 'none';
        eraserToolCont.style.display = 'none';
    }
});

pencil.addEventListener('click', (e) => {
    pencilFlag = !pencilFlag;
    if (pencilFlag) {
        pencilToolCont.style.display = 'block';
    } else {
        pencilToolCont.style.display = 'none';
    }
});

eraser.addEventListener('click', (e) => {
    eraserFlag = !eraserFlag;
    if (eraserFlag) {
        eraserToolCont.style.display = 'flex';
    } else {
        eraserToolCont.style.display = 'none';
    }
});