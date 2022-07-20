function createGrid(size = 16) {
    let totalWidth = 960;
    const container = document.querySelector('.container');
    for (let i = 0; i < size; i++) {
        const col = document.createElement('div');
        col.setAttribute('style', `height:${totalWidth/size}px; width:${totalWidth}px;display:flex;`);
        container.appendChild(col);
        for (let i = 0; i < size; i++) {
            const row = document.createElement('div');
            row.setAttribute('style', 'border:1px solid red;flex:1');
            col.appendChild(row);
        }
    }
}

function paintGrid() {
    const divs = document.querySelectorAll('.container > div > div');

    divs.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.setAttribute('style', 'background-color:blue;border:1px solid red;flex:1')
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