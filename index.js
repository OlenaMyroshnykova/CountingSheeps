const sampl1 = [ true,  true,  true,  false, true,  true,  true,  true , true,  false, true,  false, true,  false, false, true , true,  true,  true,  true , false, false, true,  true ];
const sampl2 = [ false, false, false ];



function countingSheeps(list) {
    let numberOfSheeps = 0;
    for (let index = 0; index < list.length; index++) {
        if (list[index] === true) {
            numberOfSheeps++;
        }
    }
    
    if (numberOfSheeps > 0) {
        console.log("There are " + numberOfSheeps + " sheep in total");
    } else {
        console.log("UPS!!! Wolfs eaten Sheeps");
    }
}

countingSheeps(sampl1);
countingSheeps(sampl2);