const validUserNames = (arr) => {
    return arr.filter (user => user.length < 10);
}