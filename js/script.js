// create a webpage with 16x16 square divs
//must be made with js

//in a for loop create 16 divs in a cloumm
//addEleents of div 16 times
//ad style to container flex-dire:column

//in each div create 16 divs in a row


function createGrid(x,y) {
    const container = document.querySelector('.container');
    container.setAttribute('style', 'border:1px solid red;');

    let totalWidth = x * 50;
    let totalHeight = y * 50;
    for (let i = 0; i < y; i++) {
        const col = document.createElement('div');
        col.setAttribute('style', `border:1px solid blue; height:50px; width:${totalWidth}px;
            display:flex;`);
        container.appendChild(col);
        for (let i = 0; i < x; i++) {
            const row = document.createElement('div');
            row.setAttribute('style', 'border:1px solid green; width: 50px; height:50px;');
            col.appendChild(row);
        }
    }
}

createGrid(16,16)