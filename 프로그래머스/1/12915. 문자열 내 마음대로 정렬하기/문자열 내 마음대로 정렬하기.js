function solution(strings, n) {
    for (let i = 0; i < strings.length; i++) {
        for (let j = 0; j < strings.length; j++) {
            const prev = strings[i], next = strings[j]
            
            if (prev[n] === next[n] && prev < next) {
                strings = changeIndex(strings, i, j)
            } else if (prev[n] < next[n]) {
                strings = changeIndex(strings, i, j)
            }
        }
    }
    
    return strings;
}

function changeIndex(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    
    return arr;
}