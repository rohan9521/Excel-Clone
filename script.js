$(document).ready(function() {
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
        for (j = 1; j <= 100; j++) {
            let colCode = $(`.col-id-${j}`).attr("id").split("-")[1]
            let inputCell = $(`<div class="input-cell" contenteditable="true" id="rowid-${i}-colid-${j}" data="${colCode}"></div>`)
            inputCell.click(function() {
                $(`.formula-bar-field`).val(inputCell.attr("id"))
            })
            cellRow.append(inputCell)
        }
        $(`.input-cell-container`).append(cellRow)
    }

    console.log(ans)
})