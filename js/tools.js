let toolsCont = document.querySelector('.tools-cont');
let optionsTool = document.querySelector('.options-cont');
let optionsFlag = false;

let pencilToolCont = document.querySelector('.pencil-tool-cont');
let eraserToolCont = document.querySelector('.eraser-tool-cont');

let pencil = document.querySelector('.pencil');
let eraser = document.querySelector('.eraser');
let pencilFlag = false;
let eraserFlag = false;

let body = document.querySelector('body');

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

let notes = document.querySelector('.notes');

function stickyListener(event, innerHTML) {

    const sticky = document.createElement('div');
    sticky.classList.add('sticky-cont');
    sticky.innerHTML = innerHTML;

    body.appendChild(sticky);

    let expandedFlag = true;
    let minimize = sticky.querySelector('.minimize');
    minimize.addEventListener('click', (e) => {
        expandedFlag = !expandedFlag;
        if(!expandedFlag) {
            sticky.querySelector('.note-cont').style.display = 'none'; 
        }else{
            sticky.querySelector('.note-cont').style.display = 'block'; 
        }
    })

    let remove = sticky.querySelector('.remove');
    remove.addEventListener('click', (e) => {
        sticky.remove();
    });

    sticky.addEventListener('mousedown', (event) => {
        let shiftX = event.clientX - sticky.getBoundingClientRect().left;
        let shiftY = event.clientY - sticky.getBoundingClientRect().top;
      
        sticky.style.position = 'absolute';
        sticky.style.zIndex = 1000;
      
        moveAt(event.pageX, event.pageY);
      
        // moves the sticky at (pageX, pageY) coordinates
        // taking initial shifts into account
        function moveAt(pageX, pageY) {
            sticky.style.left = pageX - shiftX + 'px';
            sticky.style.top = pageY - shiftY + 'px';
        }
      
        function onMouseMove(event) {
          moveAt(event.pageX, event.pageY);
        }
      
        // move the note on mousemove
        sticky.addEventListener('mousemove', onMouseMove);
      
        // drop the note, remove unneeded handlers
        sticky.onmouseup = function() {
          sticky.removeEventListener('mousemove', onMouseMove);
          sticky.onmouseup = null;
        };
      
    });

    sticky.ondragstart = function() {
        return false;
      };
}

notes.addEventListener('click', (e) => {
    let innerHTML = ` 
    <div class="sticky-cont">
        <div class="header-cont">
            <div class="minimize"></div>
            <div class="remove"></div>
        </div>
        <div class="note-cont">
            <textarea spellcheck="false"></textarea>
        </div>
    </div>`
    stickyListener(e, innerHTML);
});

let upload = document.querySelector('.upload');
    upload.addEventListener('click', (e) => {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.multiple = false;
        fileInput.style.display = 'block';
        fileInput.click();

        fileInput.addEventListener('change', (e) => {
            let file = fileInput.files[0];
            let url = URL.createObjectURL(file);

            let innerHTML = ` 
            <div class="sticky-cont">
                <div class="header-cont">
                    <div class="minimize"></div>
                    <div class="remove"></div>
                </div>
                <div class="note-cont">
                    <img src="${url}">
                </div>
            </div>`

            stickyListener(e, innerHTML);
            
        });
        
    });
