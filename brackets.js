/**
 * @param {string | string[]} entry 
 * @returns {boolean} isValid
 */
function brackets(entry) {
    const stack = []
    const openingBrackets = /[\(\[\{]/
    const closingBrackets = /[\}\]\)]/

    for (const bracket of entry) {
        if (openingBrackets.test(bracket)) {
            stack.push(bracket)
        }

        if (closingBrackets.test(bracket)) {
            const lastOpeningBracket = stack.pop()

            if (!lastOpeningBracket ||
                lastOpeningBracket === '(' && bracket !== ')' ||
                lastOpeningBracket === '[' && bracket !== ']' ||
                lastOpeningBracket === '{' && bracket !== '}') {
                return false
            }
        }
    }

    return stack.length === 0
}

console.log('Задача 6')
console.log('Скобки')
console.log('([{]}])', brackets('([{]}])'))
console.log('([])', brackets('([])'))
console.log('(((()', brackets('(((()'))
console.log('())))', brackets('())))'))
console.log(['(', ')'], brackets(['(', ')']))