function transpose(matrix) {
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
}

window.onload = function () {
    Game = new FindAirplaneHead('gameCanvas');

    var startButton = document.querySelector('#next')
    var revealButton = document.querySelector('#cur')

    startButton.onclick = function () {
        Game.restart()
    }

    revealButton.onclick = function () {
        Game.reveal()
    }

    Example = new AirplaneExample('exampleCanvas')


}

var FindAirplaneHead = function (id) {
    this.Gcanvas = document.getElementById(id);
    this.Gctx = this.Gcanvas.getContext('2d');

    this.Gcanvas.width = 300;
    this.Gcanvas.height = 300;
    this.mapLength = 10;
    this.leftUp = {};

    this.planeGrid = [
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

    this._init();
}

FindAirplaneHead.prototype._init = function () {
    this.Gctx.clearRect(0, 0, this.Gcanvas.width, this.Gcanvas.height);

    this.initPlane();
    this.initPlane();
    transpose(this.planeGrid);
    // console.log(this.planeGrid);
    this._drawGrid();
    // this.Gcanvas.addEventListener('click', this.flip, false);


}

FindAirplaneHead.prototype._drawGrid = function () {
    // console.log(this.planeGrid)

    for (let i = 0; i<this.mapLength; i++) {
        for (let j = 0; j<this.mapLength; j++) {
            this.Gctx.fillStyle = "#DDDDDD"
            this.Gctx.fillRect(i*30, j*30, 28, 28)
        }
    }
    // this.Gcanvas.addEventListener('click', this.flip, false);

    this.Gcanvas.addEventListener('mousedown', (e) => {
          flip(this.Gcanvas, this.Gctx, e, this.planeGrid)
    })
}

// function sleep()
// {
//     // defer the execution of anonymous function for
//     // 3 seconds and go to next line of code.
//     setTimeout(function(){
//
//
//     }, 1000);
//
//
// }

var HeadCnt = 0;
const flip = (canvas, context, event, plane) => {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    // console.log(x, y)

    let i = Math.floor(x/30),
        j = Math.floor(y/30);
    // console.log([x, y, i, j])
    // console.log(plane)

    if (plane[i][j] === 0) {
        context.fillStyle="#FFFFFF";
        context.fillRect(i*30, j*30, 28, 28);
    } else if (plane[i][j] === 1) {
        context.fillStyle="#0000FF";
        context.fillRect(i*30, j*30, 28, 28);
    } else {
        context.fillStyle="#FF0000";
        context.fillRect(i*30, j*30, 28, 28);
        HeadCnt += 1;
        if (HeadCnt === 2) {
            setTimeout(function(){
                alert('success ^_^');

            }, 1000);

        }
    }
}

FindAirplaneHead.prototype.initPlane = function () {
    let notValid = 1;
    while (notValid) {
        this.leftUp = {
            x: parseInt(Math.random() * this.mapLength),
            y: parseInt(Math.random() * this.mapLength),
            dir: parseInt(Math.random() * 4)
        }
        //↑
        if (this.leftUp.dir == 0 && this.leftUp.x+5<=this.mapLength && this.leftUp.y+4<=this.mapLength) {
            let planeHead = [this.leftUp.x, this.leftUp.y+2];
            let planeBody = [[this.leftUp.x+1, this.leftUp.y], [this.leftUp.x+1, this.leftUp.y+1], [this.leftUp.x+1, this.leftUp.y+2],
                [this.leftUp.x+1, this.leftUp.y+3], [this.leftUp.x+1, this.leftUp.y+4], [this.leftUp.x+2, this.leftUp.y+2],
                [this.leftUp.x+3, this.leftUp.y+1], [this.leftUp.x+3, this.leftUp.y+2], [this.leftUp.x+3, this.leftUp.y+3]];
            if (this.planeGrid[planeHead[0]][planeHead[1]] !== 0) {
                continue;
            }
            let flag = 0
            for (let i = 0; i<planeBody.length; i++){
                if (this.planeGrid[planeBody[i][0]][planeBody[i][1]] !== 0) {
                    flag = 1;
                    break;
                }
            }
            if (flag === 0) {
                this.planeGrid[planeHead[0]][planeHead[1]] = 2;
                for (let i =0; i<planeBody.length; i++){
                    this.planeGrid[planeBody[i][0]][planeBody[i][1]] = 1;
                }
                notValid = 0;
                break;
            }

        }
        //→
        else if (this.leftUp.dir == 1 && this.leftUp.x+5<=this.mapLength && this.leftUp.y-4>=0) {
            let planeHead = [this.leftUp.x+2, this.leftUp.y];
            let planeBody = [[this.leftUp.x, this.leftUp.y-1], [this.leftUp.x+1, this.leftUp.y-1], [this.leftUp.x+2, this.leftUp.y-1],
                [this.leftUp.x+3, this.leftUp.y-1], [this.leftUp.x+4, this.leftUp.y-1], [this.leftUp.x+2, this.leftUp.y-2],
                [this.leftUp.x+1, this.leftUp.y-3], [this.leftUp.x+2, this.leftUp.y-3], [this.leftUp.x+3, this.leftUp.y-3]];
            if (this.planeGrid[planeHead[0]][planeHead[1]] !== 0) {
                continue;
            }
            let flag = 0
            for (let i = 0; i<planeBody.length; i++){
                if (this.planeGrid[planeBody[i][0]][planeBody[i][1]] !== 0) {
                    flag = 1;
                    break;
                }
            }
            if (flag === 0) {
                this.planeGrid[planeHead[0]][planeHead[1]] = 2;
                for (let i =0; i<planeBody.length; i++){
                    this.planeGrid[planeBody[i][0]][planeBody[i][1]] = 1;
                }
                notValid = 0;
                break;
            }

        }
        //↓
        else if (this.leftUp.dir == 2 && this.leftUp.x-4>=0 && this.leftUp.y-5>=0) {
            let planeHead = [this.leftUp.x, this.leftUp.y-2];
            let planeBody = [[this.leftUp.x-1, this.leftUp.y], [this.leftUp.x-1, this.leftUp.y-1], [this.leftUp.x-1, this.leftUp.y-2],
                [this.leftUp.x-1, this.leftUp.y-3], [this.leftUp.x-1, this.leftUp.y-4], [this.leftUp.x-2, this.leftUp.y-2],
                [this.leftUp.x-3, this.leftUp.y-1], [this.leftUp.x-3, this.leftUp.y-2], [this.leftUp.x-3, this.leftUp.y-3]];
            if (this.planeGrid[planeHead[0]][planeHead[1]] !== 0) {
                continue;
            }
            let flag = 0
            for (let i = 0; i<planeBody.length; i++){
                if (this.planeGrid[planeBody[i][0]][planeBody[i][1]] !== 0) {
                    flag = 1;
                    break;
                }
            }
            if (flag === 0) {
                this.planeGrid[planeHead[0]][planeHead[1]] = 2;
                for (let i =0; i<planeBody.length; i++){
                    this.planeGrid[planeBody[i][0]][planeBody[i][1]] = 1;
                }
                notValid = 0;
                break;
            }

        }
        //←
        else if (this.leftUp.dir == 3 && this.leftUp.x-5>=0 && this.leftUp.y+4<=this.mapLength) {
            let planeHead = [this.leftUp.x-2, this.leftUp.y];
            let planeBody = [[this.leftUp.x, this.leftUp.y+1], [this.leftUp.x-1, this.leftUp.y+1], [this.leftUp.x-2, this.leftUp.y+1],
                [this.leftUp.x-3, this.leftUp.y+1], [this.leftUp.x-4, this.leftUp.y+1], [this.leftUp.x-2, this.leftUp.y+2],
                [this.leftUp.x-1, this.leftUp.y+3], [this.leftUp.x-2, this.leftUp.y+3], [this.leftUp.x-3, this.leftUp.y+3]];
            if (this.planeGrid[planeHead[0]][planeHead[1]] !== 0) {
                continue;
            }
            let flag = 0
            for (let i = 0; i<planeBody.length; i++){
                if (this.planeGrid[planeBody[i][0]][planeBody[i][1]] !== 0) {
                    flag = 1;
                    break;
                }
            }
            if (flag === 0) {
                this.planeGrid[planeHead[0]][planeHead[1]] = 2;
                for (let i =0; i<planeBody.length; i++){
                    this.planeGrid[planeBody[i][0]][planeBody[i][1]] = 1;
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

FindAirplaneHead.prototype.reveal = function () {
    for (let i = 0; i<this.planeGrid.length; i++) {
        for (let j = 0; j<this.planeGrid[0].length; j++) {
            if (this.planeGrid[i][j] === 2) {
                this.Gctx.fillStyle = "#FF0000";
            } else if (this.planeGrid[i][j] === 1) {
                this.Gctx.fillStyle = "#0000FF"
            } else {
                this.Gctx.fillStyle = "#FFFFFF"
            }
            this.Gctx.fillRect(i*30, j*30, 28, 28)
        }
    }
}

FindAirplaneHead.prototype.restart = function () {
    this.planeGrid = [
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
    this._init();
}



var AirplaneExample = function (id) {
    this.Ecanvas = document.getElementById(id);
    this.Ectx = this.Ecanvas.getContext('2d');

    this.Ecanvas.width = 300;
    this.Ecanvas.height = 300;

    this.map_example = [
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
    transpose(this.map_example)
    this._drawExample();
}

AirplaneExample.prototype._drawExample = function () {
    for (let i = 0; i<this.map_example.length; i++) {
        for (let j = 0; j<this.map_example[0].length; j++) {
            if (this.map_example[i][j] === 2) {
                this.Ectx.fillStyle = "#FF0000";
            } else if (this.map_example[i][j] === 1) {
                this.Ectx.fillStyle = "#0000FF"
            } else {
                this.Ectx.fillStyle = "#DDDDDD"
            }
            this.Ectx.fillRect(i*30, j*30, 28, 28)
        }
    }
}