function createGrid(size = 16) {
    let totalWidth = 860;
    const container = document.querySelector('.container');
    for (let i = 0; i < size; i++) {
        const col = document.createElement('div');
        col.setAttribute('style', `height:${totalWidth / size}px; width:${totalWidth}px;display:flex;`);
        container.appendChild(col);
        for (let i = 0; i < size; i++) {
            const row = document.createElement('div');
            row.setAttribute('style', 'border:1px solid #588c7e;flex:1;background-color: #eaece5;');

            col.appendChild(row);
        }
    }
}

function paintGrid() {
    const divs = document.querySelectorAll('.container > div > div');
    const color = document.querySelector('.picker');
    divs.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.setAttribute('style', `background-color:${color.value};border:1px solid #588c7e;flex:1`)
        })
    });
    color.addEventListener('click', () => {
        divs.forEach((div) => {
            div.addEventListener('mouseover', () => {
                div.setAttribute('style', `background-color:${color.value};border:1px solid #588c7e;flex:1`)
            })
        })
    });
}



function eraser() {
            const divs = document.querySelectorAll('.container > div > div');
            const eraseBtn = document.querySelector('.erase');
            eraseBtn.addEventListener('click', () => {
                divs.forEach((div) => {
                    div.addEventListener('mouseover', () => {
                        div.setAttribute('style', 'border:1px solid #588c7e;flex:1;background-color: #eaece5;');
                    })
                });
            });

        }

function rainbow() {
            const divs = document.querySelectorAll('.container > div > div');
            const rainbowBtn = document.querySelector('.rainbow');
            rainbowBtn.addEventListener('click', () => {
                console.log('rainbow');
                divs.forEach((div) => {
                    div.addEventListener('mouseover', () => {
                        div.setAttribute('style', `border:1px solid #588c7e;flex:1;
                background-color: rgb(${getRandom()},${getRandom()},${getRandom()});`);
                    })
                });
            });

        }

function getRandom() {
            return Math.floor(Math.random() * 256);
        }


function removeGrid() {
            const divs = document.querySelector('.container');
            divs.textContent = '';
        }

function changeSize() {
            const newGridBtn = document.querySelector('.change-grid');
            newGridBtn.addEventListener('click', () => {
                let size = parseInt(prompt('Enter number for new grid size', 16));
                removeGrid();
                createGrid(size);
                paintGrid();
                eraser();
                rainbow();
            });
        }

createGrid();
paintGrid();
changeSize();
eraser();
rainbow();
// add rainbow mode
// add eraser