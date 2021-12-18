'use strict'

var gCanvas = document.querySelector('#my-canvas')
var gCtx


function init() {
    renderGallery()
    gCtx = gCanvas.getContext('2d')
}

function renderGallery() {
    var elImgs = document.querySelector('.gallery')
    var strHTML = ''
    for (var i = 0; i < gImgs.length; i++) {
        // console.log('i:', i);
        strHTML += `<div class="gallery-item gallery-item-${i + 1}  " ><img src="img/${i + 1}.jpg" class="gallery-img" onclick="onImgSelect(${i + 1})"></div>`
        // console.log('strHTML:', strHTML);
    }
    elImgs.innerHTML = strHTML
}

function renderMemeEditor() {
    const elGallery = document.querySelector('.gallery')
    elGallery.style.visibility = 'hidden'
    const elEditor = document.querySelector('.meme-editor')
    elEditor.style.visibility = 'visible'
}

function renderMeme() {
    const meme = getMeme()
    var img = new Image()
    img.src = gImgs[meme.selectedImgId - 1].url
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        drawText(meme)
        drawRect()
    }
}

function focusText() {
    document.querySelector('.text-line').focus();
}

function drawText(meme) {
    for (var i = 0; i < meme.lines.length; i++) {
        const txt = meme.lines[i].txt
        const size = meme.lines[i].size
        const color = meme.lines[i].color
        const baseline = meme.lines[i].baseline
        gCtx.font = size + 'px impact'
        gCtx.textBaseline = baseline
        gCtx.textAlign = 'center'
        gCtx.lineWidth = 2
        gCtx.strokeStyle = 'black'
        gCtx.fillStyle = color;
        const x = gCanvas.width / 2
        const y = meme.lines[i].y
        gCtx.fillText(txt, x, y, gCanvas.width / 1.1)
        gCtx.strokeText(txt, x, y, gCanvas.width / 1.1)
    }
}

function onSetLineTxt() {
    const elTxt = document.querySelector('#name').value
    setLineTxt(elTxt)
    renderMeme()
}

function onImgSelect(id) {
    setImg(id)
    renderMemeEditor()
    renderMeme()
}

function onSetColor(color) {
    setColor(color)
    renderMeme()
}

function onSetSize(sign) {
    setSize(sign)
    renderMeme()
}

function onSwitchLines() {
    focusText()
    setLineIdx()
    drawRect()
    const meme = getMeme()
    renderMeme(meme)
}



function drawRect() {
    const currLine = gMeme.lines[gCurrLineIdx]
    gCtx.beginPath()
    var y
    if (gCurrLineIdx === 0) y = currLine.y
    else if (gCurrLineIdx === 1) y = currLine.y - 60
    else y = gCanvas.height / 2 - 50
    gCtx.rect(10, y, gCanvas.width - 20, 60);
    gCtx.closePath()
    gCtx.lineWidth = 3
    gCtx.strokeStyle = 'white';
    gCtx.stroke();
}


function onMoveLine(diff) {
    moveLine(diff)
    renderMeme()
}

function onDeleteLine() {
    deleteLine()
    renderMeme()
}

function onAddLine() {
    focusText()
    addLine()
    renderMeme()
}

function downloadCanvas(elLink) {
    const data = gCanvas.toDataURL();
    elLink.href = data;
    elLink.download = 'my-canvas';
}
