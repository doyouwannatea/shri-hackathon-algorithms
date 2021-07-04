// Задача 1
const list = [-13, 0, 2, -22, 10, 2] // => [1, 2, 2, 3, 4, 10]

function bubleSorting(list = []) {
    const arr = [...list]
    let length = arr.length

    while (length > 1) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                const temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
            }
        }
        length -= 1
    }

    return arr
}

console.log(bubleSorting(list))