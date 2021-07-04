function printSimpleNumbers(number) {
    const cache = new Set()

    for (let i = 2; i <= number; i++) {
        let isSimple = true

        if (cache.has(i)) {
            continue
        }

        for (const simple of Array.from(cache)) {
            if (i !== simple && i % simple === 0) {
                isSimple = false
                break
            }
        }

        if (isSimple) {
            console.log(i)
            cache.add(i)
        }
    }
}

console.log('Задача 7')
console.log('Простые числа')
printSimpleNumbers(10)