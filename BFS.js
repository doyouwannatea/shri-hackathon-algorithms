const tree = {
    1: {
        value: '1',
        next: [2, 6]
    },
    2: {
        value: '2',
        next: [3, 4, 5]
    },
    3: {
        value: '3',
        next: []
    },
    4: {
        value: '4',
        next: []
    },
    5: {
        value: '5',
        next: []
    },
    6: {
        value: '6',
        next: [7]
    },
    7: {
        value: '7',
        next: []
    }
}

function BFS(tree, root) {
    /**
     * @type array
     */
    const stack = tree[root].next
    console.log(tree[root].value)

    while (stack.length > 0) {
        const node = stack.shift()
        const { next, value } = tree[node]
        stack.push(...next)

        console.log(value)
    }
}

console.log('Задача #5')
console.log('BFS')
BFS(tree, 1)