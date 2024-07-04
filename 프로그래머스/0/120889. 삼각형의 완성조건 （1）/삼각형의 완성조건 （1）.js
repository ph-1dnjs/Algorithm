function solution(sides) {
    sides.sort(function (a, b) {
        return a - b;
    })
    return sides[2] < (sides[0] + sides[1]) ? 1 : 2; 
}