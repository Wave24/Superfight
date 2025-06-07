let text = document.getElementById('text');

function changeTheText(){
    text.textContent = document.getElementById('textGetter').value;
}

function changeTheColor(){
    text.style.color = document.getElementById('colorGetter').value;
}

function changeTheSize(){
    text.style.fontSize = document.getElementById('sizeGetter').value + 'px';
}
