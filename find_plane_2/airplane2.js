//
//
// use function

window.onload=function () {

    drawExample();

    welcomePage();

    // drawGrid();
};

let step = 0
function transpose(matrix) {
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
}

// get canvas object
let oCanvas = document.querySelector('.gameCanvas');
// pencil, 2d content
let ctx = oCanvas.getContext('2d');


// set canvas width & height
oCanvas.width = 450;
oCanvas.height = 450;

// graph
let planeGrid = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];




// leftUpper edge
let leftUp1 = {};

function initPlane1() {
    leftUp1 = {
        x: parseInt(Math.random() * 15),
        y: parseInt(Math.random() * 15),
        dir: parseInt(Math.random() * 4)
    }
    let notValid = 1;
    while (notValid) {
        //↑
        if (leftUp1.dir == 0 && leftUp1.x+5<=15 && leftUp1.y+4<=15) {
            let planeHead = [leftUp1.x, leftUp1.y+2];
            let planeBody = [[leftUp1.x+1, leftUp1.y], [leftUp1.x+1, leftUp1.y+1], [leftUp1.x+1, leftUp1.y+2],
                [leftUp1.x+1, leftUp1.y+3], [leftUp1.x+1, leftUp1.y+4], [leftUp1.x+2, leftUp1.y+2],
                [leftUp1.x+3, leftUp1.y+1], [leftUp1.x+3, leftUp1.y+2], [leftUp1.x+3, leftUp1.y+3]];
            planeGrid[planeHead[0]][planeHead[1]] = 2;
            for (let i =0; i<planeBody.length; i++){
                planeGrid[planeBody[i][0]][planeBody[i][1]] = 1;
            }
            notValid = 0;
            break;
        }
        //→
        else if (leftUp1.dir == 1 && leftUp1.x+5<=15 && leftUp1.y-4>=0) {
            let planeHead = [leftUp1.x+2, leftUp1.y];
            let planeBody = [[leftUp1.x, leftUp1.y-1], [leftUp1.x+1, leftUp1.y-1], [leftUp1.x+2, leftUp1.y-1],
                [leftUp1.x+3, leftUp1.y-1], [leftUp1.x+4, leftUp1.y-1], [leftUp1.x+2, leftUp1.y-2],
                [leftUp1.x+1, leftUp1.y-3], [leftUp1.x+2, leftUp1.y-3], [leftUp1.x+3, leftUp1.y-3]];
            planeGrid[planeHead[0]][planeHead[1]] = 2;
            for (let i =0; i<planeBody.length; i++){
                planeGrid[planeBody[i][0]][planeBody[i][1]] = 1;
            }
            notValid = 0;
            break;
        }
        //↓
        else if (leftUp1.dir == 2 && leftUp1.x-4>=0 && leftUp1.y-5>=0) {
            let planeHead = [leftUp1.x, leftUp1.y-2];
            let planeBody = [[leftUp1.x-1, leftUp1.y], [leftUp1.x-1, leftUp1.y+1], [leftUp1.x-1, leftUp1.y+2],
                [leftUp1.x-1, leftUp1.y+3], [leftUp1.x-1, leftUp1.y+4], [leftUp1.x-2, leftUp1.y-2],
                [leftUp1.x-3, leftUp1.y-1], [leftUp1.x-3, leftUp1.y-2], [leftUp1.x-3, leftUp1.y-3]];
            planeGrid[planeHead[0]][planeHead[1]] = 2;
            for (let i =0; i<planeBody.length; i++){
                planeGrid[planeBody[i][0]][planeBody[i][1]] = 1;
            }
            notValid = 0;
            break;
        }
        //←
        else if (leftUp1.dir == 3 && leftUp1.x-5>=0 && leftUp1.y+4<=15) {
            let planeHead = [leftUp1.x-2, leftUp1.y];
            let planeBody = [[leftUp1.x, leftUp1.y+1], [leftUp1.x-1, leftUp1.y+1], [leftUp1.x-2, leftUp1.y+1],
                [leftUp1.x-3, leftUp1.y+1], [leftUp1.x-4, leftUp1.y+1], [leftUp1.x-2, leftUp1.y+2],
                [leftUp1.x-1, leftUp1.y+3], [leftUp1.x-2, leftUp1.y+3], [leftUp1.x-3, leftUp1.y+3]];
            planeGrid[planeHead[0]][planeHead[1]] = 2;
            for (let i =0; i<planeBody.length; i++){
                planeGrid[planeBody[i][0]][planeBody[i][1]] = 1;
            }
            notValid = 0;
            break;
        }
        else {
            leftUp1 = {
                x: parseInt(Math.random() * 15),
                y: parseInt(Math.random() * 15),
                dir: parseInt(Math.random() * 4)
            }
        }
    }

}

