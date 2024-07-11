function solution(age) {
    return age.toString().split('').map(i => String.fromCharCode((i * 1) + 97)).join('');
}