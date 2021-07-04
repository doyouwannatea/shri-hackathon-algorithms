const tree = {
    1: {
        value: 'к',
        next: [2, 6]
    },
    2: {
        value: 'о',
        next: [3, 4, 5]
    },
    3: {
        value: 'л',
        next: []
    },
    4: {
        value: 'б',
        next: []
    },
    5: {
        value: 'а',
        next: []
    },
    6: {
        value: 'с',
        next: [7]
    },
    7: {
        value: 'а',
        next: []
    }
}

function DFS(tree, root) {
    /**
     * @type array
     */
    const stack = tree[root].next
    console.log(tree[root].value)

    while (stack.length > 0) {
        const node = stack.shift()
        const { next, value } = tree[node]
        stack.unshift(...next)

        console.log(value)
    }
}

console.log('Задача #4')
console.log('DFS')
DFS(tree, 1)