const list = [-13, -33, 2, -22, 220, 2, 1, 1] // => [-33, -22, -13, 1, 1, 2, 2, 220]
// const list = [-13, 2, -33] // => [-33, -13, 2]

function insertSorting(list = []) {
    const arr = [...list]

    for (let i = 1; i < arr.length; i++) {
        const currEl = arr[i]

        for (let j = i; j > -1; j--) {

            if (j - 1 < 0) {
                arr[j] = currEl
            }

            if (currEl < arr[j - 1]) {
                arr[j] = arr[j - 1]
            } else {
                arr[j] = currEl
                break
            }

        }
    }

    return arr
}

console.log('Задача #3')
console.log('Сортировка вставками')
console.log(insertSorting(list))