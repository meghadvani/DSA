//Selection sort in JS

function selection(array) {
    let n = array.length;

    for (let i = 0; i < n - 1; i++) {
        let min = i; 
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }

        
        if (min != i) {
            let temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }

    return array;
}


let array = [64, 25, 12, 22, 11];
let result = selection(array);

console.log(result);