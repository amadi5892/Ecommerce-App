function staircase(n) {
    // Write your code here
    let p = '';
    
    for(let i = 1; i <= n; i++) {
        let blank = ' '.repeat(n-i);
        let star = '#'.repeat(i);
        p += blank + star +'\n';
    }
    
    console.log(p);
}

staircase(6);