let optionList = new Array();
let listHTMLs = "<p class=''"

function addOption(op_id) {
    optionList[optionList.length] = document.getElementById(op_id).value
    console.log(optionList)
    document.getElementById(op_id).value = ''

    document.getElementById("listcon").innerHTML = constructListHTML();
}

function constructListHTML() {
    let hold = ''

    for (let i = 0; i < optionList.length; i++) {
        hold += "<button class='pain' id='item"+i.toString()+"'onclick="+'"removeOption(' + "'item" + i.toString() + "'" + ')">' + optionList[i] + "</button>"
        if (i < optionList.length - 1) {
            hold += "\n"
        }
    }
    return hold;
}

function getIndexByString(in_array, term) {
    for (let i = 0; i < in_array.length; i++) {
        if (in_array[i] == term) {
            return i;
        }
    }
    return -1;
}

function removeOption(op_id) {
    console.log(op_id)
    to_remove = document.getElementById(op_id)

    index = getIndexByString(optionList, to_remove.innerHTML);
    if (index == -1) {
        return;
    }
    optionList.splice(index, 1);
    document.getElementById("listcon").innerHTML = constructListHTML();
}