function diagonalDifference(arr) {
    // Write your code here
    let first = 0;
    let second = 0;
    
    for (let i = 0; i < 3; i++) {
        first += arr[i][i];
        second += arr[i][arr.length - (i + 1)];
    }
    return Math.abs(first - second);
}

console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]))