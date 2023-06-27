// get canvas object
var oCanvas = document.querySelector('#game');
// pencil, 2d content
var ctx = oCanvas.getContext('2d');

// set canvas width & height
oCanvas.width = 300;
oCanvas.height = 300;


// graph
var planeGrid = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

// leftUpper edge
var leftUp1 = {};


var leftUp2 = {};

function initPlane1() {
    leftUp1 = {
        x : parseInt(Math.random() * 10),
        y : parseInt(Math.random() * 10),
        dir: parseInt(Math.random() * 4)
    }
    // window.alert(leftUp1.x);

    var notValid = 1;
    while (notValid){

        if(leftUp1.dir == 0 && leftUp1.y+4<10 && leftUp1.x+3<10) {
            notValid = 0;
            // window.alert(leftUp1.dir == 0);

            planeGrid[leftUp1.x][leftUp1.y+2] = 2;

            let planeBodyX1 = [leftUp1.x+1,leftUp1.x+1,leftUp1.x+1,leftUp1.x+1,
                leftUp1.x+1,leftUp1.x+2,leftUp1.x+3,leftUp1.x+3,leftUp1.x+3];
            let planeBodyY1 = [leftUp1.y,leftUp1.y+1,leftUp1.y+2,leftUp1.y+3,
                leftUp1.y+4,leftUp1.y+2,leftUp1.y+1,leftUp1.y+2,leftUp1.y+3];
            // console.log(planeBodyX1)
            // console.log(planeGrid)

            for (let i = 0; i<9; i++){
                planeGrid[planeBodyX1[i]][planeBodyY1[i]] = 1;
            }
            // console.log(planeGrid)
            // window.alert(planeBodyX1);
            break;

        } else if (leftUp1.dir == 1 && leftUp1.y-3>=0 && leftUp1.x+4<10) {
            notValid = 0;
            // window.alert(leftUp1.dir == 1);

            planeGrid[leftUp1.x+2][leftUp1.y] = 2;
            let planeBodyX1 = [leftUp1.x,leftUp1.x+1,leftUp1.x+2,leftUp1.x+3,
                leftUp1.x+4,leftUp1.x+2,leftUp1.x+1,leftUp1.x+2,leftUp1.x+3];
            let planeBodyY1 = [leftUp1.y-1,leftUp1.y-1,leftUp1.y-1,leftUp1.y-1,
                leftUp1.y-1,leftUp1.y-2,leftUp1.y-3,leftUp1.y-3,leftUp1.y-3];
            for (let i = 0; i<9; i++){
                planeGrid[planeBodyX1[i]][planeBodyY1[i]] = 1;
            }

            break;
        } else if (leftUp1.dir == 2 && leftUp1.y-4>=0 && leftUp1.x-3>=0) {
            notValid = 0;
            // window.alert(leftUp1.dir == 2);
            planeGrid[leftUp1.x][leftUp1.y-2] = 2;

            let planeBodyX1 = [leftUp1.x-1,leftUp1.x-1,leftUp1.x-1,leftUp1.x-1,
                leftUp1.x-1,leftUp1.x-2,leftUp1.x-3,leftUp1.x-3,leftUp1.x-3];
            let planeBodyY1 = [leftUp1.y,leftUp1.y-1,leftUp1.y-2,leftUp1.y-3,
                leftUp1.y-4,leftUp1.y-2,leftUp1.y-1,leftUp1.y-2,leftUp1.y-3];
            for (let i = 0; i<9; i++){
                planeGrid[planeBodyX1[i]][planeBodyY1[i]] = 1;
            }

            break;
        } else if (leftUp1.dir == 3 && leftUp1.y+3<10 && leftUp1.x-4>=0) {

            notValid = 0;
            planeGrid[leftUp1.x-2][leftUp1.y] = 2;
            let planeBodyX1 = [leftUp1.x,leftUp1.x-1,leftUp1.x-2,leftUp1.x-3,
                leftUp1.x-4,leftUp1.x-2,leftUp1.x-1,leftUp1.x-2,leftUp1.x-3];
            let planeBodyY1 = [leftUp1.y+1,leftUp1.y+1,leftUp1.y+1,leftUp1.y+1,
                leftUp1.y+1,leftUp1.y+2,leftUp1.y+3,leftUp1.y+3,leftUp1.y+3];
            // window.alert(planeBodyX1);
            for (let i = 0; i<9; i++){
                planeGrid[planeBodyX1[i]][planeBodyY1[i]] = 1;
            }

            break;
        } else {
            leftUp1 = {
                x : parseInt(Math.random() * 10),
                y : parseInt(Math.random() * 10),
                dir: parseInt(Math.random() * 4)
            }
        }
    }
};

