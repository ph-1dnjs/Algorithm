function solution(my_string, is_suffix) {
    const myLen = my_string.length;
    const isLen = is_suffix.length;
    return my_string.slice(myLen - isLen, myLen) === is_suffix ? 1 : 0;
} 