'use strict'

var gKeywordSearchCountMap = { 'funny': 0, 'cat': 0, 'baby': 0, 'dog': 0 }

var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['funny'] },
    { id: 2, url: 'img/2.jpg', keywords: ['dog'] },
    { id: 3, url: 'img/3.jpg', keywords: ['dog'] },
    { id: 4, url: 'img/4.jpg', keywords: ['dog'] },
    { id: 5, url: 'img/5.jpg', keywords: ['dog'] },
    { id: 6, url: 'img/6.jpg', keywords: ['dog'] },
    { id: 7, url: 'img/7.jpg', keywords: ['dog'] },
    { id: 8, url: 'img/2.jpg', keywords: ['dog'] },
    { id: 9, url: 'img/9.jpg', keywords: ['dog'] },
    { id: 10, url: 'img/10.jpg', keywords: ['dog'] },
    { id: 11, url: 'img/11.jpg', keywords: ['dog'] },
    { id: 12, url: 'img/12.jpg', keywords: ['dog'] },
    { id: 13, url: 'img/13.jpg', keywords: ['dog'] },
    { id: 14, url: 'img/14.jpg', keywords: ['dog'] },
    { id: 15, url: 'img/15.jpg', keywords: ['dog'] },
    { id: 16, url: 'img/16.jpg', keywords: ['dog'] },
    { id: 17, url: 'img/17.jpg', keywords: ['dog'] },
    { id: 18, url: 'img/18.jpg', keywords: ['dog'] }
]

var gMeme = {
    selectedImgId: null,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Text 1',
            size: 40,
            baseline: 'top',
            color: 'white',
            y: 10
        },
        {
            txt: 'Text 2',
            size: 40,
            baseline: 'bottom',
            color: 'white',
            y: gCanvas.height - 10
        }
    ]
}

var gCurrLineIdx = 0

function getMeme() {
    return gMeme
}

function setLineTxt(txt) {
    gMeme.lines[gCurrLineIdx].txt = txt
}

function setImg(id) {
    gMeme.selectedImgId = id
}

function setColor(color) {
    gMeme.lines[gCurrLineIdx].color = color
}

function setSize(diff) {
    gMeme.lines[gCurrLineIdx].size += diff
}

function setLineIdx() {
    if (!gCurrLineIdx) gCurrLineIdx++
    else gCurrLineIdx--
}

function moveLine(diff) {
    gMeme.lines[gCurrLineIdx].y += diff
}


function deleteLine() {
    setLineTxt('')
}

function addLine() {
    const newLine = {
        txt: 'Text',
        size: 40,
        baseline: 'center',
        color: 'white',
        y: gCanvas.height / 2
    }
    gMeme.lines.push(newLine)
    gCurrLineIdx = gMeme.lines.length - 1
}