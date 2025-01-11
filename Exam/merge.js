//WAP TO IMPLEMENTS MERGE SORT IN JS

function mergeSort(el) {

    if (el.length <= 1) {
        return el;
    }

    let middle = Math.floor(el.length / 2);
    let left = el.slice(0, middle);
    let right = el.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}


function merge(left, right) {

    let result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {

        if (left[i] < right[j]) {

            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}


let array = [86 , 1 , 23 , 72 , 7];
console.log(mergeSort(array));
