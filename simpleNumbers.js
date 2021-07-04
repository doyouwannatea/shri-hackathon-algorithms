function printSimpleNumbers(number) {
    for (let i = 2; i <= number; i++) {
        let isSimple = true

        for (let j = 2; j < i; j++) {
            if (i !== j && i % j === 0) {
                isSimple = false
                break
            }
        }

        if (isSimple) {
            console.log(i)
        }
    }
}

console.log('Задача 7')
console.log('Простые числа')
printSimpleNumbers(100)