// leftUpper edge
let leftUp2 = {};

function initPlane2() {

    let notValid = 1;
    while (notValid) {
        leftUp2 = {
            x: parseInt(Math.random() * 15),
            y: parseInt(Math.random() * 15),
            dir: parseInt(Math.random() * 4)
        }
        //↑
        if (leftUp2.dir == 0 && leftUp2.x+5<=15 && leftUp2.y+5<=15) {
            let planeHead = [leftUp2.x, leftUp2.y+2];
            let planeBody = [[leftUp2.x+1, leftUp2.y+2], [leftUp2.x+2, leftUp2.y], [leftUp2.x+2, leftUp2.y+1],
                            [leftUp2.x+2, leftUp2.y+2], [leftUp2.x+2, leftUp2.y+3], [leftUp2.x+2, leftUp2.y+4],
                            [leftUp2.x+3, leftUp2.y+2], [leftUp2.x+4, leftUp2.y+1], [leftUp2.x+4, leftUp2.y+3]];
            if (planeGrid[planeHead[0]][planeHead[1]] !== 0) {
                continue;
            }
            let flag = 0
            for (let i = 0; i<planeBody.length; i++){
                if (planeGrid[planeBody[i][0]][planeBody[i][1]] !== 0) {
                    flag = 1;
                    break;
                }
            }
            if (flag === 0) {
                planeGrid[planeHead[0]][planeHead[1]] = 2;
                for (let i =0; i<planeBody.length; i++){
                    planeGrid[planeBody[i][0]][planeBody[i][1]] = 1;
                }
                notValid = 0;
                break;
            }

        }
        //→
        else if (leftUp2.dir == 1 && leftUp2.x+5<=15 && leftUp2.y-5>=0) {
            let planeHead = [leftUp2.x+2, leftUp2.y];
            let planeBody = [[leftUp2.x+2, leftUp2.y-1], [leftUp2.x, leftUp2.y-2], [leftUp2.x+1, leftUp2.y-2],
                            [leftUp2.x+2, leftUp2.y-2], [leftUp2.x+3, leftUp2.y-2], [leftUp2.x+4, leftUp2.y-2],
                            [leftUp2.x+2, leftUp2.y-3], [leftUp2.x+1, leftUp2.y-4], [leftUp2.x+3, leftUp2.y-4]];
            if (planeGrid[planeHead[0]][planeHead[1]] !== 0) {
                continue;
            }
            let flag = 0
            for (let i = 0; i<planeBody.length; i++){
                if (planeGrid[planeBody[i][0]][planeBody[i][1]] !== 0) {
                    flag = 1;
                    break;
                }
            }
            if (flag === 0) {
                planeGrid[planeHead[0]][planeHead[1]] = 2;
                for (let i =0; i<planeBody.length; i++){
                    planeGrid[planeBody[i][0]][planeBody[i][1]] = 1;
                }
                notValid = 0;
                break;
            }

        }
        //↓
        else if (leftUp2.dir == 2 && leftUp2.x-5>=0 && leftUp2.y-5>=0) {
            let planeHead = [leftUp2.x, leftUp2.y-2];
            let planeBody = [[leftUp2.x-1, leftUp2.y-2], [leftUp2.x-2, leftUp2.y], [leftUp2.x-2, leftUp2.y-1],
                            [leftUp2.x-2, leftUp2.y-2], [leftUp2.x-2, leftUp2.y-3], [leftUp2.x-2, leftUp2.y-4],
                            [leftUp2.x-3, leftUp2.y-2], [leftUp2.x-4, leftUp2.y-1], [leftUp2.x-4, leftUp2.y-3]];
            if (planeGrid[planeHead[0]][planeHead[1]] !== 0) {
                continue;
            }
            let flag = 0
            for (let i = 0; i<planeBody.length; i++){
                if (planeGrid[planeBody[i][0]][planeBody[i][1]] !== 0) {
                    flag = 1;
                    break;
                }
            }
            if (flag === 0) {
                planeGrid[planeHead[0]][planeHead[1]] = 2;
                for (let i =0; i<planeBody.length; i++){
                    planeGrid[planeBody[i][0]][planeBody[i][1]] = 1;
                }
                notValid = 0;
                break;
            }

        }
        //←
        else if (leftUp2.dir == 3 && leftUp2.x-5>=0 && leftUp2.y+5<=15) {
            let planeHead = [leftUp2.x-2, leftUp2.y];
            let planeBody = [[leftUp2.x-2, leftUp2.y-1], [leftUp2.x, leftUp2.y+2], [leftUp2.x-1, leftUp2.y+2],
                            [leftUp2.x-2, leftUp2.y+2], [leftUp2.x-3, leftUp2.y+2], [leftUp2.x-4, leftUp2.y+2],
                            [leftUp2.x-2, leftUp2.y+3], [leftUp2.x-1, leftUp2.y+4], [leftUp2.x-3, leftUp2.y+4]];
            if (planeGrid[planeHead[0]][planeHead[1]] !== 0) {
                continue;
            }
            let flag = 0
            for (let i = 0; i<planeBody.length; i++){
                if (planeGrid[planeBody[i][0]][planeBody[i][1]] !== 0) {
                    flag = 1;
                    break;
                }
            }
            if (flag === 0) {
                planeGrid[planeHead[0]][planeHead[1]] = 2;
                for (let i =0; i<planeBody.length; i++){
                    planeGrid[planeBody[i][0]][planeBody[i][1]] = 1;
                }
                notValid = 0;
                break;
            }

        }
        else {
            continue;
        }
    }

}