function initPlane2() {
    // console.log(planeGrid);
    var notValid = 1;
    while (notValid){
        leftUp2 = {
            x : parseInt(Math.random() * 10),
            y : parseInt(Math.random() * 10),
            dir: parseInt(Math.random() * 4)
        }
        if(leftUp2.dir == 0 && leftUp2.y+4<10 && leftUp2.x+3<10) {
            // console.log(leftUp2.dir);
            let flag = 0;
            // window.alert(leftUp2.dir == 0);
            if (planeGrid[leftUp2.x][leftUp2.y+2] != 0){
                flag = 1;
            }

            let planeBodyX2 = [leftUp2.x+1,leftUp2.x+1,leftUp2.x+1,leftUp2.x+1,
                leftUp2.x+1,leftUp2.x+2,leftUp2.x+3,leftUp2.x+3,leftUp2.x+3];
            let planeBodyY2 = [leftUp2.y,leftUp2.y+1,leftUp2.y+2,leftUp2.y+3,
                leftUp2.y+4,leftUp2.y+2,leftUp2.y+1,leftUp2.y+2,leftUp2.y+3];
            // console.log(planeBodyX1)
            // console.log(planeGrid)

            for (let i = 0; i<9; i++){
                if (planeGrid[planeBodyX2[i]][planeBodyY2[i]] != 0){
                    flag = 1;
                    break;
                }
            }

            if (flag == 0){
                notValid = 0;
                planeGrid[leftUp2.x][leftUp2.y+2] = 2;
                for (let i = 0; i<9; i++){
                    planeGrid[planeBodyX2[i]][planeBodyY2[i]] = 1;
                }
                // console.log(planeGrid)
                // window.alert(planeBodyX1);
                break;
            }


        } else if (leftUp2.dir == 1 && leftUp2.y-3>=0 && leftUp2.x+4<10) {
            let flag = 0;
            if (planeGrid[leftUp2.x+2][leftUp2.y] != 0){
                flag = 1;
            }
            let planeBodyX2 = [leftUp2.x,leftUp2.x+1,leftUp2.x+2,leftUp2.x+3,
                leftUp2.x+4,leftUp2.x+2,leftUp2.x+1,leftUp2.x+2,leftUp2.x+3];
            let planeBodyY2 = [leftUp2.y-1,leftUp2.y-1,leftUp2.y-1,leftUp2.y-1,
                leftUp2.y-1,leftUp2.y-2,leftUp2.y-3,leftUp2.y-3,leftUp2.y-3];

            for (let i = 0; i<9; i++){
                if (planeGrid[planeBodyX2[i]][planeBodyY2[i]] != 0){
                    flag = 1;
                    break;
                }
            }

            if (flag == 0) {
                notValid = 0;

                planeGrid[leftUp2.x + 2][leftUp2.y] = 2;
                for (let i = 0; i < 9; i++) {
                    planeGrid[planeBodyX2[i]][planeBodyY2[i]] = 1;
                }
                break;
            }


        } else if (leftUp2.dir == 2 && leftUp2.y-4>=0 && leftUp2.x-3>=0) {
            let flag = 0;
            if (planeGrid[leftUp2.x][leftUp2.y-2] != 0){
                flag = 1;
            }

            let planeBodyX2 = [leftUp2.x-1,leftUp2.x-1,leftUp2.x-1,leftUp2.x-1,
                leftUp2.x-1,leftUp2.x-2,leftUp2.x-3,leftUp2.x-3,leftUp2.x-3];
            let planeBodyY2 = [leftUp2.y,leftUp2.y-1,leftUp2.y-2,leftUp2.y-3,
                leftUp2.y-4,leftUp2.y-2,leftUp2.y-1,leftUp2.y-2,leftUp2.y-3];

            for (let i = 0; i<9; i++){
                if (planeGrid[planeBodyX2[i]][planeBodyY2[i]] != 0){
                    flag = 1;
                    break;
                }
            }

            if (flag == 0) {
                notValid = 0;
                // window.alert(leftUp2.dir == 2);
                planeGrid[leftUp2.x][leftUp2.y - 2] = 2;
                for (let i = 0; i < 9; i++) {
                    planeGrid[planeBodyX2[i]][planeBodyY2[i]] = 1;
                }

                break;
            }
        } else if (leftUp2.dir == 3 && leftUp2.y+3<10 && leftUp2.x-4>=0) {
            let flag = 0;
            if (planeGrid[leftUp2.x-2][leftUp2.y] != 0){
                flag = 1;
            }

            let planeBodyX2 = [leftUp2.x,leftUp2.x-1,leftUp2.x-2,leftUp2.x-3,
                leftUp2.x-4,leftUp2.x-2,leftUp2.x-1,leftUp2.x-2,leftUp2.x-3];
            let planeBodyY2 = [leftUp2.y+1,leftUp2.y+1,leftUp2.y+1,leftUp2.y+1,
                leftUp2.y+1,leftUp2.y+2,leftUp2.y+3,leftUp2.y+3,leftUp2.y+3];

            for (let i = 0; i<9; i++){
                if (planeGrid[planeBodyX2[i]][planeBodyY2[i]] != 0){
                    flag = 1;
                    break;
                }
            }

            if (flag == 0) {
                notValid = 0;
                planeGrid[leftUp2.x - 2][leftUp2.y] = 2;
                // window.alert(planeBodyX1);
                for (let i = 0; i < 9; i++) {
                    planeGrid[planeBodyX2[i]][planeBodyY2[i]] = 1;
                }

                break;
            }
        } else {
            continue;
        }
    }
}


