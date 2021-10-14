$(document).ready(function () {
    let cellProp =[]
   
   
    let cellContainer = $(".input-cell-container")
    for (i = 1; i <= 100; i++) {
        let n = i
        let ans = ""
        while (n > 0) {
            let rem = n % 26
            if (rem == 0) {
                ans = "z" + ans
                n = Math.floor(n / 26) - 1
            } else {
                ans = String.fromCharCode(rem - 1 + 65) + ans
                n = Math.floor(n / 26)
            }
        }
        let column = $(`<div class="column-id-bar-item col-id-${i}" id="colcode-${ans}" >${ans}</div>`)
        $(`.column-id-bar`).append(column)

        let row = $(`<div class="row-id-bar-item">${i}</div>`)
        $(`.row-id-bar`).append(row)
    }

    for (i = 1; i <= 100; i++) {
        let cellRow = $(`<div class="cell-row">`)
        let temp=[]
        for (j = 1; j <= 100; j++) {
            let colCode = $(`.col-id-${j}`).attr("id").split("-")[1] + i
            let inputCell = $(`<div class="input-cell" contenteditable="true" id="${i}-${j}" data="${colCode}"></div>`)
            
            inputCell.click(function () {
                $(`.formula-bar-field`).text(inputCell.attr("data"))
                $(`cell-select`).removeClass("cell-select")
                $(this).addClass("cell-select")
               
            })

            
            cellRow.append(inputCell)

            temp[j]={
                bold:false,
                italics:false,
                align:"L",
                textColor:"black",
                backgroundColor:"white"
            }

        }
        cellProp[i]=temp
        $(`.input-cell-container`).append(cellRow)
    }

    $(`.menu-bar-item`).click(function () {
        $(`.selected-menu.selected-menu`).removeClass("selected-menu")
        $(this).addClass('selected-menu')
        console.log("clicked")
    })


    $(`.options-item`).click(() => {
     
        console.log($(`.cell-select`).attr("id"));
    })


    


    console.log(cellProp)
})