// leftUpper edge
let leftUp3 = {};

function initPlane3() {
    leftUp3 = {
        x: parseInt(Math.random() * 15),
        y: parseInt(Math.random() * 15),
        dir: parseInt(Math.random() * 4)
    }
    let notValid = 1;
    while (notValid) {
        //↑
        if (leftUp3.dir == 0 && leftUp3.x+7<=15 && leftUp3.y+5<=15) {
            let planeHead = [leftUp3.x, leftUp3.y+3];
            let planeBody = [[leftUp3.x+1, leftUp3.y+2], [leftUp3.x+1, leftUp3.y+3], [leftUp3.x+1, leftUp3.y+4],
                            [leftUp3.x+2, leftUp3.y+1], [leftUp3.x+2, leftUp3.y+3], [leftUp3.x+2, leftUp3.y+5],
                            [leftUp3.x+3, leftUp3.y], [leftUp3.x+4, leftUp3.y+3], [leftUp3.x+4, leftUp3.y+6],
                            [leftUp3.x+4, leftUp3.y+2], [leftUp3.x+4, leftUp3.y+3], [leftUp3.x+4, leftUp3.y+4]];
            if (planeGrid[planeHead[0]][planeHead[1]] !== 0) {
                continue;
            }
            let flag = 0
            for (let i = 0; i<planeBody.length; i++){
                if (planeGrid[planeBody[i][0]][planeBody[i][1]] !== 0) {
                    flag = 1;
                    break;
                }
            }
            if (flag === 0) {
                planeGrid[planeHead[0]][planeHead[1]] = 2;
                for (let i =0; i<planeBody.length; i++){
                    planeGrid[planeBody[i][0]][planeBody[i][1]] = 1;
                }
                notValid = 0;
                break;
            }
        }
        //→
        else if (leftUp3.dir == 1 && leftUp3.x+7<=15 && leftUp3.y-5>=0) {
            let planeHead = [leftUp3.x+3, leftUp3.y];
            let planeBody = [[leftUp3.x+2, leftUp3.y-1], [leftUp3.x+3, leftUp3.y-1], [leftUp3.x+4, leftUp3.y-1],
                            [leftUp3.x+1, leftUp3.y-2], [leftUp3.x+3, leftUp3.y-2], [leftUp3.x+5, leftUp3.y-2],
                            [leftUp3.x, leftUp3.y-3], [leftUp3.x+3, leftUp3.y-3], [leftUp3.x+6, leftUp3.y-3],
                            [leftUp3.x+2, leftUp3.y-4], [leftUp3.x+3, leftUp3.y-4], [leftUp3.x+4, leftUp3.y-4]];
            if (planeGrid[planeHead[0]][planeHead[1]] !== 0) {
                continue;
            }
            let flag = 0
            for (let i = 0; i<planeBody.length; i++){
                if (planeGrid[planeBody[i][0]][planeBody[i][1]] !== 0) {
                    flag = 1;
                    break;
                }
            }
            if (flag === 0) {
                planeGrid[planeHead[0]][planeHead[1]] = 2;
                for (let i =0; i<planeBody.length; i++){
                    planeGrid[planeBody[i][0]][planeBody[i][1]] = 1;
                }
                notValid = 0;
                break;
            }
        }
        //↓
        else if (leftUp3.dir == 2 && leftUp3.x-5>=0 && leftUp3.y-7>=0) {
            let planeHead = [leftUp3.x, leftUp3.y-3];
            let planeBody = [[leftUp3.x-1, leftUp3.y-2], [leftUp3.x-1, leftUp3.y-3], [leftUp3.x-1, leftUp3.y-4],
                            [leftUp3.x-2, leftUp3.y-1], [leftUp3.x-2, leftUp3.y-3], [leftUp3.x-2, leftUp3.y-5],
                            [leftUp3.x-3, leftUp3.y], [leftUp3.x-4, leftUp3.y-3], [leftUp3.x-4, leftUp3.y-6],
                            [leftUp3.x-4, leftUp3.y-2], [leftUp3.x-4, leftUp3.y-3], [leftUp3.x-4, leftUp3.y-4]];
            if (planeGrid[planeHead[0]][planeHead[1]] !== 0) {
                continue;
            }
            let flag = 0
            for (let i = 0; i<planeBody.length; i++){
                if (planeGrid[planeBody[i][0]][planeBody[i][1]] !== 0) {
                    flag = 1;
                    break;
                }
            }
            if (flag === 0) {
                planeGrid[planeHead[0]][planeHead[1]] = 2;
                for (let i =0; i<planeBody.length; i++){
                    planeGrid[planeBody[i][0]][planeBody[i][1]] = 1;
                }
                notValid = 0;
                break;
            }
        }
        //←
        else if (leftUp3.dir == 3 && leftUp3.x-7>=0 && leftUp3.y+5<=15) {
            let planeHead = [leftUp3.x-3, leftUp3.y];
            let planeBody = [[leftUp3.x-2, leftUp3.y+1], [leftUp3.x-3, leftUp3.y+1], [leftUp3.x-4, leftUp3.y+1],
                            [leftUp3.x-1, leftUp3.y+2], [leftUp3.x-3, leftUp3.y+2], [leftUp3.x-5, leftUp3.y+2],
                            [leftUp3.x, leftUp3.y+3], [leftUp3.x-3, leftUp3.y+3], [leftUp3.x-6, leftUp3.y+3],
                            [leftUp3.x-2, leftUp3.y+4], [leftUp3.x-3, leftUp3.y+4], [leftUp3.x-4, leftUp3.y+4]];
            if (planeGrid[planeHead[0]][planeHead[1]] !== 0) {
                continue;
            }
            let flag = 0
            for (let i = 0; i<planeBody.length; i++){
                if (planeGrid[planeBody[i][0]][planeBody[i][1]] !== 0) {
                    flag = 1;
                    break;
                }
            }
            if (flag === 0) {
                planeGrid[planeHead[0]][planeHead[1]] = 2;
                for (let i =0; i<planeBody.length; i++){
                    planeGrid[planeBody[i][0]][planeBody[i][1]] = 1;
                }
                notValid = 0;
                break;
            }
        }
        else {
            continue;
        }
    }
}




