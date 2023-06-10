let toolsCont = document.querySelector('.tools-cont');
let optionsTool = document.querySelector('.options-cont');
let optionsFlag = true;

optionsTool.addEventListener('click', (e) => {
    optionsFlag = !optionsFlag;
    if (optionsFlag) {
        optionsTool.children[0].classList.remove('fa-times');
        optionsTool.children[0].classList.add('fa-bars');
        
    } else {
        optionsTool.children[0].classList.remove('fa-bars');
        optionsTool.children[0].classList.add('fa-times');  
    }
});