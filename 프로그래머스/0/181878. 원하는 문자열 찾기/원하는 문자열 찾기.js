function solution(myString, pat) {
    return  myString.toUpperCase().indexOf(pat.toUpperCase()) < 0 ? 0 : 1;
}