function welcomePage() {
    let planeMap = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    // transpose(planeMap);
    console.log(planeMap)
    for (let i = 0; i<15; i++) {
        for (let j = 0; j<15; j++) {
            if (planeMap[i][j] === 2) {
                ctx.fillStyle="#FF0000";
                ctx.fillRect(i*30, j*30, 28, 28);
            } else if (planeMap[i][j] === 1) {
                ctx.fillStyle="#0000FF";
                ctx.fillRect(i*30, j*30, 28, 28);
            } else {
                ctx.fillStyle="#DDDDDD";
                ctx.fillRect(i*30, j*30, 28, 28);
            }
        }
    }

}

function start_option() {
    alert('start');
    drawGrid();
}


function drawGrid(){
    transpose(planeGrid);


    // clean canvas every time, memset~
    ctx.clearRect(0, 0, oCanvas.width, oCanvas.height);
    // fill in colors

    initPlane1();
    initPlane2();
    initPlane3();


    console.log(planeGrid);
    for(let iRowCounter = 0; iRowCounter < 15; iRowCounter++)
    {
        drawRow(iRowCounter);
    }

    // Draw outline
    ctx.strokeStyle = '#FFFF3F';
    ctx.strokeRect(0, 0, 450, 450);

    oCanvas.addEventListener('click', reveal, false);

}

function drawRow(iRowCounter)
{
    // Draw 8 block left to right
    for(let iBlockCounter = 0; iBlockCounter < 15; iBlockCounter++)
    {
        drawBlock(iRowCounter, iBlockCounter);
    }
}

function drawBlock(iRowCounter, iBlockCounter)
{
    // Set the background
    ctx.fillStyle="#DDDDDD";

    // Draw rectangle for the background
    ctx.fillRect(iRowCounter * 30, iBlockCounter * 30, 28, 28);

    ctx.stroke();
}

