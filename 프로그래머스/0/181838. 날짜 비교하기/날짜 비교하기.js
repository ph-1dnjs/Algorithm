function solution(date1, date2) {
    date1 = new Date(date1.join('-'));    
    date2 = new Date(date2.join('-'));

    return date1.getTime() >= date2.getTime() ? 0 : 1;
}
