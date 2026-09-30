const table = document.querySelector('table')


const state = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
]

let shape = 'T';
let variant = 0;

const tetrominos = {
    T: [
        [
            [0, 1, 0],
            [1, 1, 1],
            [0, 0, 0],
        ],
        [
            [0, 1, 0],
            [1, 1, 0],
            [0, 1, 0],
        ],
        [
            [0, 0, 0],
            [1, 1, 1],
            [0, 1, 0],
        ],
        [
            [0, 1, 0],
            [0, 1, 1],
            [0, 1, 0],
        ],

    ]
}

let rowIndex = 0;
let columnIndex = 4;

render();

onkeydown = handleKeys;

function moveDown() {
    rowIndex++;
}
function moveRight() {
    columnIndex++;
}
function moveLeft() {
    columnIndex--;
}

function rotate(){
    variant++;
    if(variant >= 4){
        variant = 0;
    }
}

function handleKeys(e) {
    if (e.key == 'ArrowLeft') {
        moveLeft()
    } else if (e.key == 'ArrowRight') {
        moveRight()
    } else if (e.key == 'ArrowUp') {
        rotate()
    } else if (e.key == 'ArrowDown') {
        moveDown()
    } else {
        return;
    }
    render();
}

function render() {
    const stencil = structuredClone(state);
    const tetromino = tetrominos[shape][variant];

    for (let i = 0; i < tetromino.length; i++) {
        const row = tetromino[i];
        for (let j = 0; j < row.length; j++) {
            const cell = row[j];
            if (cell) stencil[i + rowIndex][j + columnIndex] = cell;
        }
    }

    for (let i = 0; i < stencil.length; i++) {
        const row = stencil[i];
        for (let j = 0; j < row.length; j++) {
            const active = row[j];
            table.rows[i].cells[j].classList.toggle('active', active);
        }
    }
}