function saveScore(score) {
    document.querySelector('.score-container').innerHTML = score
}

var findHead = 0;
function reveal(ev) {
    let bound = oCanvas.getBoundingClientRect();
    step += 1
    saveScore(step)

    let x = ev.clientX- bound.left;
    let y = ev.clientY- bound.top;
    console.log([x, y, Math.ceil(x/30), Math.ceil(y/30), Math.floor(x/30), Math.floor(y/30)])
    console.log([bound.left, bound.top, oCanvas.clientLeft, oCanvas.clientTop])
    let i = Math.floor(x/30),
        j = Math.floor(y/30);
        // ctx.fillStyle="#FFFFFF";
        // ctx.fillRect(i*30, j*30, 28, 28);
    if (planeGrid[i][j] === 0) {
        ctx.fillStyle="#FFFFFF";
        ctx.fillRect(i*30, j*30, 28, 28);
    } else if (planeGrid[i][j] === 1) {
        ctx.fillStyle="#0000FF";
        ctx.fillRect(i*30, j*30, 28, 28);
    } else {
        ctx.fillStyle="#FF0000";
        ctx.fillRect(i*30, j*30, 28, 28);
        findHead+=1;
        if (findHead === 3) {
            alert('^_^');
        }
    }

}

// Draw Example
function drawExample() {
    let canvas1 = document.querySelector('.plane1');

    // set canvas width & height
    canvas1.width = 150;
    canvas1.height = 120;
    // pencil, 2d content
    let ctx1 = canvas1.getContext('2d');
    let plane1_ex = [
        [0, 1, 0, 0],
        [0, 1, 0, 1],
        [2, 1, 1, 1],
        [0, 1, 0, 1],
        [0, 1, 0, 0]
    ];
    for (let i = 0; i < 5; i++){
        for (let j = 0; j < 4; j++){
            // ctx.strokeStyle = "rgba(0, 20, 55, 0.8)";
            // ctx.strokeRect(i*30,j*30,28,28);
            ctx1.fillStyle="#FFFFFF";
            ctx1.fillRect(i*30,j*30,28,28);

            if (plane1_ex[i][j] == 2){
                ctx1.fillStyle="#FF0000";
                ctx1.fillRect(i*30,j*30,28,28);
            }
            if (plane1_ex[i][j] == 1){
                ctx1.fillStyle="#0000FF";
                ctx1.fillRect(i*30,j*30,28,28);
            }
        }
    }

    let canvas2 = document.querySelector('.plane2');

    // set canvas width & height
    canvas2.width = 150;
    canvas2.height = 150;
    // pencil, 2d content
    let ctx2 = canvas2.getContext('2d');
    let plane2_ex = [
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 1],
        [2, 1, 1, 1, 0],
        [0, 0, 1, 0, 1],
        [0, 0, 1, 0, 0]
    ];
    for (let i = 0; i < 5; i++){
        for (let j = 0; j < 5; j++){
            // ctx.strokeStyle = "rgba(0, 20, 55, 0.8)";
            // ctx.strokeRect(i*30,j*30,28,28);
            ctx2.fillStyle="#FFFFFF";
            ctx2.fillRect(i*30,j*30,28,28);

            if (plane2_ex[i][j] == 2){
                ctx2.fillStyle="#FF0000";
                ctx2.fillRect(i*30,j*30,28,28);
            }
            if (plane2_ex[i][j] == 1){
                ctx2.fillStyle="#0000FF";
                ctx2.fillRect(i*30,j*30,28,28);
            }
        }
    }

    let canvas3 = document.querySelector('.plane3');

    // set canvas width & height
    canvas3.width = 210;
    canvas3.height = 150;
    // pencil, 2d content
    let ctx3 = canvas3.getContext('2d');
    let plane3_ex = [
        [0, 0, 0, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 1, 0, 0, 1],
        [2, 1, 1, 1, 1],
        [0, 1, 0, 0, 1],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0]
    ];
    for (let i = 0; i < 7; i++){
        for (let j = 0; j < 5; j++){
            // ctx.strokeStyle = "rgba(0, 20, 55, 0.8)";
            // ctx.strokeRect(i*30,j*30,28,28);
            ctx3.fillStyle="#FFFFFF";
            ctx3.fillRect(i*30,j*30,28,28);

            if (plane3_ex[i][j] == 2){
                ctx3.fillStyle="#FF0000";
                ctx3.fillRect(i*30,j*30,28,28);
            }
            if (plane3_ex[i][j] == 1){
                ctx3.fillStyle="#0000FF";
                ctx3.fillRect(i*30,j*30,28,28);
            }
        }
    }

}
