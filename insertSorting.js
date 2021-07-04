const list = [-13, -33, 2, -22, 220, 2, 1, 1] // => [-33, -22, -13, 1, 1, 2, 2, 220]

function insertSorting(list = []) {
    const arr = [...list]

    for (let i = 1; i < arr.length; i++) {
        const currEl = arr[i]

        for (let j = i; j > 0; j--) {
            if (currEl < arr[j - 1]) {
                arr[j] = arr[j - 1]
                arr[j - 1] = currEl
            }
        }
    }

    return arr
}

console.log('Задача #3')
console.log('Сортировка вставками')
console.log(insertSorting(list))