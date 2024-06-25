function solution(array) {
    array.sort();
    array.sort(function (a, b) {
       return a - b;
    });
    return array[Math.floor(array.length/2)];
}