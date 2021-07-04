// Задача 2
const list = [-13, -33, 2, -22, 220, 2, 1, 1] // => [-33, -22, -13, 1, 1, 2, 2, 220]

function justSorting(list = []) {
    const arr = [...list]

    for (let i = 0; i < arr.length; i++) {
        let maxIdx = 0

        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[maxIdx]) {
                maxIdx = j
            }
        }

        const lastElIdx = arr.length - i - 1
        const temp = arr[lastElIdx]
        arr[lastElIdx] = arr[maxIdx]
        arr[maxIdx] = temp
    }

    return arr
}

console.log('Задача #2')
console.log('Обычная сортировка')
console.log(justSorting(list))