// use function
window.onload=function () {
    drawGrid();

    drawExample();
};

// create function
function drawGrid(){
    // clean canvas every time, memset~
    ctx.clearRect(0, 0, oCanvas.width, oCanvas.height);
    // fill in colors
    ctx.fillStyle =  'rgba(241, 242, 246, 0.8)';

    initPlane1();
    initPlane2();
    // console.log(planeGrid);
    for(let iRowCounter = 0; iRowCounter < 10; iRowCounter++)
    {
        drawRow(iRowCounter);
    }

    // Draw outline
    ctx.strokeStyle =  'rgba(204, 206, 205, 0.02)';
    ctx.strokeRect(0, 0, 300, 300);

    oCanvas.addEventListener('click', reveal, false);

}

function drawRow(iRowCounter)
{
    // Draw 8 block left to right
    for(let iBlockCounter = 0; iBlockCounter < 10; iBlockCounter++)
    {
        drawBlock(iRowCounter, iBlockCounter);
    }
}

function drawBlock(iRowCounter, iBlockCounter)
{
    // Set the background
    ctx.fillStyle="#DFDFDF";

    // Draw rectangle for the background
    ctx.fillRect(iRowCounter * 30, iBlockCounter * 30, 28, 28);

    ctx.stroke();
}



var findHead = 0;
function reveal(ev) {
    let bound = oCanvas.getBoundingClientRect();

    let x = ev.clientX- bound.left - 20;
    let y = ev.clientY- bound.top - 20;
    console.log([x, y, Math.ceil(x/30), Math.ceil(y/30), Math.floor(x/30), Math.floor(y/30)])
    console.log([bound.left, bound.top, oCanvas.clientLeft, oCanvas.clientTop])
    let i = Math.floor(x/30),
        j = Math.floor(y/30);

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
        if (findHead == 2) {


            let x;
            var r = confirm("success ^_^");
            if (r == true) {
                x = "new game";
            } else {
                x = "current plane revealed";
            }

            if (x === "new game"){
                location.reload();
            }
            else {
                for (let a = 0; a < 10; a++){
                    for (let b = 0; b < 10; b++) {

                        ctx.fillStyle="#FFFFFF";
                        ctx.fillRect(a*30,b*30,28,28);

                        if (planeGrid[a][b] == 2){
                            ctx.fillStyle="#FF0000";
                            ctx.fillRect(a*30,b*30,28,28);
                        }
                        if (planeGrid[a][b] == 1){
                            ctx.fillStyle="#0000FF";
                            ctx.fillRect(a*30,b*30,28,28);
                        }
                    }
                }
            }

        }
    }

}


/*
[0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
[0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
[0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
[0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
[0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
[0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
[0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
 */

var canvas = document.querySelector('#example');
// pencil, 2d content
var ctx2 = canvas.getContext('2d');

// set canvas width & height
canvas.width = 300;
canvas.height = 300;

function drawExample() {
    // clean canvas every time, memset~
    ctx2.clearRect(0, 0, canvas.width, canvas.height);
    // fill in colors
    ctx2.fillStyle =  'rgba(241, 242, 246, 0.8)';
    let ex_plane = [
        [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 0, 0, 0]
    ];

    for (let i = 0; i < 10; i++){
        for (let j = 0; j < 10; j++){
            // ctx.strokeStyle = "rgba(0, 20, 55, 0.8)";
            // ctx.strokeRect(i*30,j*30,28,28);
            ctx2.fillStyle="#DFDFDF";
            ctx2.fillRect(i*30,j*30,28,28);

            if (ex_plane[i][j] == 2){
                ctx2.fillStyle="#FF0000";
                ctx2.fillRect(i*30,j*30,28,28);
            }
            if (ex_plane[i][j] == 1){
                ctx2.fillStyle="#0000FF";
                ctx2.fillRect(i*30,j*30,28,28);
            }
        }
    }
}

function revealFunc() {
    for (let i = 0; i < 10; i++){
        for (let j = 0; j < 10; j++){
            // ctx.strokeStyle = "rgba(0, 20, 55, 0.8)";
            // ctx.strokeRect(i*30,j*30,28,28);
            ctx.fillStyle="#FFFFFF";
            ctx.fillRect(i*30,j*30,28,28);

            if (planeGrid[i][j] == 2){
                ctx.fillStyle="#FF0000";
                ctx.fillRect(i*30,j*30,28,28);
            }
            if (planeGrid[i][j] == 1){
                ctx.fillStyle="#0000FF";
                ctx.fillRect(i*30,j*30,28,28);
            }

        }
    }
}

function nextFunc() {
    location.reload();
}