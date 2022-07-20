function createGrid(size = 16) {
    const container = document.querySelector('.container');
    container.setAttribute('style', 'border:1px solid red;');

    let totalWidth = size * 50;

    for (let i = 0; i < size; i++) {
        const col = document.createElement('div');
        col.setAttribute('style', `border:1px solid blue; height:50px; width:${totalWidth}px;
            display:flex;`);
        container.appendChild(col);
        for (let i = 0; i < size; i++) {
            const row = document.createElement('div');
            row.setAttribute('style', 'border:1px solid green; width: 50px; height:50px;');
            col.appendChild(row);
        }
    }
}

function paintGrid() {
    const divs = document.querySelectorAll('.container > div > div');

    divs.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.setAttribute('style', 'background-color:pink;width:50px;height:50px;border:1px solid red;')
        })
    });
}

function removeGrid() {
    const divs = document.querySelector('.container');
    divs.textContent = '';
}

function changeSize() {
    const newGridBtn = document.querySelector('.change-grid');
    newGridBtn.addEventListener('click', () => {
        let size = parseInt(prompt('Enter number for new grid size',16));
        removeGrid();
        createGrid(size);
        paintGrid();
    });
}

createGrid();
paintGrid();
changeSize();

//add eventlistener to button

//once pressed pop alert asking for sizebers
//store sizebers
//erase old grid
//make new grid
