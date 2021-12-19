'use strict'

var gCanvas = document.querySelector('#my-canvas')
var gCtx


function init() {
    renderGallery()
    gCtx = gCanvas.getContext('2d')
}


function renderMeme() {
    const meme = getMeme()
    const elTxt = document.querySelector('#name')
    elTxt.value = meme.lines[gCurrLineIdx].txt
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
    meme.lines.forEach((line) => {
        var { txt, size, color, baseline } = line
        gCtx.font = size + 'px impact'
        gCtx.textBaseline = baseline
        gCtx.textAlign = 'center'
        gCtx.lineWidth = 2
        gCtx.strokeStyle = 'black'
        gCtx.fillStyle = color;
        const x = gCanvas.width / 2
        const y = line.y
        gCtx.fillText(txt, x, y, gCanvas.width / 1.1)
        gCtx.strokeText(txt, x, y, gCanvas.width / 1.1)
    })
}

function onSetLineTxt() {
    const elTxt = document.querySelector('#name').value
    setLineTxt(elTxt)
    renderMeme()
}

function onImgSelect(id) {
    setImg(id)
    moveToSection('meme-editor', 'gallery')
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
    const txt = gMeme.lines[gCurrLineIdx].txt
    // console.log('gCtx.measureText(txt):', gCtx.measureText(txt));
    if (!currLine) return
    gCtx.beginPath()
    const y = currLine.y - 50
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

