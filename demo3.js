// var obj = {
//     q: 'qianmi',
//     w: 'wanmi',
// }
// // const arr = [1,2,3,4]
// // console.log("obj========", %DebugPrint(obj))
// // delete obj.q
// // obj.q = undefined
// console.log("obj========", %DebugPrint(obj))



function change(num) {
    if (typeof num !== "number") {
        return;
    }
    const numStrArr = [...num.toString()];
    const numStrArrSort = numStrArr.sort();
    const max = numStrArrSort[numStrArrSort.length - 1], min = numStrArrSort[0];
    const maxIndex = numStrArr.findIndex(i => i === max), minIndex = numStrArr.findIndex(i => i === min);
    const newArr = [...numStrArr];
    newArr[maxIndex] = min;
    newArr[minIndex] = max;
    return +newArr.join('');
}
change(1234)

function change2(num) {
    if (typeof num !== "number") {
        return;
    }
    const numStrArr = [...num.toString()];
    for (let i = 0; i < numStrArr.length; i++) {
        let max = numStrArr[i], maxIndex = '';
        for(let j=i+1; j<numStrArr.length; j++) {
            if(numStrArr[j] >= max) {
                max = numStrArr[j];
                maxIndex = j;
            }
        }
        if(max !== numStrArr[i]) {
            [numStrArr[i], numStrArr[maxIndex]] = [numStrArr[maxIndex], numStrArr[i]];
            break;
        }
    }
    return +numStrArr.join('');
}
change2(1234)




