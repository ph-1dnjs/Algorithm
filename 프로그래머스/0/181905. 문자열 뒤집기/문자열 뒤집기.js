function solution(my_string, s, e) {
    let start = my_string.slice(0, s);
    let reverse = my_string.split('').slice(s, e + 1).reverse().join('');
    let end = my_string.slice(e + 1, my_string.length);
    
    return start + reverse + end;
}